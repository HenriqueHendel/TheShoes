import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {itemList} from '../../utils/itemList'

import Item from '../Item'

const Footer: React.FC = () => {

    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{flexDirection: 'row', marginVertical: '5%'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {itemList.map((item, index) => (
                        <View key={index} style={{marginHorizontal: 10}}>
                            <Item name={item.name} price={item.price} image={require('../../assets/03.png')} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})

export default Footer;