import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './style'
import { TGLProps } from '../../Interface'
const TGL:React.FC<TGLProps> = ({fontSize=50}) => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.text,fontSize:fontSize}}>TGL</Text>
            <View style={styles.border}></View>
        </View>
    )
}

export default TGL

