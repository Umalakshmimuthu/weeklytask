import React from 'react';
import { View,FlatList,StyleSheet } from 'react-native';
import Card from '../components/Card';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
const ListingScreen = () => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    const Cards = [
        {
          id: 1,
          title: 'Jacket for sales!',
          price:70,
          image: require('../assets/jacket.jpg')
          
        },
        {
          id:2,
          title: 'Couch for Sales!',
          price:70,
          image: require('../assets/couch.jpg')
        },
        
        
      ];
      
    return (
        
        <View style={[styles.background,]}>
        <View style={[styles.cards,{marginTop:landscape?'1%':'0%'}]}>
            <FlatList
                style={{height: '100%'},{width:"100%"}}
                data={Cards}
                keyExtractor={Cards => Cards.id.toString()}
                renderItem={({ item }) => (
                    
                    <Card
                        image={item.image}
                        title={item.title}
                        subtitle={"$"+ item.price}
                    />
                    ) }
            />
        </View>
        
        
     </View>

    );
}

export default ListingScreen;

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F2F2',
        // height: "100%",
        flex: 1,
        width:'100%',
        
    },
    cards:{
        marginHorizontal:10,
        marginVertical:30,
        // marginTop:'-10%'
       
    }
    
})