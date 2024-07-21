import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

function FormScreen(props) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => { console.log(values); }}
        validationSchema={validationSchema}
      >
        {({ errors, handleChange, handleSubmit, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              placeholder="Email"
              textContentType="emailAddress"
            />
            {touched.email && <AppText style={styles.errorText}>{errors.email}</AppText>}

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
              secureTextEntry
              placeholder="Password"
              textContentType="password"
            />
            {touched.password && <AppText style={styles.errorText}>{errors.password}</AppText>}

            <AppButton
              onPress={handleSubmit}
              title="Login"
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorText: {
    color: 'red',
  },
});

export default FormScreen;
