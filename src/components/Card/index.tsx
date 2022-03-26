import { View, Text } from 'react-native'
import React from 'react'
import { Container, CardContainer, CardWrapper, CardNumber, InfoWrapper, OwnerName, ExpirationDate, CardInformationWrapper } from './styles'
import IconVisa from '../../assets/icon-visa.svg'
import { useCardInformation } from '../../contexts/CardInformationContext';

export default function Card() {
    const { cardData } = useCardInformation();

    return (
        <Container>
            <CardContainer>
                <CardWrapper>
                    <IconVisa width={60} height={60} />


                    <CardInformationWrapper>
                        <CardNumber>{cardData.cardNumber}</CardNumber>
                        <InfoWrapper>
                            <OwnerName>{cardData.ownerName}</OwnerName>
                            <ExpirationDate>{cardData.expirationDate}</ExpirationDate>
                        </InfoWrapper>
                    </CardInformationWrapper>
                </CardWrapper>
            </CardContainer>

        </Container>
    )
}