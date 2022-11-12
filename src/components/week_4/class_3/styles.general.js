import styled, { css } from "styled-components";

export const FlexedContainer = styled.section`
  display: flex;
  gap: ${(props) => `${props.gap}px`};
  flex-wrap: wrap;
  justify-content: ${props => props.justify};
  width: ${props => props.width};
  ${props => props.custom && css`
    align-items: ${props => props.align};
    padding: ${props => props.padding ? `${props.padding}px` : 0};
    flex-direction: ${props => props.direction};
    ${props => props.isCard && css`
      background: rgba( 255, 255, 255, 0.7 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 8.5px );
      -webkit-backdrop-filter: blur( 8.5px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    `}
  `}
`