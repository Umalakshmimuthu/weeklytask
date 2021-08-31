import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../app/colors/Config';
import defaultStyles from '../app/colors/DefaultStyles';
import AppText from '../components/AppText';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';

const LoginScreen=({icon, text ,value1,value2})=> {
  
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const myPress = () => {
        console.log('hi');
        console.log(email);
        console.log(password);
    }

  return(
  <View style={styles.container}>
  <Image  style={{height:120, width:120}} source={require('../assets/logo1.jpeg')}></Image>

  {/* <TextInputs  icon ='email' placeholder='Email'/>
  <TextInputs  icon ='lock' placeholder='Password' secureTextEntry={true} /> */}

  <TextInputs  icon ='email' placeholder='Email'  ></TextInputs>
  <TextInputs  icon ='lock' placeholder='Password' secureTextEntry={true}></TextInputs>

   <AppButton title="LOGIN" color={color.secondary} myPress={myPress} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    marginVertical:10,
    backgroundColor:defaultStyles.colors.light
   
  },
  
});


export default LoginScreen;