import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as yup from 'yup';
import { useCardInformation } from '../../contexts/CardInformationContext';
import Input from '../Forms/Input';
import { cardNumberMask, cvvMask, expirationDateMask } from './mask';
import { Button, Container, ContainerWrapper, ErrorMessage, InputContainer, InputWrapper, Wrapper } from './styles';


export interface ICardInformation {
    cardNumber: string;
    ownerName: string;
    expirationDate: string;
    numberOfInstallments: string;
    cvv: string;
};

const schema = yup.object({
    cardNumber: yup.string().min(16, 'Número do cartão inválido').required('Número do cartão inválido'),
    ownerName: yup.string().max(15).required('Insira seu nome completo'),
    expirationDate: yup.string().min(5, 'Data inválida').required('Data inválida'),
    cvv: yup.string().min(3, 'Código inválido').required('Código inválido'),
    // numberOfInstallments: yup.string().required('Insira o número de parcelas'),
}).required();

export default function CardInformationForm() {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm<ICardInformation>({
        resolver: yupResolver(schema)
    });
    const { handleToggleInput } = useCardInformation();
    const [cardInformation, setCardInformation] = useState<ICardInformation>({
        cardNumber: '',
        ownerName: '',
        expirationDate: '',
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
                                <ErrorMessage>{errors.cardNumber?.message}</ErrorMessage>
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
                                <ErrorMessage>{errors.ownerName?.message}</ErrorMessage>
                            </InputContainer>
                        )}
                    />

                    <InputWrapper>
                        <Wrapper>
                            <Controller
                                control={control}
                                name='expirationDate'
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <InputContainer>
                                        <Input
                                            placeholder='Validade'
                                            onChangeText={text => [
                                                onChange(text),
                                                handleToggleInput(expirationDateMask(text), 3),
                                                setCardInformation({ ...cardInformation, expirationDate: expirationDateMask(text) })]}
                                            keyboardType="number-pad"
                                            returnKeyType={'done'}
                                            maxLength={5}
                                            value={cardInformation.expirationDate}
                                        />
                                        <ErrorMessage>{errors.expirationDate?.message}</ErrorMessage>
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
                                        <ErrorMessage>{errors.cvv?.message}</ErrorMessage>
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