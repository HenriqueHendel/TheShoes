import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'

export interface ItemProps {
    name: string
    price: string
    image: ImageSourcePropType

    onClick: () => void
}

export default function Item({name, price, image, onClick}:ItemProps) {

    const handleTextLength = (text: string) => {
        if(text.length < 27){
            return text
        }

        return `${text.substr(0, 22)}...`
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onClick} >
            <Image
                source={image}
                style={styles.itemImage}
            />
            <Text style={styles.itemText} >{name}</Text>
            <Text style={styles.itemPrice}>{`R$${price}`}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems:'center',
        justifyContent: 'center'
    },
    itemImage:{
        width: 175,
        height: 175
    },
    itemText: {
        fontSize: 16
    },
    itemPrice:{
        fontSize:16,
        opacity: 0.4
    }
})
