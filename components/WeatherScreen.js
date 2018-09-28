
import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import Weather from './Weather'
export default class WeatherScreen extends React.Component {  
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text style={styles.text} >Weather</Text>),
        }
    }

    render() {
      return (
        <Weather zipCode="90110"/>
      );
    }
  }
  const styles = StyleSheet.create({
    text: {width: '100%', textAlign: 'center',},
    
  });