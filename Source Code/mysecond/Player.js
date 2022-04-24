import React, {useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import MyFooter from './Components/Footer';
import {Container, Content, Form, Item, Input, Label, Button, Icon} from 'native-base';
import MyHeader from './Components/My Header';
import call from 'react-native-phone-call';
import {PlayerImage} from './Im';
import {PlayerInfo} from './PlayerInfo'
function Player(props) {
  const {h, w} = Dimensions.get('window');
  const playerName = props.navigation.getParam('name', '');

  const Info = PlayerInfo[playerName].Info
  const args = PlayerInfo[playerName].args
  let S={fontFamily:"arial", fontSize:22}
  function Caller() {
    call(args).catch(console.error);
  }
  let content = (
    <Container>
      <MyHeader />
      <Content>
        <View style={{flex: 1}}>
          <PlayerImage player={playerName} />
          <Text style={S}> {Info.text}</Text>
        </View>
        <View style={{marginTop: '15%', flex: 2, flexDirection:'row', justifyContent:'center'}}>
          <Button rounded light onPress={Caller} large style={{backgroundColor:'#7514fc'}}>
          
            <Icon name="call" />
          </Button>
         
        </View>
      </Content>
      <MyFooter navigation={props.navigation} />
    </Container>
  );

  return content;
}

export default Player;
