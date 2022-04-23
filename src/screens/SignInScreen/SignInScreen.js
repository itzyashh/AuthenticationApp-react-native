import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logosocial.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPress = () => {
    console.warn("sign in");
  }
  const onForgotButtonPress = () => {
    console.warn("forgot pass in");
  }
  const onSignInFacebook = () => {
    console.warn("sign in facebook")
  }
  const onSignInGoogle = () => {
    console.warn("sign in google")
  }
  const onSignInApple = () => {
    console.warn("sign in apple")
  }
  const onSignUpButtonPress = () => {
    console.warn("sign up")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
        />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        />
      <CustomButton text="Sign In" onPress={onSignInPress} />
      <CustomButton text="Forgot password?" onPress={onForgotButtonPress} type='TERTIARY'/>

      <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor='#c0cbf0' fgColor='#4765A9'/>
      <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor='#ffbfbf' fgColor='#fc5238'/>
      <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor='grey' fgColor='black' />

      <CustomButton text="Dont have an account? Create one" onPress={onSignUpButtonPress} type='TERTIARY'/>
    </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '50%',
    height: 100,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
