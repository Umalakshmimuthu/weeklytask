import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import color from '../app/colors/Config';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";


export default function Card({title,subtitle}){
    const {landscape} = useDeviceOrientation()

    return(
<View style={styles.container}>
<View style={styles.container1}>

<View style={[styles.container2,{borderRadius:20,backgroundColor:'white',marginTop:'20%',}]}>
<Image  style={[styles.image,{marginTop:landscape?'1%':'0%',height:landscape?270:180,borderRadius:10}]} source={require('../assets/jacket.jpg')}></Image>
<Text style={styles.text}>{title}</Text>
<Text style={[styles.text,{color:color.secondary}]}>{subtitle}</Text>
</View>


</View>
 </View>


    );
}


const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'white',
    width:'100%',
    height:'100%', 
    borderRadius:40
},

container1: {
    flex:0.5,
    backgroundColor:'#f8f4f4',
    width:'100%',
    height:'100%', 
   // marginTop:'20%',
justifyContent:'flex-start',
alignItems:'center'

    
},

container2:{
width:'93%',
//height:'50%',

    
},

text:{
marginLeft:'10%'

},

 image :{
  width:'100%',
  flexWrap:'wrap',
  alignContent:'stretch',
  alignItems:'center',
  alignSelf:'center'

         },

        })