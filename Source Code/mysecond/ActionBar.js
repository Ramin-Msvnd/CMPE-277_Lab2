import React, {useState} from 'react';
import {Button} from 'react-native';
import {Container, Header, View, Icon, Fab, Text} from 'native-base';
import {NativeModules} from 'react-native';
import call from 'react-native-phone-call';
export default function ActionBar(props) {
  const {IntentLauncher} = NativeModules;
  function caller() {
    const args = {
      number: '012499474', // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  }

  const [active, activeSet] = useState(false);

  const content = (
    <Fab
      active={active}
      direction="down"
      containerStyle={{}}
      style={{backgroundColor: '#00fa9a'}}
      position="topRight"
      onPress={() => activeSet(!active)}>
      <Icon name="football-outline" style={{color:'#5e9cff'}}/>

      <Button style={{backgroundColor: '#73f09f'}} onPress={caller}>
        <Icon name="call" large/>
      </Button>
      <Button
        style={{backgroundColor: '#f7071b'}}
        onPress={() => {
          IntentLauncher.uninstallApp();
        }}>
        <Icon name="trash-outline" />
      </Button>
    </Fab>
  );

  return content;
}
