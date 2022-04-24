import React, {useState} from 'react';
import {View, Text, Button, Image, Dimensions} from 'react-native';
export function PlayerImage(props) {
  const {h, w} = Dimensions.get('window');
  
    let Players= {
    Pagliuca: <Image style={{width: w}} source={require('./Pics/Gianluca.jpg')}/>,
    Baggio :  <Image style={{width: w}} source={require('./Pics/Roberto.jpg')} />,
    Maldini :<Image style={{width: w}} source={require('./Pics/Paolo.jpg')} />,
    Delpiero :<Image style={{width: w}} source={require('./Pics/Alex.jpg')} />,}
   
   return (<View>
     
      {Players[props.player]}
  </View>);

}

