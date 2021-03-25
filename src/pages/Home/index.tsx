import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Item, {ItemProps} from '../../components/Itens';

import {useNavigation} from '@react-navigation/native'

import {itemList} from '../../utils/itemList'

const {width: screenWidth} = Dimensions.get('screen');

const Home: React.FC = () => {
  const {navigate} = useNavigation()

  const _renderItem = ({index}) => {
    if(index % 2 == 0){
      let imageOne = `../../assets/${itemList[index].img}`
      let imageTwo = `../../assets/${itemList[index+1].img}`
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
          <Item name={itemList[index].name} price={itemList[index].price} image={require('../../assets/01.png')} onClick={()=> navigate('Detail') } />
          <Item name={itemList[index+1].name} price={itemList[index+1].price} image={require('../../assets/04.png')} onClick={()=> navigate('Detail') } />
        </View> 
      )
    }else {
      return null
    }
  }

  return (
      <View style={styles.container} >

        <View style={styles.header}>
          <Image source={require('../../assets/banner.png')} style={styles.image}  />

          <View style={styles.containerText} >
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>-</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>MASCULINO</Text>
            <TouchableOpacity style={{position:'absolute', right: 0, alignSelf: 'center'}} >
              <MaterialIcons name='filter-list' size={24} color='#000' />
            </TouchableOpacity>
          </View>
        
        </View>

        <View style={styles.line} />

        
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <FlatList 
          data={itemList}
          renderItem={_renderItem}
          keyExtractor={item => item.name}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: screenWidth
  },
  containerText: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2
  }
})

export default Home;