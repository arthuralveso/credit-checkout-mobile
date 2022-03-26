import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Container, CardContainer, CardWrapper, CardNumber, InfoWrapper, OwnerName, ExpirationDate, CardInformationWrapper } from './styles'
import IconVisa from '../../assets/icon-visa.svg'
import IconMaster from '../../assets/icon-mastercard.svg'
import { useCardInformation } from '../../contexts/CardInformationContext';

export default function Card() {
    const { cardData } = useCardInformation();

    const cardbrand: any = {
        '55': <IconMaster width={60} height={60} />,
        '41': <IconVisa width={60} height={60} />,
    }

    function getBrand(number: string) {
        if (number && number.length >= 2) {
            const prefix = number.substring(0, 2);

            return cardbrand.hasOwnProperty(prefix) ? cardbrand[prefix] : false

        }

        return cardbrand['undefined'];
    }

    return (
        <Container>
            <CardContainer brand={getBrand(cardData.cardNumber)}>
                <CardWrapper>
                    {getBrand(cardData.cardNumber)}


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