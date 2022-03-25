import { View, Text } from 'react-native'
import React from 'react'
import { Container, CardContainer, CardWrapper, CardBrand, CardNumber, InfoWrapper, OwnerName, ExpirationDate } from './styles'

export default function Card() {
    return (
        <Container>
            <CardContainer>
                <CardWrapper>
                    <CardBrand source={require('../../assets/icon-visa.svg')} />

                    <View>
                        <CardNumber>**** **** **** ****</CardNumber>
                        <InfoWrapper>
                            <OwnerName>NOME DO TITULAR</OwnerName>
                            <ExpirationDate>00/00</ExpirationDate>
                        </InfoWrapper>
                    </View>
                </CardWrapper>
            </CardContainer>

        </Container>
    )
}