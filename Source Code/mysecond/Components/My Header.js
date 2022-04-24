import React, { Component } from 'react';
import { Container, Header } from 'native-base' ;
import {Text} from 'react-native';

import ActionBar from '../ActionBar';
export default function MyHeader(props){
let S={fontFamily:"arial", fontSize:22, textAlign: "center"}
return (
<Header> 
    <Text style={S}>Lab 2 1998 Italy Fan</Text>
   
</Header>
    
);


}

