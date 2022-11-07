import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import { SCREENS } from './types';
import WelcomeScreen from "screens/Auth/WelcomeScreen";
import CreateAccountScreen from "screens/Auth/CreateAccountScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={SCREENS.WELCOME} component={WelcomeScreen} />
			<Stack.Screen name={SCREENS.CREATE_ACCOUNT} component={CreateAccountScreen} />
			<Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
			<Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
