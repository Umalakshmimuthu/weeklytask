import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal, TouchableWithoutFeedback, FlatList} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../components/AppText';
import ListingItems from '../components/ListingItems';


const AppPicker=({icon,messages,item,items,category,title,DATA,renderItem,data, keyExtractor,...otherProps})=> {

  const [modal, setmodal] = useState(false);
 

return(

<>
<TouchableWithoutFeedback onPress={()=>setmodal(true)}>
   <View style={styles.container1}>
  {icon ? <MaterialCommunityIcons style={{marginBottom:15}} name= {icon} color='black' size={25} ></MaterialCommunityIcons> : null }
  
  <AppText >{category}</AppText>
  
  <MaterialCommunityIcons style={{marginLeft:235,marginBottom:20}} name='chevron-down' color='black' size={25} ></MaterialCommunityIcons>
  
  </View>

  </TouchableWithoutFeedback>
  <Modal visible={modal} animationType='slide'>
  <Button title='close' onPress={()=>setmodal(false)}></Button>
  <FlatList
        data={data}
      
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        
      />
  
  </Modal> 
</>

)
}

export default AppPicker;


const styles = StyleSheet.create({
  container: {
    width:"100%",
    justifyContent:'flex-start',
    marginTop:'-20%',
    alignItems:'center',
    marginVertical:10,
    //backgroundColor:defaultStyles.colors.light
   
  },
  container1:{

    width:"95%",
    flexDirection:'row',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignItems:'center',
    borderWidth:1,
    borderRadius:25,
    height:44,
    marginVertical:10,
    backgroundColor:'#f8f4f4',
  }
});