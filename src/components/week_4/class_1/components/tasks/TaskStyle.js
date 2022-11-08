import styled, { css } from "styled-components";

export const TaskContainer = styled.main`
  margin: 0 auto;
  width: 50%; 
  padding: 20px;

`

export const TaskCard = styled.div`
  border: 1px dotted gray;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: ${({ bgColor }) => bgColor ? "green": "crimson"};
  color: #eee;
  cursor: pointer;
  ${({ close }) => close && css`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: white;
    border: 1px solid crimson;
    color: crimson;
    font-size: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const TextField = styled.input`
  padding: 8px;
  border: 2px dotted gray;
  width: 50%;
  outline: none;
`

export const ErrorMessageLabel = styled.p`
  color: crimson;
  font-size: 12px;
`