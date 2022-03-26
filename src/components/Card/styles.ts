import styled from 'styled-components/native';

interface Props {
    brand: boolean;
}

export const Container = styled.View.attrs({
    shadowColor: '#111111',
    shadowOffset: { height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
})`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.View<Props>`
    height: 190px;
    width: 300px;
    border-radius: 16px;
    padding: 20px;
    position: absolute;
    

    background-color: ${({ brand }) => brand ? "#124768" : "#A8A8A8"};

`;

export const CardWrapper = styled.View`
    width: 100%;
    height: 100%;

    justify-content: flex-end; 
`;

export const CardBrand = styled.Image`
    width: 50px;
    height: 50px;
    
`;


export const CardInformationWrapper = styled.View`
    margin-top: 30px;
`;

export const CardNumber = styled.Text`
    color: #ffffff
`;

export const InfoWrapper = styled.View`
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
`;

export const OwnerName = styled.Text`
color: #ffffff
`;

export const ExpirationDate = styled.Text`
color: #ffffff
`;
