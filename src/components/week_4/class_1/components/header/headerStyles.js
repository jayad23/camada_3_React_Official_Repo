import styled from "styled-components";

export const Header = styled.header`
  border: 3px dotted black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #3E382D;
  color: #eee;
`
export const Navbar = styled.nav`
  width: 50%;
  text-align: center;
`;

export const ListContainer = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  & > li {
    padding: 5px;
    cursor: pointer;
    width: 100%;
    &:hover{
      transform: scale(1.02);
    }
  }
`