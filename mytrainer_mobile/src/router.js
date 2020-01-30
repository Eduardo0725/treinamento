import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/login';
import Main from './pages/main';

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login',
            }
        },
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'MyTrainer',
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#000',
            },
        }
    })
)

export default Routes;