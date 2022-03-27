import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as yup from 'yup';
import { useCardInformation } from '../../contexts/CardInformationContext';
import Input from '../Forms/Input';
import { cardNumberMask, cvvMask, expirationDateMask } from './mask';
import { Button, Container, ContainerWrapper, ErrorMessage, InputContainer, InputWrapper, Wrapper } from './styles';
import axios from "axios";
import * as Network from 'expo-network';
import { api } from '../../services/api';


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
    numberOfInstallments: yup.string().required('Insira o número de parcelas'),
}).required();

export default function CardInformationForm() {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm<ICardInformation>({
        resolver: yupResolver(schema)
    });
    const { handleToggleInput } = useCardInformation();

    async function onSubmit(data: ICardInformation) {
        try {
            // const { data } = await api.post('/post', data);

            console.log(data)
        } catch (err) {
            console.log(err)
        }


    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <ContainerWrapper>
                    <Controller
                        control={control}
                        name='cardNumber'
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <Input
                                    placeholder='Numero do cartão'
                                    onChangeText={text => [
                                        onChange(cardNumberMask(text)),
                                        handleToggleInput(cardNumberMask(text), 1),
                                    ]}
                                    keyboardType="number-pad"
                                    returnKeyType={'done'}
                                    maxLength={19}
                                    value={value}
                                />
                                <ErrorMessage>{errors.cardNumber?.message}</ErrorMessage>
                            </InputContainer>
                        )}
                    />

                    <Controller
                        control={control}
                        name='ownerName'
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <Input
                                    placeholder='Nome do titular'
                                    onChangeText={text => [
                                        onChange(text),
                                        handleToggleInput(text, 2)]}
                                    keyboardType={'default'}
                                    returnKeyType={'done'}
                                    maxLength={19}
                                    value={value}
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
                                render={({ field: { onChange, value } }) => (
                                    <InputContainer>
                                        <Input
                                            placeholder='Validade'
                                            onChangeText={text => [
                                                onChange(expirationDateMask(text)),
                                                handleToggleInput(expirationDateMask(text), 3),
                                            ]}
                                            keyboardType="number-pad"
                                            returnKeyType={'done'}
                                            maxLength={5}
                                            value={value}
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
                                render={({ field: { onChange, value } }) => (
                                    <InputContainer>
                                        <Input
                                            placeholder='CVV'
                                            onChangeText={text =>
                                                onChange(cvvMask(text))
                                            }
                                            keyboardType="number-pad"
                                            returnKeyType={'done'}
                                            maxLength={3}
                                            value={value}
                                        />
                                        <ErrorMessage>{errors.cvv?.message}</ErrorMessage>
                                    </InputContainer>
                                )}
                            />

                        </Wrapper>
                    </InputWrapper>

                    <Controller
                        control={control}
                        name='numberOfInstallments'
                        render={({ field: { onChange, value } }) => (
                            <InputContainer>
                                <RNPickerSelect
                                    style={pickerSelectStyles}
                                    onValueChange={(value) => onChange(value)}
                                    useNativeAndroidPickerStyle={false}
                                    placeholder={{ label: 'Selecione o numero de parcelas.', value: null }}
                                    items={[
                                        { label: '5x R$ 1.000,00 sem juros', value: '5' },
                                        { label: '4x R$ 1.200,00 sem juros', value: '4' },
                                        { label: '3x R$ 1.800,00 sem juros', value: '3' },
                                        { label: '2x R$ 2.500,00 sem juros', value: '2' },
                                        { label: '1x R$ 5.000,00 sem juros', value: '1' },
                                    ]}
                                />
                                <ErrorMessage>{errors.numberOfInstallments?.message}</ErrorMessage>
                            </InputContainer>
                        )}
                    />



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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderBottomColor: '#C6C6C6',
        borderBottomWidth: 2,
        fontSize: 18,
        color: '#3C3C3C',
    },
    inputAndroid: {
        borderBottomColor: '#C6C6C6',
        borderBottomWidth: 2,
        fontSize: 16,
        color: '#3C3C3C',
    },
});