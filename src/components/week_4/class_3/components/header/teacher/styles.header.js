import styled from "styled-components";
import { BsCartFill } from "react-icons/bs"

export const CustomCartIcon = styled(BsCartFill)`
  cursor: pointer;
`

export const Header =styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-bottom: -9px;
`;

export const DisabledFrame = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  font-size: 60%;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`