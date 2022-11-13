import styled from "styled-components";

export const PrincipalContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: #091114;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgb(115 103 240 / 40%);
    letter-spacing: 1px;
`

export const Title = styled.h1`
    color: #92B6FF;
    font-size: 50px;

`

export const SubTitle = styled.h3`
    color: #92D8CA;
    font-size: 30px;
`

export const MiniTitle = styled.h5`
    color: #C7CEDE;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 200;
`

export const Paragraphs = styled.p`
    color: #C7CEDE;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 200;
`

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    width: 45%;
    font-family: 'Poppins', sans-serif;
    color: #eee;
    border: none;
    border-radius: 5px;
    font-size: .9em;
    letter-spacing: 1px;
    padding: 10px;
    cursor: pointer;
`

export const Button = styled.button`
    margin-left: 40%;
    background-color: #C62A2A;
    width: 20%;
    font-size: 30px;
    cursor: pointer;
    &:hover{transform: scale(1.02)}
`