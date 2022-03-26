import React from 'react'
import { useCardInformation } from '../../contexts/CardInformationContext';
import { Container, Input } from './styles'

export default function CardInformationForm() {
    const { handleToggleInput } = useCardInformation();

    return (
        <Container>
            <Input placeholder='Numero do cartão' />
            <Input placeholder='Nome do titular' />
            <Input placeholder='Validade' />
            <Input placeholder='CVV' />

        </Container>
    )
}