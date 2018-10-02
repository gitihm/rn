import React from 'react';

import { StyleSheet, FlatList, View, Text, TouchableHighlight ,ImageBackground} from 'react-native';

const availableZipItems = [
  { place: 'Hatyai', code: '90110' },
  { place: 'Trang', code: '92000' },
  { place: 'Chiangmai', code: '50000' },
  { place: 'Khonkaen', code: '40000' },
  { place: 'Chonburi', code: '20000' },
  { place: 'Yala', code: '94230' },
  { place: 'Surat Thani', code: '84000' },
]

const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather',{zipCode:code})}>
        <View style={{flex:1,flexDirection: 'row',}}>
            <Text style={{flex:1,textAlign:"left", fontSize: 30}}>{place}</Text>
            <Text style={{flex:1,textAlign:"right", fontSize: 30}} >{code}</Text>
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
      <View style={styles.container}>
                <ImageBackground source={require('./bg.jpg')} style= {styles.backdrop}>  
      <View>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
        />
      </View>
      </ImageBackground>
            </View>
    );
  }
}
const styles = StyleSheet.create({
    Title: {width: '100%',},
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%'},
    
  });
