import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 130px;
  width: 100%;
  height: 300px;

  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  width: 170px;
`;



export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.confirmButton};
    border-radius: 4px;
    padding: 15px;

    align-items: center;

    width: 150px;
    height: 50px;

`;
