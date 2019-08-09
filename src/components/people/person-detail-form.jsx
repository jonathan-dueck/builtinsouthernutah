import React from 'react';
import PersonDetailFormStyles from './person-detail-form.styles';
import Button from '../../globalstyles/button';

class PersonDetailForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: this.props.displayName,
            title: this.props.title,
            description: this.props.description
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("handle submit")
    }

    render() {
        console.log("this.props: ", this.props)
        const { editMode } = this.props;
        return (
            <PersonDetailFormStyles>
                <p>Authorization Level: </p>
                <p>Profile Visible:</p>
                <form>
                    <div>
                        <input
                            type="text"
                            name="displayName"
                            placeholder="Publicly Visible Name"
                            value={this.state.displayName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Profile Title, ie: 'Front-end Dev'"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <textarea name="description"
                        placeholder="Tell the world a little about yourself!"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                </form>
                <div className="button-row">
                    <Button onClick={this.handleSubmit}>Submit</Button>
                    <Button onClick={() => editMode(false)}>Cancel</Button>
                </div>

            </PersonDetailFormStyles>
        )
    }
}

export default PersonDetailForm;