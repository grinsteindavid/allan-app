import rotate from "keyframes/rotate";
import styled, { } from "styled-components";

const Logo = styled.div`
	height: 40px;
	margin-left: 0.5rem;
	display: inline-block;
  	animation: ${rotate()} 2s linear infinite;
`;

export default Logo