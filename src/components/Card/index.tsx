import React,{FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './style'
const Card: FC = ({children}) =>{
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}
export default Card

