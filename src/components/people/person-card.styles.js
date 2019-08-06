import styled from 'styled-components';

const PersonCardStyles = styled.div`
    width: 300px;
    height: 400px;
    background-color: #fff;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.5);
    border: 1px solid black;
    margin: 0 2rem;

a {
    text-decoration: none;
    color: #000;
}


.user-name {
    font-size: 3rem;
    margin: 1rem 0;
    &:hover {
        text-decoration: underline;
    }   
}

.user-description {
    font-size: 1.5rem;
    display: block;
}

`;


export default PersonCardStyles;

