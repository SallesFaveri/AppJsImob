import React, { Component } from 'react';

/* 
o export default pode ser usado direto na classe igual está ali ou 
export default Login;
no final do código.
*/
export default class Cadastro extends Component{
    render(){
        return (
          <view>
              <TextInput placeholder= 'Nome'/>
              <TextInput placeholder= 'Email'/>
              <TextInput placeholder= 'Rua'/>
              <TextInput placeholder= 'Num'/>
              <TextInput placeholder= 'Tel'/>
              <Button>
                  <text>Cadastrar-se</text>
              </Button>

          </view>  
        );
    }

}