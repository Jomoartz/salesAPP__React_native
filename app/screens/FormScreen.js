import React from "react";
import {AppTextInput, AppText, View} from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')} );


function FormScreen(props){ 

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {console.log(values)}}
        validationSchema={validationSchema}>
        {({ errors, handleChange, handleSubmit, }) => (
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
            <AppText style={{color:'red'}} >{errors.email}</AppText>

            <AppTextInput
              autoCapitalize="None"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
              secureTextEntry
              placeholder="Password"
              textContentType="password"
            />
            <AppText style={{color:'red'}} >{errors.password}</AppText>
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

export default FormScreen;
