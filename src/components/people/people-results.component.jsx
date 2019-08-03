import React from 'react';

import './people-results.styles.scss';

import PersonCard from './person-card.component';


// Component will map over 0 or more PersonCard components: ie: results.map((person) => )
class Results extends React.Component {
    render() {
        return (
            <div className="results">
                <PersonCard
                    id="1"
                    name="Jonathan Dueck"
                    subtitle="GraphQL Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam. Nec ultrices dui sapien eget mi proin sed. Integer quis auctor elit sed vulputate mi sit. Morbi tristique senectus et netus et malesuada. Viverra ipsum nunc aliquet bibendum enim facilisis. Augue eget arcu dictum varius duis at consectetur. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Id faucibus nisl tincidunt eget nullam non. Massa eget egestas purus viverra accumsan in nisl nisi. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Quisque non tellus orci ac auctor augue mauris augue neque. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Id donec ultrices tincidunt arcu. Ipsum a arcu cursus vitae congue. Eu non diam phasellus vestibulum. Elit eget gravida cum sociis natoque penatibus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Sed felis eget velit aliquet sagittis id. Congue quisque egestas diam in arcu cursus euismod quis. Ac odio tempor orci dapibus ultrices. Dictum sit amet justo donec enim diam vulputate ut pharetra. Purus faucibus ornare suspendisse sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Viverra vitae congue eu consequat ac felis donec et. Mattis nunc sed blandit libero volutpat sed cras ornare. Sed risus ultricies tristique nulla aliquet enim tortor at. Congue mauris rhoncus aenean vel elit scelerisque mauris. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Tempor orci eu lobortis elementum nibh tellus. Amet dictum sit amet justo donec enim diam vulputate. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Tincidunt ornare massa eget egestas."
                    headshotSrc="https://via.placeholder.com/300/400"
                />
            </div>
        )
    }
}

export default Results;