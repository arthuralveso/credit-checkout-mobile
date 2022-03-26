import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 130px;
  width: 100%;
  height: 200px;

  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  background-color: aliceblue;
  

`;


export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#C6C6C6",
  borderBottomColor: '#C6C6C6',
  borderBottomWidth: 2,

})`

align-self: center;
  width: 80%;
  height: 20px;
`;
