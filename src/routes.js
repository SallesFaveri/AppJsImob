/* 
StackNavigator = Navegação entre telas por botões
TabNavigator = Navegação entre telas com abas
DrawerNavigator = Navegação entre telas com menu lateral


import {App} from './index' // Para importar tudo utilizar o * + as [nome qualquer]
*/
import {createStackNavigator} from 'react-navigation';

// rotas para cada um dos componentes da função
import Login from './pages/login';
import Main from './pages/login';
import Cadastro from './pages/login';
import More from './pages/login';

const Routes = createStackNavigator({
    Login,
    Main,
    Cadastro,
    More
}); 

export default Routes;
