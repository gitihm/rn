import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            
            <View style={{flex:1,flexDirection: 'column',alignItems:'center',justifyContent: 'center'}}>
                <View style={{alignSelf:'stretch',height:350,backgroundColor:'black',opacity:.5}}>
                    <Text style= {styles.text1}>{"\n"}Zip code is {this.props.zipcode}.</Text> 
                    <Text style= {styles.text2}>{"\n"}{this.props.main}</Text>
                    <Text style= {styles.text3}>{"\n"}{this.props.description}</Text>
                    <Text style= {styles.text4}>{"\n"}{this.props.temp} °C</Text>
                    <Text style={{textAlign:'center', fontSize: 20 , color:'white'}}>{"\n"}{"\n"}Ismael Hama - 5935512030</Text>
                </View>
            
            </View>              
        );
    }
}
const styles = StyleSheet.create({
    text1: {textAlign: 'center' , fontSize: 20 , color:'white'},
    text2: {textAlign: 'center' , fontSize: 30 , color:'white'},
    text3: {textAlign: 'center' , fontSize: 18 , color:'white'},
    text4: {textAlign: 'center' , fontSize: 28 , color:'white'},
  });