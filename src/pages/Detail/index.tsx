import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {NavigationProp} from '@react-navigation/native'
import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';

interface DetailProps {
  navigation: NavigationProp<any, any>
}

const Detail: React.FC<DetailProps> = ({navigation}) => {

  navigation.setOptions({
    headerTitle: 'Vídeo Youtube'
  })

  return (
      <ScrollView style={styles.container} >
          <Image 
            source={require('../../assets/detail.png')}
            style={styles.image}
            resizeMode='cover'
          />

          <View>
            <View>
              <Text style={[styles.title, {fontSize: 24}]} >R$280,90</Text>
            </View>

            <View>
              <Text style={[styles.title, {fontSize: 24, opacity: 0.4}]} >Nike Downshifter 10</Text>
            </View>

            <View style={styles.dotContainer} >
              <Dot color='#2379f4' />
              <Dot color='#fb6e53' />
              <Dot color='#ddd' />
              <Dot color='#000' />
            </View>
          </View>

          <View style={{flexDirection: 'row', width:'100%'}} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <SizeButton size={40} active />
              <SizeButton size={38} />
              <SizeButton size={37} />
              <SizeButton size={34} />
            </ScrollView>
          </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  }
})

export default Detail;