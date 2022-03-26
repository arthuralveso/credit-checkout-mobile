import { View, Text, TextInputProps } from 'react-native'
import React from 'react'
import { Container } from './styles'

type Props = TextInputProps

export default function Input({ ...rest }: Props) {
    return (
        <Container {...rest} />
    )
}