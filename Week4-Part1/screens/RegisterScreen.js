import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../app/colors/Config';
import defaultStyles from '../app/colors/DefaultStyles';
import AppText from '../components/AppText';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';

const RegisterScreen=({icon})=> {
  
  


  return(
  <View style={styles.container}>
  <TextInputs  icon ='account' placeholder='Name'/>
  <TextInputs  icon ='email' placeholder='Email'/>
  <TextInputs  icon ='lock' placeholder='Password' secureTextEntry={true} />

   <AppButton title="REGISTER" color={color.primary} />
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


export default RegisterScreen;