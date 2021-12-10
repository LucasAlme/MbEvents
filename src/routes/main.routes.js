import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Login from '../pages/login';
import { Telas } from '../utils/enums/telas';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from '../utils/Constants';
import { Icon } from 'react-native-elements';
import MyTickets from '../pages/myTickets';
import DetailsTicket from '../pages/detailsTickets';
import BuyTicket from '../pages/buyTicket';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function App() {

    function HomeNavigator() {
        return (
            <Stack.Navigator headerMode="screen">
                <Stack.Screen options={{ headerShown: false }} name={Telas.home} component={Home} />
                <Stack.Screen options={{ headerTitle: 'Detalhes do Ingresso', headerTintColor: colors.cinzaEscuro, headerStyle: { backgroundColor: "rgba(5, 230, 250, 0.05)" } }} name={Telas.detailsTicket} component={DetailsTicket} />
                <Stack.Screen options={{ headerTitle: 'Comprar Ingresso', headerTintColor: colors.cinzaEscuro, headerStyle: { backgroundColor: "rgba(5, 230, 250, 0.05)" } }} name={Telas.buyTickets} component={BuyTicket} />
            </Stack.Navigator>
        )
    }

    function MainNavigator() {
        const bottomTabBar = {
            activeTintColor: colors.azul, tabStyle: { backgroundColor: "rgba(5, 230, 250, 0.05)" },
        }
        return (
            <BottomTab.Navigator tabBarOptions={bottomTabBar}>
                <BottomTab.Screen name={Telas.home} component={HomeNavigator}
                    options={{ headerShown: false, tabBarLabel: "Inicio", tabBarIcon: (({ color }) => (<Icon name="home" color={color} size={27} type='feather'></Icon>)) }}
                />
                <BottomTab.Screen name={Telas.myTickets} component={MyTickets}
                    options={{ headerShown: false, tabBarLabel: "Ingressos", tabBarIcon: (({ color }) => (<Icon name="ticket" color={color} size={27} type='font-awesome'></Icon>)) }}
                />
                <BottomTab.Screen name={Telas.profile} component={Profile}
                    options={{ headerShown: false, tabBarLabel: "Perfil", tabBarIcon: (({ color }) => (<Icon name="user" color={color} size={27} type='feather'></Icon>)) }}
                />
            </BottomTab.Navigator >
        )
    };

    function AuthStack() {
        const isLogin = useSelector(state => state.isLogin);
        return (
            <Stack.Navigator >
                {!isLogin ?
                    <Stack.Screen options={{ headerShown: false }} name={Telas.login} component={Login} />
                    :
                    <Stack.Screen options={{ headerShown: false }} name={Telas.home} component={MainNavigator} />
                }
            </Stack.Navigator>
        );
    };

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <AuthStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;