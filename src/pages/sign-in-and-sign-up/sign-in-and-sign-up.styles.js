import styled from 'styled-components';

const SignInUpStyles = styled.div`
font-size: 2rem;

.third-party-auth {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    max-width: 600px;
    margin: 3rem auto;
}

.auth-button {
    font-size: 2rem;
    cursor:pointer;
    
}
.new-user-active {
    background-color: navy;
    color: white;
    padding: 1rem;
    margin: 2rem;
}

.returning-user-active {
    background-color: navy;
    color: white;
    padding: 1rem;
    margin: 2rem;
}

.social-icon {
    max-height: 60px;
}

.auth-option-tabs {
    margin: 2rem auto;
}

.pointer {
    cursor:pointer;
}
`;

export default SignInUpStyles;