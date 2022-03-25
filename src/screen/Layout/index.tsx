import React from 'react'
import { Container, Header, StepsWrapper, BackIcon, Step, TItleWrapper, CardIcon, TItle, HeaderWrapper } from './styles'

export default function Layout() {
    return (
        <Container>
            <Header>
                <HeaderWrapper>
                    <StepsWrapper>
                        <BackIcon name="chevron-left" ></BackIcon>
                        <Step>Etapa 2 de 3</Step>
                    </StepsWrapper>
                    <TItleWrapper>
                        <CardIcon name="credit-card" ></CardIcon>
                        <TItle>Adicione um novo cartão de crédito</TItle>
                    </TItleWrapper>
                </HeaderWrapper>
            </Header>
        </Container>
    )
}