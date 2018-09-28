import React from 'react';

import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
  { place: 'Hatyai', code: '90110' },
  { place: 'Trang', code: '92000' },
  { place: 'Chiangmai', code: '50000' },
  { place: 'Khonkaen', code: '40000' },
  { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather',{zipCode:code})}>
        <View>
            <Text >{place}</Text>
            <Text >{code}</Text>
        </View>
    </TouchableHighlight>
    
  )

 
const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        headerTitle: (<Text style={styles.Title}>Choose a zip code</Text>),
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    Title: {width: '100%',},
    Right: { paddingRight: 15,color: '#17a2b8',}
    
  });
