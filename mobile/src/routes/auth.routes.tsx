import React from 'react';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpCpf from '../pages/SignUpCpf';
import SignUpPerson from '../pages/SignUpPerson';
import SignUpCont from '../pages/SignUpCont';

import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

const AuthRoutes: React.FC  = () => (
    <Auth.Navigator
        screenOptions= {{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38'}
        }}
    >
        <Auth.Screen name="Home" component={ Home } />
        <Auth.Screen name="SignIn" component={ SignIn } />
        <Auth.Screen name="SignUpCpf" component={ SignUpCpf } />
        <Auth.Screen name="SignUpPerson" component={ SignUpPerson } />
        <Auth.Screen name="SignUpCont" component={ SignUpCont } />
        <Auth.Screen name="SignUp" component={ SignUp } />
    </Auth.Navigator>
);

export default AuthRoutes;
