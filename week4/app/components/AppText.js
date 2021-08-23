//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//import WelcomeScreen from './screens/WelcomeScreen';

function AppText({title,subtitle}){
   return(
      <View style={styles.container}>
      <Text style={styles.text}>{title} {subtitle}</Text>
     
      </View>
   )
}




export default AppText;


const styles = StyleSheet.create({
    container:{
    
     justifyContent:'center',
     alignItems:'center',
     padding:15,
     width:"115%",
     marginVertical:10
    
    },
    text:{
       
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
    }
   
   
 
 
});
