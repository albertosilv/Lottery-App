import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { InputProps } from '../../Interface'
import Style from './style'
const Input: React.FC<InputProps> = ({ value, onChange, placeholder, secureTextEntry}) => {
    return (
        <View>
            <TextInput
                style={Style.input}
                onChangeText={(data) => onChange(data)}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
export default Input

