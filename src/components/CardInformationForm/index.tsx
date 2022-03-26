import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useCardInformation } from '../../contexts/CardInformationContext';
import Input from '../Forms/Input';
import { cardNumberMask, cvvMask, expirationDateMask } from './mask';
import { Button, Container, ContainerWrapper, ErrorMessage, InputContainer, InputWrapper, Wrapper } from './styles';


export interface ICardInformation {
    cardNumber: string;
    ownerName: string;
    date: string;
    numberOfInstallments: string;
    cvv: string;
};

export default function CardInformationForm() {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm<ICardInformation>();
    const { handleToggleInput } = useCardInformation();
    const [cardInformation, setCardInformation] = useState<ICardInformation>({
        cardNumber: '',
        ownerName: '',
        date: '',
        numberOfInstallments: '',
        cvv: '',
    });

    function onSubmit(data: ICardInformation) {
        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <ContainerWrapper>
                    <Controller
                        control={control}
                        name='cardNumber'
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <Input
                                    placeholder='Numero do cartão'
                                    onChangeText={text => [
                                        onChange(text),
                                        handleToggleInput(cardNumberMask(text), 1),
                                        setCardInformation({ ...cardInformation, cardNumber: cardNumberMask(text) })]}
                                    keyboardType="number-pad"
                                    returnKeyType={'done'}
                                    maxLength={19}
                                    value={cardInformation.cardNumber}
                                />
                                {errors.cardNumber && <ErrorMessage>This is required.</ErrorMessage>}
                            </InputContainer>
                        )}
                    />

                    <Controller
                        control={control}
                        name='ownerName'
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <Input
                                    placeholder='Nome do titular'
                                    onChangeText={text => [
                                        onChange(text),
                                        handleToggleInput(text, 2),
                                        setCardInformation({ ...cardInformation, ownerName: text })]}
                                    keyboardType={'default'}
                                    returnKeyType={'done'}
                                    maxLength={19}
                                    value={cardInformation.ownerName}
                                />
                                {errors.ownerName && <ErrorMessage>This is required.</ErrorMessage>}
                            </InputContainer>
                        )}
                    />

                    <InputWrapper>
                        <Wrapper>
                            <Controller
                                control={control}
                                name='date'
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <InputContainer>
                                        <Input
                                            placeholder='Validade'
                                            onChangeText={text => [
                                                onChange(text),
                                                handleToggleInput(expirationDateMask(text), 3),
                                                setCardInformation({ ...cardInformation, date: expirationDateMask(text) })]}
                                            keyboardType="number-pad"
                                            returnKeyType={'done'}
                                            maxLength={5}
                                            value={cardInformation.date}
                                        />
                                        {errors.date && <ErrorMessage>This is required.</ErrorMessage>}
                                    </InputContainer>
                                )}
                            />

                        </Wrapper>

                        <Wrapper>
                            <Controller
                                control={control}
                                name='cvv'
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <InputContainer>
                                        <Input
                                            placeholder='CVV'
                                            onChangeText={text => [
                                                onChange(text),
                                                setCardInformation({ ...cardInformation, cvv: cvvMask(text) })
                                            ]}
                                            keyboardType="number-pad"
                                            returnKeyType={'done'}
                                            maxLength={3}
                                            value={cardInformation.cvv}
                                        />
                                        {errors.cvv && <ErrorMessage>This is required.</ErrorMessage>}
                                    </InputContainer>
                                )}
                            />

                        </Wrapper>
                    </InputWrapper>

                    <Button onPress={handleSubmit(onSubmit)} >
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </Button>
                </ContainerWrapper>
            </Container >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});