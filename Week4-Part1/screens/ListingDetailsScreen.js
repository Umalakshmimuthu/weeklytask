
import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';
import Listingitems from '../components/ListingItems';

const ListingDetailsScreen = () => {
    const {landscape} = useDeviceOrientation()
   
    return (
        <View style={styles.container}>

        <Image  style={[styles.image,{marginTop:landscape?'1%':'0%',height:landscape?270:280,borderRadius:10}]} source={require('../assets/jacket.jpg')}></Image>
        <Text style={[styles.text,{fontSize:20,marginTop:'3%'}]}>Red Jacket for Sale!</Text>
        <Text style={[styles.text,{color:color.secondary,fontSize:20}]}>$100</Text>
       
        <Listingitems />
        
        
         </View>
        

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:'white',
        width:'100%',
        height:'100%', 
               },

      image:{
        
          width:'100%',
         flexWrap:'wrap',
         alignContent:'stretch',
         
           },


           text:{
            marginLeft:'10%'
            
            },



})

export default ListingDetailsScreen;



