# Exame - Bexs Front-end"
    Aplicação mobile desenvolvida com React Native utilizando Expo, styled-components, react-hook-form e yup

# Pré-requisitos

- Yarn ou NPM
- Android Studio (SDK - system development kit) Caso queira executar através de um emulador em sua maquina
- Expo (para instalação do expo basta seguir a documentação no site oficial [https://docs.expo.dev/](https://docs.expo.dev/)



# Instalação

```
git clone https://github.com/arthuralveso/credit-checkout-mobile.git
cd  credit-checkout-mobile
yarn ou npm install

```

# Como executar

A aplicaço pode ser executada num dipositivo fisico ou por um emulador que pode ser configurado pelo Android Studio
Com o dispositivo pronto basta executar:

```
expo start

```

Uma pagina web será aberta com um QR CODE. Com o Expo instalado no seu dispositivo móvel, basta apontar a camera para o QRCode que o aplicativo será aberto.

## Visao Geral

Na aplicação temos os seguintes elementos:

- Alguns elementos da aplicação:
    - Pages
        - Layout
    - Components
        - Card
        - CardInformationForm
    - Context
        - CardInformationContext
    - Forms
        - Input
        
### Layout
        
    layout da aplicação e contem o demais componentes visuais
        
### Card
        
    Componente que exibe as informações do cartao que recebe via context
        
### Forms/Input
        
    Componente que retorna um input estilizado

### CardInformationForm
        
    Formulario que faz o binding com as informações exibidas no componente Card, além de fazer uma requisição POST para o json-server.
    Formulario utilizado com a lib react-hooks-form e para validação foi utilizada a lib Yup
    As informações do cartão são passadas para o componente Card através do CardInformationContext
     No arquivio masks.ts estão as funções utilizadas para aplicar a mascara nos inputs


