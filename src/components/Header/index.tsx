import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './style'
const Header:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TGL</Text>
            <View style={styles.border}></View>
        </View>
    )
}

export default Header

