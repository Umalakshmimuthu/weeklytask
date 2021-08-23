import React from 'react';
import { Button, Image, StyleSheet, View , Text} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const Login = () => {
    return (
       <View style={styles.container}>
       <Image  style={styles.image} resizeMode='contain' source= {require('../../assets/download.jpg')}></Image>
       
       <AppTextInput icon='email' placeholder='Email'></AppTextInput>
       <AppTextInput icon='lock' placeholder='Password' secureTextEntry={true}></AppTextInput>
     
      <View style={styles.button}>
      <Text  onPress={()=>console.log('LoggedIn')}>
      Login
    </Text>
    </View>
       </View>
       
    );
}

export default Login;

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:70
    },
    image:{
        height:150,
        width:150,
        justifyContent:'center',
        marginBottom:30
    },
    button:{
        borderWidth:0.5,
        borderRadius:50, 
        width:'100%', 
        height:'13%', 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'royalblue',
        marginTop:15
    }
})