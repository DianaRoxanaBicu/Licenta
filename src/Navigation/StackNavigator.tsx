import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import { SCREENS } from "./screens";

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
