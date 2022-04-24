import React, { Component } from 'react';
import {Button} from 'react-native'
import { Container, Header, View, Icon, Fab, Text } from 'native-base';
import {NativeModules} from 'react-native';
export default class FABExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  uninstallHandler=()=>{
    const {IntentLauncher} = NativeModules;
    IntentLauncher.uninstallApp();
  }
  render() {
    
    


    return (  
 
          <Fab
            active={this.state.active}
            direction="down"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="topRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            
            <Button style={{ backgroundColor: '#34A34F' }} >
            <Icon name="call" />
            </Button>
            <Button  style={{ backgroundColor: '#DD5144' }} onPress={()=>this.uninstallHandler()}>
              <Icon name="trash-outline" />
            </Button>
          </Fab>

    );
  }
}