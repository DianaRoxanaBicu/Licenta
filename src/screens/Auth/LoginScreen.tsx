import React, { FC, useCallback } from "react";
import {  ScrollView, StyleSheet } from "react-native";
import { RouteNavigationParams, SCREENS } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import DTextInput from "components/Common/DTextInput";
import { useForm } from "react-hook-form";
import { useScreenHeader } from "navigation/ScreenHeader";

type LoginScreenProps = {
    navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.LOGIN>;
};

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {

    useScreenHeader({
        headerTitle: "Login"
    }, [])

    const {control, handleSubmit, getValues, setError} = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const login = useCallback(() => {
        console.log(getValues())
    }, [getValues]);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <DTextInput
              control={control}
              name={"email"}
              label={"Email"}
              rules={{
                  required: {
                      value: true,
                      message: "Email is empty"
                  }
              }}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
            />
            <DTextInput
              control={control}
              name={"password"}
              label={"Password"}
              rules={{
                  required: {
                      value: true,
                      message: "Password is empty"
                  }
              }}
              secureTextEntry={true}
            />
            <Button onPress={handleSubmit(login)} mode={"contained"}>
                Login
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
});

export default LoginScreen;
