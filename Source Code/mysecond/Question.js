import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function Question(props){

    let S={fontFamily:"arial", fontSize:22, textAlign: "center"}
    const content=<View >
    <View>
        <Text style={S}>Hi</Text>
        <Text style={S}>Were you a fan of Italy in 1998?</Text>
    </View>

    <View >
    <Button title='Yes' onPress={()=>{props.navigation.navigate('Main')} }/>
    <Button title='No' onPress={()=>{props.navigation.navigate('ActionTest')}} />
    </View>
</View>
return (
content
)

}

export default Question;