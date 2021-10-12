import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Item } from '../../Interface'
import styles from './style'
const CardBets: FC<Item> = ({ type, data, numbers, id }) => {
    return (
        <View style={styles.wrapper}>
            <View style={{ ...styles.border, borderColor: type.color }}></View>

            <View style={styles.container}>
                <Text style={styles.numbers}>{numbers}</Text>
                <Text style={styles.numbers}>{data.getDate()<10?'0'+data.getDate():data.getDate()}/{data.getMonth()<10?'0'+data.getMonth():data.getMonth()}/{data.getFullYear()}</Text>
                <Text style={{...styles.numbers,color:type.color}}>{type.type}</Text>
            </View>
        </View>
    )
}
export default CardBets

