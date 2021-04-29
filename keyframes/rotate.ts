import { keyframes } from "styled-components";

const rotate = (from: number = 0, to: number = 360) => {
	return keyframes`
  from {
    transform: rotate(${from}deg);
  }

  to {
    transform: rotate(${to}deg);
  }
`;
}

export default rotate