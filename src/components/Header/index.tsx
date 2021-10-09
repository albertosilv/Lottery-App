import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import TGL from '../TGL'
const Header = () => {
    return (
        <View style={styles.container}>
            <TGL fontSize={30}/>
        </View>
    )
}

export default Header

