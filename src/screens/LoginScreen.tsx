import React, { FC, useCallback } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { RouteNavigationParams, SCREENS } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

type LoginScreenProps = {
    navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.LOGIN>;
};

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const goToHomeScreen = useCallback(() => {
        navigation.navigate(SCREENS.HOME);
    }, [navigation]);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text>Login</Text>
            <Button title={"ok"} onPress={goToHomeScreen} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
    },
});

export default LoginScreen;
