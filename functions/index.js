const functions = require('firebase-functions');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const cors = require('cors')({ origin: true });
const Busboy = require('busboy');
const fs = require('fs');

const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
  projectId: 'built-in-southern-utah',
  keyFilename: 'built-in-southern-utah-firebase-adminsdk-rplsy-85bda1974f.json'
});

// const gcs = require('@google-cloud/storage')(gcconfig)
// const { Storage } = require('@google-cloud/storage');
// const projectId = "built-in-southern-utah";

exports.onFileChange = functions.storage.object().onFinalize(event => {
  console.log(event);
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log("File Detected, function execution started");

  // prevent infinite loop
  if (path.basename(filePath).startsWith('resized-')) {
    console.log("Already resized this file");
    return;
  }

  const destBucket = storage.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType };
  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    return spawn('convert', [tmpFilePath, '-resize', '300x300', tmpFilePath]);
  }).then(() => {
    return destBucket.upload(tmpFilePath, {
      destination: 'resized-' + path.basename(filePath),
      metadata
    })
  });
});

exports.uploadFile = functions.https.onRequest(async (req, res) => {
  console.log("Begin uploadFile");
  cors(req, res, () => {
    // res.set('Access-Control-Allow-Origin', '*');

    if (req.method !== 'POST') {
      return res.status(500).json({
        message: 'Only POST requests are supported for profile photo upload.'
      });
    }
    console.log({ req });
    const busboy = new Busboy({ headers: req.headers });
    console.log("Busboy defined: ", busboy);
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log({ fieldname, file, filename, encoding, mimetype });
      const filepath = path.join(os.tmpdir(), filename)
      console.log({ filepath });
      uploadData = { file: filepath, type: mimetype }
      console.log({ uploadData });
      file.pipe(fs.createWriteStream(filepath));
    });
    busboy.on('finish', () => {
      console.log("Finishing Begins");
      const bucket = storage.bucket('built-in-southern-utah.appspot.com')
      console.log({ bucket });
      bucket.upload(uploadData.file, {
        uploadType: 'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      })
        .then(() => {
          return res.status(200).json({
            message: 'It worked!'
          });
        })
        .catch(err => {
          return res.status(500).json({
            error: err
          });
        })
    });
    busboy.end(req.rawBody);

  });
});