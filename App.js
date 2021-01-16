import React from 'react';
import { Button, View, Text,Alert } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
  render() {
    return (
      <View style={{width:200,height:100, marginTop: 100,  marginLeft:80}}>
        <Button title="Sound 1" color="blue" onPress={()=> Alert.alert('Play Sound 1')}/>
      <View style={{marginTop: 60}}></View>
        <Button title="Sound 2" color="red" onPress={()=> Alert.alert('Play Sound 2')}/>
      <View style={{marginTop:60}}></View>
      <Button title="Sound 3" color="purple" onPress={()=> Alert.alert("Play Sound 3")}/>
      <View style={{marginTop:60}}></View>
      <Button title="Sound 4" color="green" onPress={()=> Alert.alert("Play Sound 4")}/>
      <View style={{marginTop:60}}></View>
      <Button title="Sound 5" color="black" onPress={()=> Alert.alert("Play Sound 5")}/>
      </View>
    );
  }
}
