import styled from 'styled-components';

const ResultStyles = styled.div`
    display: grid;
    max-width: 1200px;

    @media(min-width: 75rem) {
        grid-template-columns: 1fr 1fr 1fr;

    }   
    @media(max-width: 75rem) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(max-width: 56.25rem) {
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 37.5rem) {
        grid-template-columns: 1fr;
    }
`;

export default ResultStyles;