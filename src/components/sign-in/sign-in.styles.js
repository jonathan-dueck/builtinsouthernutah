import styled from 'styled-components';

const SignInStyles = styled.div`
    button {
        font-size: 2rem;
        background-color: #012c6a;
        border: 1px solid black;
        border-radius: 3px;
        margin: 1rem;
        color: white;
        padding:  1rem;
        transition: 0.2s ease-out;


        &:hover {
            background-color: #ffc323;
            color: #000;
        }
    }
    input {
        margin: 1rem auto;
        height: 2.5rem;
        width: 40rem;
        padding: 1rem;
    }
`;

export default SignInStyles;