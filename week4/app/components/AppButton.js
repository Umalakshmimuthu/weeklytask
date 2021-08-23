//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import defaultStyles from '../config/defaultStyles';
// import config from '../app/config/config'
//import WelcomeScreen from './screens/WelcomeScreen';

function AppButton({title,onPress, color="secondary"}){
   return(
      <TouchableOpacity
      style={[styles.container,]}
      onPress={onPress} color={color}>
      
      <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}




export default AppButton;


const styles = StyleSheet.create({
    container:{
    borderRadius:25,
     justifyContent:'center',
     alignItems:'center',
     padding:15,
     width:"100%",
     marginVertical:10,
     borderWidth:0.1,
     backgroundColor:defaultStyles.colors.primary
     
    },
    text:{
       color:Colors.white,
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
    }
   
   
 
 
});
