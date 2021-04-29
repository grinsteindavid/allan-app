import styled, { } from "styled-components";

export interface IProps {
	padding?: string
}

const Container = styled.div<IProps>`
	min-height: 100vh;
	padding: ${({ padding }) => padding};
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
	height: 100vh;
`;

Container.defaultProps = {
	padding: '0.5rem 0.5rem 0.5rem 0.5rem',
}

export default Container