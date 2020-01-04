import styled from 'styled-components';

const SignInUpStyles = styled.div`
.switch-state {
    width: 30rem;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0.2rem auto;
    padding: 2rem;
    font-size: 1.5rem;
    transition: 0.2s ease-out;


    &:hover {
        background-color: #012c6a;
        color: #fff;
    }
}

.third-party-auth {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto;
}

.auth-button {
    font-size: 2rem;
    cursor:pointer;
    
}
`;

export default SignInUpStyles;