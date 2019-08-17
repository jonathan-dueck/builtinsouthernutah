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
    }

    .delete-profile {
        display: flex;
        justify-content: flex-end;
        padding-right: 4rem;
        cursor: pointer;
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