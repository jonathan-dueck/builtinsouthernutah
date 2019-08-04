import styled from 'styled-components';

const SignUpStyles = styled.div`
    button {
        font-size: 2rem;
        background-color: #012c6a;
        border: 1px solid black;
        border-radius: 3px;
        margin: 1rem;
        color: white;
        padding:  1rem;

        &:hover {
            background-color: #ffc323;
        }
    }
    input {
        margin: 1rem auto;
        height: 2.5rem;
        width: 40rem;
        padding: 1rem;
    }
`;

export default SignUpStyles;