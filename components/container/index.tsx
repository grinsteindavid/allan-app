import styled, { } from "styled-components";

export interface IProps {
	padding?: string,
	display?: string,
	justifyContent?: string,
	alignItems?: string,
}

const Container = styled.div<IProps>`
	min-height: 100vh;
	padding: ${({ padding }) => padding};
	height: 100vh;
	display: ${({ display }) => display};
	justify-content:  ${({ justifyContent }) => justifyContent};
	align-items:  ${({ alignItems }) => alignItems};
`;

Container.defaultProps = {
	padding: '0.5rem 0.5rem 0.5rem 0.5rem',
	display: 'normal',
	justifyContent: "normal",
	alignItems: "normal",
}

export default Container