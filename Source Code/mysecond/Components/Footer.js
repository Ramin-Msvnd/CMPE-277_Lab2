import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import call from 'react-native-phone-call';
function MyFooter(props) {
  let A = props.A ? (
    <Button
      Active
      onPress={() => {
        props.navigation.navigate('About');
      }}>
      <Text style={{color: '#000000'}}>About us</Text>
    </Button>
  ) : (
    <Button
      onPress={() => {
        props.navigation.navigate('About');
      }}>
      <Text>About us</Text>
    </Button>
  );

  let M = props.M ? (
    <Button
      Active
      onPress={() => {
        props.navigation.navigate('Main');
      }}>
      <Text style={{color: '#000000'}}>Main</Text>
    </Button>
  ) : (
    <Button
      onPress={() => {
        props.navigation.navigate('Main');
      }}>
      <Text>Main</Text>
    </Button>
  );

  return (
    <Footer>
      <FooterTab>
        {M}
        {A}
      </FooterTab>
    </Footer>
  );
}

export default MyFooter;
