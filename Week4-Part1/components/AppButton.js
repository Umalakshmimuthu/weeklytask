import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from '../app/colors/Config';

// export default function AppButton(props) {
//   return (
//     <TouchableOpacity style={[styles.bgcolor, { backgroundColor: props.color }]} onPress= {props.myPress}>
//       <Text style={styles.text}>{props.title}</Text>
//     </TouchableOpacity>
//   );
// }

export default function AppButton({title,color,myPress}){
return(

  <TouchableOpacity style={[styles.bgcolor,{ backgroundColor:color}]} onPress={myPress}>
        <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
);

}

const styles = StyleSheet.create({
    
    text: {
    fontSize: 15,
    color: "white",
    fontSize:20
  },

  bgcolor: {

    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 90,
    marginTop: 15,
    width: "95%",
    height: "15%",
    alignItems: "center",
    
  },
});