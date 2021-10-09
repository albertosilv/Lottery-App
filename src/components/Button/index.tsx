import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ButtonGameProps } from '../../Interface'
import styles from './style'
const Button: React.FC<ButtonGameProps> = ({ color, selected, type, id,click }) => {
    return (
        <TouchableOpacity style={{...styles.button,backgroundColor:selected?color:'#fff',borderColor:color,borderWidth:2}} onPress={()=> click(id)}>
            <Text style={{...styles.text,color:selected?'#fff':color}}>{type}</Text>
        </TouchableOpacity>
    )
}
export default Button

