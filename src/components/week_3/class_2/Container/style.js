import styled, { css } from "styled-components";

export const ParentComponent = styled.div`
    width: 350px;
    height: auto;
    margin: 0 auto;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    font-family: 'Poppins', sans-serif;

`

export const LogoContainer = styled.div`
    width: 100px;
`

export const Image = styled.img`
    width: 100%;
`
export const Form = styled.form`
    width: 100%;
    height: auto;
`

export const Input = styled.input`
    padding: 10px;
    width: 94%;
    font-family: 'Poppins', sans-serif;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px dotted gray;
    color: #000;
    &:focus{
        outline: none;
    }
    color: ${({ fontColor}) => fontColor };

`

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
`

export const Button = styled.button`
    width: 45%;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ main }) => main ? "#7367f0" : "#ea5455"};
    box-shadow: ${({ main }) => main && "0 3px 6px 0 rgb(115 103 240 / 40%)" };
    color: #eee;
    border: none;
    border-radius: 5px;
    font-size: .9em;
    letter-spacing: 1px;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    ${({ main }) => main && css`
        &:hover{
            transform: scale(1.02);
        };
    `};
`