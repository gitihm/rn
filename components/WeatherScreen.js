
import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import Weather from './Weather'
export default class WeatherScreen extends React.Component {  
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (
                <Text style={styles.Title} >Weather</Text>
            ),
            /* headerRight */: (
                <Text style={styles.Right}>Change Zip</Text>
            )
        }
    }

    render() {
      return (
        <Weather zipCode="90110"/>
      );
    }
  }
  const styles = StyleSheet.create({
    Title: {width: '100%', textAlign: 'center',},
    Right: { paddingRight: 15,}
    
  });