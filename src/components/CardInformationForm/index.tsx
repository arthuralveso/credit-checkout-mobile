import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { useCardInformation } from '../../contexts/CardInformationContext';
import Input from '../Forms/Input';
import { cardNumberMask, cvvMask, expirationDateMask } from './mask';
import { Button, Container, InputWrapper, Wrapper } from './styles'


export interface ICardInformation {
    cardNumber: string;
    ownerName: string;
    date: string;
    numberOfInstallments: string;
    cvv: string;
};

export default function CardInformationForm() {
    const { handleToggleInput } = useCardInformation();
    const [cardInformation, setCardInformation] = useState<ICardInformation>({
        cardNumber: '',
        ownerName: '',
        date: '',
        numberOfInstallments: '',
        cvv: '',
    });


    return (
        <Container>
            <Input
                style={styles.InputBorder}
                placeholder='Numero do cartão'
                onChangeText={text => [
                    handleToggleInput(cardNumberMask(text), 1),
                    setCardInformation({ ...cardInformation, cardNumber: cardNumberMask(text) })]}
                keyboardType="number-pad"
                returnKeyType={'done'}
                maxLength={19}
                value={cardInformation.cardNumber}
            />


            <Input
                style={styles.InputBorder}
                placeholder='Nome do titular'
                onChangeText={text => [
                    handleToggleInput(text, 2),
                    setCardInformation({ ...cardInformation, ownerName: text })]}
                keyboardType={'default'}
                returnKeyType={'done'}
                maxLength={19}
                value={cardInformation.ownerName}
            />

            <InputWrapper>
                <Wrapper>
                    <Input
                        style={styles.InputBorder}
                        placeholder='Validade'
                        onChangeText={text => [
                            handleToggleInput(expirationDateMask(text), 3),
                            setCardInformation({ ...cardInformation, date: expirationDateMask(text) })]}
                        keyboardType="number-pad"
                        returnKeyType={'done'}
                        maxLength={5}
                        value={cardInformation.date}
                    />
                </Wrapper>

                <Wrapper>
                    <Input
                        style={styles.InputBorder}
                        placeholder='CVV'
                        onChangeText={text =>
                            setCardInformation({ ...cardInformation, cvv: cvvMask(text) })}
                        keyboardType="number-pad"
                        returnKeyType={'done'}
                        maxLength={3}
                        value={cardInformation.cvv}
                    />
                </Wrapper>
            </InputWrapper>

            <Button>
                <Text style={styles.buttonText}>Confirmar</Text>
            </Button>

        </Container>
    )
}

const styles = StyleSheet.create({

    InputBorder: {
        borderBottomColor: '#C6C6C6',
        borderBottomWidth: 2,
    },

    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});