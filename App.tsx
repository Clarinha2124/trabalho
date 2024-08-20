import { StyleSheet, TouchableOpacity ,View, Image } from 'react-native';
import ligado from './assets/pictures/monet.png';
import desligado from './assets/pictures/monet2.png';
import React, {useState} from 'react';




export default function App() {
  const[isActive, setisActive]= useState(false);  

  function handleSymbol(){
    setisActive((oldValue:boolean)=>{
      return !oldValue;
    })
  }
  return (
  <View style={isActive ? styles.containerOn : styles.containerOff}>
    <TouchableOpacity onPress={handleSymbol}>
    <Image source={isActive ? ligado : desligado}></Image>
    </TouchableOpacity>
     
  </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor:'#000000',
    alignItems:'center',
    justifyContent:'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
