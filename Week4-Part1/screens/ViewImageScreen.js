
import React from 'react';
import {  StyleSheet ,Image,View,SafeAreaView} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';

const ViewImageScreen = () => {
    const {landscape} = useDeviceOrientation()
   
    return (
 <SafeAreaView style={[styles.container,{}]}>
      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',marginTop:landscape?'5%':'14%'}}>
             {/* <View style={[styles.box,{backgroundColor:color.primary,marginRight:'10%'}]}/>
            <View style={[styles.box,{backgroundColor: color.secondary, marginLeft:'10%'}]}/> */}
            <View style={[styles.box,{marginRight:'10%'}]}>
            <MaterialCommunityIcons name='trash-can-outline' size={30} color='white'/>
            </View>
            <View style={[styles.box,{ marginLeft:'10%'}]}>
            <MaterialCommunityIcons name='close' size={30} color='white'   />
            </View>

      </View>
            <Image  style={[styles.image,{marginTop:landscape?'1%':'24%',height:landscape?270:431}]} resizeMode={'stretch'} source={require('../assets/chair.jpg')}></Image>
</SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:'black',
        width:'100%',
        height:'100%', 
               },

      image:{
        
          width:'100%',
         // height:431,
    flexWrap:'wrap',alignContent:'stretch',
          //marginTop:'20%',
           },

      box: {
         width: 50,
         height: 50,
           } 

})

export default ViewImageScreen;



