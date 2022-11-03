import React from 'react'
import { ParentComponent, LogoContainer, Image, Form, Input, ButtonContainer, Button } from "./style.js";
import Logo from "../../../../assets/Form_Logo.webp";

const Container = ({ inputValues, setInputValues, handleSubmit, handleCleanUp }) => {
    return (
        <div>
            <ParentComponent>
                <LogoContainer>
                    <Image src={Logo} alt="form_logo" />
                </LogoContainer>
                <span>Register for more information</span>
                <Form id="form_camada" onSubmit={handleSubmit}>
                    <Input
                        value={inputValues.name}
                        onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
                        placeholder="Name" />
                    <Input
                        value={inputValues.lastname}
                        onChange={(e) => setInputValues({ ...inputValues, lastname: e.target.value })}
                        placeholder="Last name" />
                    <Input
                        value={inputValues.email}
                        onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
                        placeholder="email" />
                    <Input
                        value={inputValues.password}
                        onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
                        placeholder="password" type="password" />
                </Form>
                <ButtonContainer>
                    <Button onClick={handleCleanUp} type="button">Cancel</Button>
                    <Button form="form_camada" main={true} type="submit">Submit</Button>
                </ButtonContainer>
            </ParentComponent>
        </div>
    )
}

export default Container