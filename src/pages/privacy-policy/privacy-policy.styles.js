import styled from 'styled-components';

const PrivacyStyles = styled.div`
    max-width: 750px;
    margin: 0 auto;
    text-align: left;
    padding: 4rem;

    @media(max-width: 37.5rem) {
      border: none;
    }
        
    h1 {
			font-size: 3.5rem;        
			margin-bottom: 4rem;            
		}

    h2 {
      font-size: 2rem;
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }
		
		p {
			font-size: 2rem;
		}

    li {
      font-size: 2rem;
      margin-left: 3rem;
      margin-bottom: 1rem;
    }

    .developer {
      margin-bottom: 3rem;
    }
    .upcoming {
			border-top: 1px solid black;
			padding-top: 2rem;
		}
		p {
      margin-bottom: 10px;
    }
`;

export default PrivacyStyles;