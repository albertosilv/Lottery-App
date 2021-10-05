import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'
import Header from '../../components/Header'
import ButtonIcon from '../../components/ButtonIcon'
import styles from './style'
import { colors } from '../../config/Color'

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('')
    function hanleForgot() {
        
    }
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.text}>Reset Password</Text>
            <Card>
                <Input value={email} onChange={setEmail} placeholder="Email" secureTextEntry={false} />
                <ButtonIcon iconSize={40} text="Send Link" color={colors.PRIMARY_COLOR} press={hanleForgot} position={false} />
            </Card>
            <ButtonIcon iconSize={40} text="Back" color={colors.SECONDARY_COLOR} press={hanleForgot} position={false} />
        </View>
    )
}

export default ForgotPassword

