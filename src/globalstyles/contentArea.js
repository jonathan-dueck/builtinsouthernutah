import styled from 'styled-components';

const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  color: #000;
  padding: 2rem;
  font-size: 2rem;
  opacity: 0.9;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  height: 100%;


  .heading {
    display: block;
    font-size: 3rem;
    color: #000;
    &:hover {
        text-decoration: underline;
    }  
  }
  .description {
    color: #000;
    font-size: 1.5rem;
    display: block;
  }
  .image {

  }
`;

export default ContentArea;