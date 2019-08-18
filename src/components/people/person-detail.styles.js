import styled from 'styled-components';

const PersonDetailStyles = styled.div`
        display: flex;   
        justify-content: space-around; 


    .person-detail-left, .person-detail-right {
        display: flex;
        flex-direction: column;
    }
    .person-detail-left {
        width: 30%;
    }
    .person-detail-right {
        width: 70%;
        border: 1px solid black;
        border-radius: 10px;
        margin-left: 4rem;
        margin-right: 4rem;
        padding: 1.5rem;
    }

    .person-detail-buttons {
        display: flex;
        justify-content: flex-end !important;
    }

    .edit-profile {
        cursor: pointer;
        margin-right: 1rem;
    }

    .delete-profile {
        cursor: pointer;
        margin-left: 1rem;
        margin-right: 0;
    }

    .user-name {
        align-items: center;
    }
    .user-title {
        font-size: 3rem;
    }
    .user-description {
        font-size: 2rem;
        padding: 20px 70px;
        margin: 0 auto;
        text-align: left;
    }
    .social-links {
        display: flex;
        justify-content: center;
        height: 50px;
    }
    .social-logo a img {
        width: 30px;
        padding: 10px;
        transition: .3s;

        &:hover {
            margin-top: 10px;
            
        }
    }
    .social-url {
        font-size: 2rem;
    }
`;

export default PersonDetailStyles;