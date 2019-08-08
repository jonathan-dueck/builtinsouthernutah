import React, { Fragment } from 'react';
import PersonDetailForm from '../../components/people/person-detail-form';
import PersonDetail from '../../components/people/person-detail.component';

// import { db } from '../../config/Firebase';

class PersonDetailPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            person: {}
        }
        this.toggleState = this.toggleState.bind(this);
    }

    componentDidMount() {
        // Fetch this user from the backend, getting user id from address bar

    }

    toggleState(editMode) {
        this.setState({ editMode });
    }

    render() {
        const { id, name, headshotSrc, description } = this.state.person;
        const { editMode } = this.state;
        return (
            <Fragment>
                {editMode ?
                    <PersonDetailForm
                        id={id}
                        name={name}
                        headshotSrc={headshotSrc}
                        description={description}
                        editMode={this.toggleState}
                    />
                    :
                    <PersonDetail
                        id={id}
                        name={name}
                        headshotSrc={headshotSrc}
                        description={description}
                        editMode={this.toggleState}
                    />}
            </Fragment>
        );
    }
}

export default PersonDetailPage;