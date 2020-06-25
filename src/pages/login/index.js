import React, { Component } from 'react';
import api from '../../services/api';
import {Container, Logo, Input, Button, ButtonText, CadButton, CadButtonTxt, } from './style';
import {StackActions, NavigationActions} from 'react-navigation';


/* 
o export default pode ser usado direto na classe igual está ali ou 
export default Login;
no final do código.
||||||||||||||||
*/
export default class Login extends Component{

    handleEmailChange = (email) => { // flecha function
          this.setState({email})
    }
    handlePasswordChange = (password) => {
          this.setState({password})

    }
    handleCadastroPress = () => {
          this.props.navigation.navigate('Cadastro') // vai fazer a parte de navegação e comunicação entre as paginas

    }
    handleLogInPress = () => {
      if(this.state.email.lenght === 0 || this.state.password.lenght === 0){
              this.setState({error: 'Usuário ou senha em brancos. Por favor, preencha os campos para continuar!'})
      }else{
            const response = api.post('sessions', { // post lá para o servidor :3333
                  email: this.state.email,
                  password: this.state.password        
            })
        
      }

    }
    render(){
        return ( // Estilos dosponíveis no arquivo: style.js, localizada na pasta pages/login

          <Container>  
          <Logo source={require("../../image/logo.jpeg")} ></Logo>
            <Input 
                placeholder='Email'
                value={this.state.email}
                autoCapitalize='none' // não deixa iniciar com a 1ª letra manhuscula
                autoCorrect={false} // não deixa o texto se auto-corrigir quando inserido no campo
                onChangeText={this.handleEmailChange} // vai guardar a ação dentro do .state
            ></Input>

            <Input 
                placeholder='Senha'
                value={this.state.password}
                autoCapitalize='none'// não deixa iniciar com a 1ª letra manhuscula
                autoCorrect={false} // não deixa o texto se auto-corrigir quando inserido no campo
                onChangeText={this.handlePasswordChange} // vai guardar a ação dentro do .state
            ></Input>

            <Button
              onPress={this.handleLogInPress} /* manipulador da ação de toque */> 
            <ButtonText>Entrar</ButtonText>
            </Button>

            <CadButton onPress={this.handleCadastroPress}>
                <CadButtonTxt>Registrar-se</CadButtonTxt>
            </CadButton>

               

          </Container>  
        );
    }

}
