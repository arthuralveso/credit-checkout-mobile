import { TextInput } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(TextInput).attrs({
  borderBottomColor: '#C6C6C6',
  borderBottomWidth: 2,
})`
  align-self: center;
  width: 100%;
  height: 20px;
  color: ${({ theme }) => theme.colors.textDark};

`;
