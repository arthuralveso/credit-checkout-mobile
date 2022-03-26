import { TextInput } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(TextInput)`
  align-self: center;
  width: 70%;
  height: 20px;
  color: ${({ theme }) => theme.colors.textDark};

`;
