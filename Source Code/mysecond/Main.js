import React, {useState} from 'react';
import {View, Image, Dimensions, TouchableOpacity, Alert} from 'react-native';
import {
  Button,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import {NativeModules} from 'react-native';
import MyFooter from './Components/Footer';
import MyHeader from './Components/My Header';
import ActionBar from './ActionBar';

function Main(props) {
  const {IntentLauncher} = NativeModules;
  let S = {fontFamily: 'arial', fontSize: 22};
  const {h, w} = Dimensions.get('window');
  const RP = './Pics/Roberto.jpg';
  const GP = './Pics/Gianluca.jpg';
  const MP = './Pics/Paolo.jpg';
  const AP = './Pics/Alex.jpg';
  
const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      'https://reactnative.dev/movies.json'
    );
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

  function alertFunction(Name) {
    Alert.alert(
      Name + ' is selected.',
      'Would you like to know more about him?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => props.navigation.navigate('Player', {name:Name})},
      ],
      {cancelable: false},
    );
  }
  const mainPage = (
    <View>
      <View style={{flexDirection: 'row', marginBottom: '5%'}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              alertFunction('Pagliuca');
            }}>
            <View style={{flexDirection: 'row', marginBottom: '5%'}}>
              <Image style={{width: 70, height: 70}} source={require(GP)} />
              <View style={{marginLeft: '5%', justifyContent: 'center'}}>
                <Text>Gianluca Pagliuca</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: '5%'}}>
        <View>
        <TouchableOpacity
            onPress={() => {
              alertFunction('Baggio');
            }}>
            <View style={{flexDirection: 'row', marginBottom: '5%'}}>
              <Image style={{width: 70, height: 70}} source={require(RP)} />
              <View style={{marginLeft: '5%', justifyContent: 'center'}}>
                <Text>Roberto Baggio</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: '5%'}}>
        <View>
        <TouchableOpacity
            onPress={() => {
              alertFunction('Maldini');
            }}>
            <View style={{flexDirection: 'row', marginBottom: '5%'}}>
              <Image style={{width: 70, height: 70}} source={require(MP)} />
              <View style={{marginLeft: '5%', justifyContent: 'center'}}>
                <Text>Paolo Maldini</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: '5%'}}>
        <View>
        <TouchableOpacity
            onPress={() => {
              alertFunction('Delpiero');
            }}>
            <View style={{flexDirection: 'row', marginBottom: '5%'}}>
              <Image style={{width: 70, height: 70}} source={require(AP)} />
              <View style={{marginLeft: '5%', justifyContent: 'center'}}>
                <Text>Alex Delpiero</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <Container>
      <MyHeader />
      sdsds
      <Content>
       <ActionBar/>
        {mainPage}
      </Content>
      <MyFooter M="M" navigation={props.navigation} />
    </Container>
  );
}

export default Main;
