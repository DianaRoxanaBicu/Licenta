import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../Navigation/screens";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToHomeScreen = useCallback(() => {
    console.log("go to home screen");
    // @ts-ignore
    navigation.navigate(SCREENS.HOME);
  }, []);

  return(
    <View>
      <Text>
        Login
      </Text>
      <Button title={"ok"} onPress={goToHomeScreen}/>
    </View>
  )
};

export default LoginScreen;
