import styled from 'styled-components';

const AboutStyles = styled.div`
    max-width: 450px;
    margin: 0 auto;
    padding: 2rem;

    @media(max-width: 37.5rem) {
      border: none;
    }
        
    h1 {
			font-size: 3.5rem;        
			margin-bottom: 1rem;            
		}
		
		p {
			font-size: 1.5rem;
		}

    .developer {
      margin-bottom: 3rem;
    }
    .upcoming {
			border-top: 1px solid black;
			padding-top: 2rem;
		}
		
`;

export default AboutStyles;