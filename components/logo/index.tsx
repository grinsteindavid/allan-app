import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.div`
	height: 1em;
	margin-left: 0.5rem;
	display: inline-block;
	position: relative;
	bottom: 25px;
  	animation: ${rotate} 2s linear infinite;
`;

export default Logo