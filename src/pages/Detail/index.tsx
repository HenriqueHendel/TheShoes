import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Detail: React.FC = () => {

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
              <Text style={[styles.title, {fontSize: 24, opacity: 0.4}]}>Nike Downshifter 10</Text>
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


          <View style={styles.textContainer} >
            <Text style={styles.itemName} >
              Nike Downshifter 10
            </Text>
            <Text style={styles.itemDescription} >
              O Nike Downshifter 10 traz suporte e amortecimento atualizados. Seu design leve e acolchoado ajuda a manter você se movimentando enquanto corre.
            </Text>
            <Text style={styles.itemExtra}>
              - Categoria: Amortecimento
            </Text>
            <Text style={styles.itemExtra} >
              - Material: Mesh
            </Text>
          </View>

          <Button />

          <View style={styles.line} />

          <Footer />
          
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image: {
    width: '100%'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContainer: {
    marginVertical: '2%',
    marginHorizontal:'2%'
  },
  itemName: {
    fontSize: 22,
    marginVertical: '2%'
  },
  itemDescription: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: '2%'
  },
  itemExtra: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%'
  }
})

export default Detail;