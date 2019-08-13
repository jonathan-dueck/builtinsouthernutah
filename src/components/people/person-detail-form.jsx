import React from 'react';
import PersonDetailFormStyles from './person-detail-form.styles';
import Button from '../../globalstyles/button';
import { authLevels } from '../../utils/auth-levels';

class PersonDetailForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            permission: this.props.permission,
            profileVisible: this.props.profileVisible,
            displayName: this.props.displayName,
            title: this.props.title,
            description: this.props.description,
            headshotSrc: this.props.headshotSrc,
            twitter: this.props.twitter,
            github: this.props.github,
            facebook: this.props.facebook,
            portfolio: this.props.portfolio
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
                <p className="user-auth-level">Authorization Level: <strong>{authLevels(this.props.permission)}</strong></p>
                <p className="user-profile-visible">Profile Visible: <strong>{this.props.profileVisible ? "Yes" : "No"}</strong></p>
                < form >
                    <div className="user-profile-image">
                        <img alt={this.state.displayName} src={this.state.headshotSrc} />
                    </div>
                    <div className="form-row">
                        <span className="form-label">Name</span>
                        <input
                            type="text"
                            name="displayName"
                            placeholder="Publicly Visible Name"
                            value={this.state.displayName}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                        <span className="form-required">*</span>
                    </div>

                    <div className="form-row">
                        <span className="form-label">Title</span>
                        <input
                            type="text"
                            name="title"
                            placeholder="Profile Title, ie: 'Front-end Dev'"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                        <span className="form-required">*</span>
                    </div>

                    <div className="form-row">
                        <span><img className="form-label-img" src="../images/twitter-icon.png" alt="Twitter" /></span>
                        <input
                            type="text"
                            name="twitter"
                            placeholder="Twitter Profile URL"
                            value={this.state.twitter}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                    </div>
                    <div className="form-row">
                        <span><img className="form-label-img" src="../images/github-icon.png" alt="Github" /></span>
                        <input
                            type="text"
                            name="github"
                            placeholder="GitHub URL"
                            value={this.state.github}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                    </div>
                    <div className="form-row">
                        <span><img className="form-label-img" src="../images/facebook-icon.png" alt="Facebook" /></span>
                        <input
                            type="text"
                            name="facebook"
                            placeholder="Facebook URL"
                            value={this.state.facebook}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                    </div>
                    <div className="form-row">
                        <span><img className="form-label-img" src="../images/www-icon.png" alt="Portfolio" /></span>
                        <input
                            type="text"
                            name="portfolio"
                            placeholder="Your Portfolio URL"
                            value={this.state.portfolio}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                    </div>
                    <label htmlFor="description">Tell the world about yourself!</label>
                    <textarea name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        className="form-element"
                    />
                </form>
                <div className="button-row">
                    <Button onClick={this.handleSubmit}>Save</Button>
                    <Button onClick={() => editMode(false)}>Cancel</Button>
                </div>

            </PersonDetailFormStyles>
        )
    }
}

export default PersonDetailForm;