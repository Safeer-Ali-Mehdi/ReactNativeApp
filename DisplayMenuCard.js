import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView,Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

import Feather from '@expo/vector-icons/Ionicons';
import InteriorDecorationMenu from './InteriorDecorationMenu';


const DisplayMenuCard = () => {

  const [menuList, setMenuList] = useState(false);

  const showMenuList=()=>{

   setMenuList(!menuList);
    // switch(menu){
    //  case 'InteriorDecoration':
    //   return(
    //    console.log("InteriorDecoration")
    //   )
    //   break;

    //   case 'OccasionDecoration':
    //   return(
    //    console.log("OccasionDecoration")
    //   )
    //   break;

    //   case 'Products':
    //   return(
    //    console.log("Products")
    //   )
    //   break;
    // }
    
  }

  return (
   
    <SafeAreaView style={styles. mainContainer}>
    <ScrollView style={styles.scrollView}>
     <View style={styles. subContainer}>
     <Image source={require("../../assets/Images/Image_1.jpg")} style={styles.imageStyle}/>
     <Text style={styles.textStyle}>Idea's for Interior Decoration </Text>
     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=>{
      setMenuList(!menuList);
     }}
     >
     <Feather name='chevron-down' style={styles.iconStyle}/>
     </TouchableOpacity>
     </View>

     <View style={styles.subContainer}>
     <Image source={require("../../assets/Images/Image_1.jpg")} style={styles.imageStyle} />
     <Text style={styles.textStyle}>Idea's for Occasion Decoration</Text>
     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=>{
      setMenuList(!menuList);
    }}
     >
     <Feather name='chevron-down' style={styles.iconStyle}/>
     </TouchableOpacity>
     </View>
     <View style={styles.subContainer}>
     <Image source={require("../../assets/Images/Image_1.jpg")} style={styles.imageStyle} />
     <Text style={styles.textStyle}>Decoration Products</Text>
     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=>{
      setMenuList(!menuList);
    }}
     >
     <Feather name='chevron-down' style={styles.iconStyle}/>
     </TouchableOpacity>
     </View>

    
     {menuList ? (<InteriorDecorationMenu/>): null}
     
     
     
     
     </ScrollView>
    </SafeAreaView>

   
    
  )
}


const styles = StyleSheet.create({
  
  mainContainer:{
     alignItems:'stretch',
     justifyContent:'center',
     flexDirection: 'column',
     backgroundColor: "black",
  },
  subContainer:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: "black",
    borderWidth: 3,
    borderColor: 'white',
    margin: 20,
  },
  imageStyle:{     
    width: '100%',
  },
  textStyle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  buttonStyle:{
    backgroundColor: "white",
    width: '100%',
    marginTop: 20
  },
  iconStyle:{
    fontSize: 40,
    fontWeight:'bold',
    color: 'black',
    marginTop: 10,
    alignSelf: 'center'
  },
  menuListStyle:{
    marginTop: 300,
  
  }
})

export default DisplayMenuCard

