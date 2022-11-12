import styled, { css } from "styled-components";

export const CustomSpan = styled.span`
  margin-left: ${props => props.space ? `${props.space}px` : 0};
  cursor: pointer;
  &:hover{
    font-weight: bolder;
    text-transform: uppercase;
  ;}
  ${props => props.selection && css`
    font-weight: bolder;
    text-transform: uppercase;
    text-decoration: underline;
  `}
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  &:hover{
    transform: scale(1.05);
  }
`;

export const SectionWrapper = styled.section`
  padding: 10px;
  height: 120px;
`;

export const Button = styled.button`
  width: ${props => `${props.width}%`};
  padding: 10px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  background-color: ${props => props.color ? props.color : "green"};
  border: ${props => props.color ? `2px solid ${props.color}` : "2px solid green"};
`; 

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap:wrap;
  margin-top: 20px;
`;