import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { SCREENS } from './types';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
			<Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
