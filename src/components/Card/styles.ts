import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.View`
    height: 171px;
    width: 280px;
    border-radius: 16px;
    padding: 20px;
    position: absolute;
    
    background-color: ${({ theme }) => theme.colors.inputColor};

`;

export const CardWrapper = styled.View`
    width: 100%;
    height: 100%;

    justify-content: flex-end; 
`;

export const CardBrand = styled.Image`
    width: 50px;
    background-color: aliceblue;
    height: 50px;
    margin-bottom: 30px;
`;


export const CardNumber = styled.Text``;

export const InfoWrapper = styled.View`
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    width: 230px;
`;

export const OwnerName = styled.Text``;

export const ExpirationDate = styled.Text``;
