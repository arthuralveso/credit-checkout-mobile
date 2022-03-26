import React, { createContext, ReactNode, useContext, useState } from "react";

interface ICardInformationProps {
    children: ReactNode
}

interface ICardInformations {
    cardNumber: string;
    ownerName: string;
    expirationDate: string;
    numberOfInstallments: string;
    cvv: string;
};

interface ICardInformationContextData {
    cardData: ICardInformations;
    handleToggleInput: (value: string, key: number) => void
}

export const CardInformationContext = createContext<ICardInformationContextData>({} as ICardInformationContextData);


export function CardInformationProvider({ children }: ICardInformationProps) {
    const [cardData, setCardData] = useState<ICardInformations>({
        cardNumber: '**** **** **** ****',
        ownerName: 'NOME DO TITULAR',
        expirationDate: '00/00',
        numberOfInstallments: '',
        cvv: '',
    } as ICardInformations)


    function handleToggleInput(newValue: string, key: number) {
        const valor = { ...cardData };

        switch (key) {
            case 1:
                valor.cardNumber = newValue
                return setCardData(valor)
            case 2:
                valor.ownerName = newValue.toUpperCase();
                return setCardData(valor)
            case 3:
                valor.expirationDate = newValue
                return setCardData(valor)
            default:
                return;
        }
    }

    return (
        <CardInformationContext.Provider value={{ handleToggleInput, cardData }}>
            {children}
        </CardInformationContext.Provider>
    )
}

export function useCardInformation() {
    const context = useContext(CardInformationContext)

    return context;
}