import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";

export const AppNavigator = createStackNavigator({

    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            title: 'SplashScreen',
        },
    },

    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        },
    },

});

export default createAppContainer(AppNavigator);