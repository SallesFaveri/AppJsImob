import styled from "styled-components";
import styled from 'styled-components';


// ESTILOS DOS COMPONENTES DO LOGIN
const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #483D8B;
`;

const Logo = styled.Image`
    height: 50%;
    marginBottom: 40px;
`;

const Input = styled.TextInput`
    paddingHorizontal: 20px;
    paddingVertical: 15px;
    borderRadius: 5px;
    backgroudColor: #F0F8FF;
    alignSelf: stretch;
    marginBottom: 15px;
    marginHorizontal: 20px;
    fontSize: 16px;
`;

const Button = styled.TouchableHighlight`
    padding: 20px;
    borderRadious: 5px;
    backgroundColor: #F0F8FF;
    alignSelf: stretch;
    margin: 15px;
    marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
    color: #000000;
    textAlign: center;
    fontSize: 16px;
    fontwight: bold;

`;

const CadButton = styled.TouchableHighlight`
    padding: 10px;
    marginTop; 20px;
`;

const CadButtonTxt = styled.Text`
    color: 000000;
    fontweight: bold;
    fontSize: 16px;
    textAlign: center;
`;

export {Container, Logo, Input, Button, ButtonText, CadButton, CadButtonTxt};

