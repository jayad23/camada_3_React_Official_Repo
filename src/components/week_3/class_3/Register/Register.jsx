import React from "react";
import { Button, ButtonContainer, Form, Image, Input, LogoContainer, ParentComponent } from "../../class_2/Container/style";
import Logo from "../../../../assets/Form_Logo.webp";

const Register = ({
    title,
    registerValues,
    setRegisterValues,
    handleRegisterSubmit,
    handleCleanUp
}) => {
    return (
        <div>
            <ParentComponent>
                <LogoContainer>
                    <Image src={Logo} alt="form_logo" />
                </LogoContainer>
                <span>{title}</span>
                <Form id="form_camada" onSubmit={handleRegisterSubmit}>
                    <Input
                        value={registerValues.name}
                        onChange={(e) => setRegisterValues({ ...registerValues, name: e.target.value })}
                        placeholder="name" />
                    <Input
                        value={registerValues.email}
                        onChange={(e) => setRegisterValues({ ...registerValues, email: e.target.value })}
                        placeholder="email" />
                    <Input
                        value={registerValues.password}
                        onChange={(e) => setRegisterValues({ ...registerValues, password: e.target.value })}
                        placeholder="password" type="password" />
                    <Input
                        value={registerValues.repeatPassword}
                        onChange={(e) => setRegisterValues({ ...registerValues, repeatPassword: e.target.value })}
                        placeholder="password" type="password" />
                    <ButtonContainer>
                        <Button onClick={handleCleanUp} type="button">Cancel</Button>
                        <Button form="form_camada" main={true} type="submit">Submit</Button>
                    </ButtonContainer>
                </Form>
            </ParentComponent>
        </div>
    )
};

export default Register;
