import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'
import TGL from '../../components/TGL'
import ButtonIcon from '../../components/ButtonIcon'
import styles from './style'
import { colors } from '../../config/Color'
import { Screen } from '../../Interface'
const Registration: React.FC<Screen> = ({navigation}) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    function handleLogin() {
        
    }
    return (
        <View style={styles.container}>
            <TGL />
            <Text style={styles.text}>Registration</Text>
            <Card>
                <Input value={name} onChange={setName} placeholder="Name" secureTextEntry={false} />
                <Input value={email} onChange={setEmail} placeholder="Email" secureTextEntry={false} />
                <Input value={password} onChange={setPassword} placeholder="Password" secureTextEntry={true} />
                <ButtonIcon iconSize={40} text="Register" color={colors.PRIMARY_COLOR} press={handleLogin} position={false} />
            </Card>
            <ButtonIcon iconSize={40} text="Back" color={colors.SECONDARY_COLOR} press={()=>navigation.navigate('Login')} position={true} />
        </View>
    )
}


export default Registration