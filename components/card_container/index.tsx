import styled, { } from "styled-components";

export interface IProps {
    height?: string
}

const CardContainer = styled.div<IProps>`
    width: 100%;
	height: ${({ height }) => height};
    max-height: ${({ height }) => height};
    min-height: ${({ height }) => height};
    overflow-y: scroll;
`;

CardContainer.defaultProps = {
    height: '500px'
}

export default CardContainer