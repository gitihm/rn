import React from 'react';
import Weather from './components/Weather'
import { createStackNavigator } from 'react-navigation';

export default class WeatherScreen extends React.Component {  
  static navigationOptions = ({navigation}) => {
      return {
          headerTitle: (<Text>Weather</Text>),
      }
      const RootStack = createStackNavigator({
        Weather: WeatherScreen,
        ZipCode: ZipCodeScreen
      },{
        initialRouteName: 'Weather',
      })
      
  }
  

  render() {
    return (
      <RootStack/>
    );
  }
}
