import styled from 'styled-components';

const PersonDetailFormStyles = styled.div`
    display: block;
    margin: 0 auto;
    width: 40rem;
    
    form input, textarea {
        margin: 1rem auto;
        height: 2.5rem;
        width: 40rem;
        padding: 1rem;
        font-size: 1.5rem;
    }

    label {
        font-size: 2rem;
        font-weight: bold;
    }

    textarea {
        height: 40px;
        width: 400px;
        font-size: 1.8rem;
        padding: 1rem;
    }

    .user-auth-level {
        font-size: 2rem;
        text-align: center;
    }

    .user-profile-image {
        margin-bottom: 2rem;
    }

    .user-profile-visible {
        text-align: center;
        margin 1rem 0;
    }

    p {
        font-size: 1.5rem;
        text-align: left;
    }

    .button-row {
        display: flex;
    }

    .form-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .form-label {
        font-size: 2rem;
        margin-right: 1rem;
    }
    .form-label-img {
        width: 40px;
        margin-right: 1rem; 
    }
    .form-element {

    }
    .form-required {
        color: red;
        font-size: 3rem;
        margin-left: 1rem;
    }
    
`;

export default PersonDetailFormStyles;