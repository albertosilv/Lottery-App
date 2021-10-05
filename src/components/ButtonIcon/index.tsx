import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonIconProps } from '../../Interface'
import { AntDesign } from '@expo/vector-icons';

import styles from './style'
const ButtonIcon: React.FC<ButtonIconProps> = ({ press, color, text, position, iconSize }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => press()}
        >
            {position && <AntDesign name="arrowleft" size={iconSize} color={color} />}
            <Text style={{ ...styles.text, color: color }}>{text}</Text>
            {!position && <AntDesign name="arrowright" size={iconSize} color={color} />}


        </TouchableOpacity>
    )
}

export default ButtonIcon

