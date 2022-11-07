import React, { FC, useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigationParams, SCREENS } from "navigation/types";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { useScreenHeader } from "navigation/ScreenHeader";

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.WELCOME>;
};

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  useScreenHeader({
    headerTitle: "Welcome to Diana's farm"
  }, [])

  const goToLoginScreen = useCallback(() => {
    navigation.navigate(SCREENS.LOGIN);
  }, [navigation]);

  const goToCreateAccountScreen = useCallback(() => {
    navigation.navigate(SCREENS.CREATE_ACCOUNT);
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Button onPress={goToLoginScreen} mode={"contained"} style={styles.button}>
        Login
      </Button>
      <Button onPress={goToCreateAccountScreen} mode={"contained"} style={styles.button}>
        Create Account
      </Button>
    </ScrollView>
  );

};


const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: "center"
  },
  button: {
    margin: 4

  }
});

export default WelcomeScreen;
