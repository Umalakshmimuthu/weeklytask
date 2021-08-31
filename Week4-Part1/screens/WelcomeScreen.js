
import React from 'react';
import { Text, View , Image, ImageBackground, StyleSheet, _View } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()

    return (
     <View style={{ flex:1,width:'100%',height:'100%',}}>
 <ImageBackground source={require('../assets/background.jpg')} resizeMode="stretch" blurRadius={3} style={{width: '100%', height: '100%',}}>
           
       <View style={{flex:1,}}>
            <Image  style={[styles.weblogo,{marginTop:landscape?'5%':'20%'}]} source={require('../assets/logo-red.png')}></Image>
            <Text  style={[styles.text,{paddingLeft:landscape?250:118,}]}>Sell What You Don't Need</Text>
             
            {/* <View style={[styles.pink,{marginTop:landscape?"0%":"120%"}]}></View> */}

            {/* <View style={{marginTop:landscape?'-1%':'35%'}}>
            <LoginButton  str='signup'/></View> */}

             {/* <View style={styles.blue} ></View> */}

             <View style={{marginTop:landscape?'10%':'100%',height:'90%'}}>

             <AppButton title="LOGIN" color={color.primary} />
             <AppButton title="REGISTER" color={color.secondary} />
             
             </View>


       </View> 
    </ImageBackground>
     </View>
    );
}



const styles = StyleSheet.create({  
   weblogo:{
            paddingTop:"10%",
            alignItems:'center',
            justifyContent:'space-between',
            width: 120,
            height: 120,
           // paddingTop:70,
          // marginTop:'20%',
           marginLeft:'35%'
          },
   text:{
           //paddingTop:"3%",
             
           alignItems:'center',
           //alignContent:'center',
           //justifyContent: 'center',
           paddingLeft:118,
           
        },
                
   pink:{
            //marginTop: "120%",
            marginTop:"120%",
            flex:1,
            backgroundColor:color.primary,
            
           
        },

    blue:{
      
        flex:1,
        backgroundColor:color.secondary,   
         }
})

export default WelcomeScreen;