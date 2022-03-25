import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;


export const Header = styled.View`
    width: 100%;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

export const HeaderWrapper = styled.View`
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
`;

export const StepsWrapper = styled.View`
    width: 500px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BackIcon = styled(Feather)`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 18px;
    margin-right: 350px;
`;

export const Step = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 13px;
    font-weight: 700;
    position: absolute;
`;

export const TItleWrapper = styled.View`
    width: 200px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;

export const CardIcon = styled(Feather)`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 55px;
    margin-right: 17px;
`;

export const TItle = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 16px;
    font-weight: 700;
 `;