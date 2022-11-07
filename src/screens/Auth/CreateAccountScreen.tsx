import React, { FC, useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigationParams, SCREENS } from "navigation/types";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useScreenHeader } from "navigation/ScreenHeader";
import { useForm } from "react-hook-form";
import DTextInput from "components/Common/DTextInput";

type CreateAccountScreenProps = {
  navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.CREATE_ACCOUNT>;
};

const CreateAccountScreen: FC<CreateAccountScreenProps> = ({ navigation }) => {

  useScreenHeader({
    headerTitle: "Create Account",
  }, []);

  const { control, handleSubmit, getValues, setError } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const create = useCallback(() => {
    console.log(getValues());
  }, [getValues]);

  const validateConfirmPassword = useCallback((confirmPassword: string) => {
    if (confirmPassword !== getValues().password) {
      return "Passwords don't match";
    }
  }, [getValues]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
      <DTextInput
        control={control}
        name={"name"}
        label={"Name"}
        rules={{
          required: {
            value: true,
            message: "Email is empty",
          },
        }}
        autoCapitalize={"words"}
      />
      <DTextInput
        control={control}
        name={"email"}
        label={"Email"}
        rules={{
          required: {
            value: true,
            message: "Email is empty",
          },
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
            message: "Password is empty",
          },
        }}
        secureTextEntry={true}
      />
      <DTextInput
        control={control}
        name={"confirmPassword"}
        label={"Confirm Password"}
        rules={{
          required: {
            value: true,
            message: "Password is empty",
          },
          validate: validateConfirmPassword,

        }}
        secureTextEntry={true}
      />


      <Button onPress={handleSubmit(create)} mode={"contained"}>
        Create Account
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: "center",
  },
});


export default CreateAccountScreen;
