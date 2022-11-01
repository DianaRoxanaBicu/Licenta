import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;
