import rotate from "keyframes/rotate";
import styled, { } from "styled-components";

const Logo = styled.div`
	height: 1em;
	margin-left: 0.5rem;
	display: inline-block;
	position: relative;
	bottom: 25px;
  	animation: ${rotate} 2s linear infinite;
`;

export default Logo