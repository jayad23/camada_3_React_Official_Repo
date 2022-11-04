import React from "react";
import { Button, ButtonContainer, Form, Image, Input, LogoContainer, ParentComponent } from "../../class_2/Container/style";
import Logo from "../../../../assets/Form_Logo.webp";

const Login = ({
    title,
    loginValues,
    setLoginValues,
    handleSubmitLogin,
    handleCleanUp
}) => {
    return (
        <div>
            <ParentComponent>
                <LogoContainer>
                    <Image src={Logo} alt="form_logo" />
                </LogoContainer>
                <span>{title}</span>
                <Form id="form_camada" onSubmit={handleSubmitLogin}>
                    <Input
                        value={loginValues.email}
                        onChange={(e) => setLoginValues({ ...loginValues, email: e.target.value })}
                        placeholder="email" />
                    <Input
                        value={loginValues.password}
                        onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
                        placeholder="password" type="password" />
                </Form>
                <ButtonContainer>
                    <Button onClick={handleCleanUp} type="button">Cancel</Button>
                    <Button form="form_camada" main={true} type="submit">Submit</Button>
                </ButtonContainer>
            </ParentComponent>
        </div>
    )
};

export default Login;
