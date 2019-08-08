import React from 'react';
import PersonDetailFormStyles from './person-detail-form.styles';

class PersonDetailForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayname: '',
            title: '',
            description: ''
        }
    }

    componentDidMount() {

    }

    render() {
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
                            defaultValue={this.state.displayName}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Profile Title, ie: 'Front-end Dev'"
                            defaultValue={this.state.title}
                        />
                    </div>
                    <textarea name="description"
                        placeholder="Tell the world a little about yourself!"
                        defaultValue={this.state.description}
                    />
                </form>
                <button onClick={() => editMode(false)}>Cancel</button>

            </PersonDetailFormStyles>
        )
    }
}

export default PersonDetailForm;