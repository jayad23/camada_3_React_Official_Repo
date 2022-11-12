import React, { useState } from 'react'
import { Header, DisabledFrame, Logo, Title, CustomCartIcon } from "./styles.header";
import { FlexedContainer } from '../../../styles.general';

const ContainedElement = ({ justify, gap, children }) => (
  <FlexedContainer
    gap={gap || 10}
    width={50}
    justify={justify}
    align="end"
    custom
  >
    {children}
  </FlexedContainer>
)

const HeaderComponent = ({ logo, appName, count, handleViewSelection }) => (
  <Header>
    <ContainedElement justify="start">
      <Logo src={logo} alt="app_logo" onClick={() => handleViewSelection("local")} />
      <Title>{appName}</Title>
    </ContainedElement>
    <ContainedElement justify="end" gap={1}>
      <CustomCartIcon size={35} onClick={() => handleViewSelection("cart")} />
      <DisabledFrame>
        {count}
      </DisabledFrame>
    </ContainedElement>
  </Header>
)

export default HeaderComponent