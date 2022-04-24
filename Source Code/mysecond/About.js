import React, {useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import MyFooter from './Components/Footer';
import {Container, Content, Form, Item, Input, Label} from 'native-base';
import MyHeader from './Components/My Header';
// import ActionBar from './ActionBar';
function Player(props) {
  const {h, w} = Dimensions.get('window');

  let photoURL = './Pics/Ramin.jpg';
  let S={fontFamily:"arial", fontSize:22}
 
  let content = (
    <Container>
      <MyHeader />
      <Content>

        <View >
        <Image style={{width: w}} source={require(photoURL)} />
       
 
        </View>
        <View style={{marginTop:'5%', flex: 2}} >
        <Text style={S}>Thanks for Choosing my app!</Text>
        <Text style={S}>This app is designed as lab 2 for the soccer fans of Italy</Text>
        <Text style={S}>Hope you enjoyed it</Text>
        <Text style={S}>Best, </Text>
        <Text style={S}>Ramin </Text>
        </View>
      </Content>
      <MyFooter navigation={props.navigation} A='A' />
    </Container>
  );

  return content;
}

export default Player;
