import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Input from '../../components/Input'
import Card from '../../components/Card'
import TGL from '../../components/TGL'
import ButtonIcon from '../../components/ButtonIcon'
import styles from './style'
import { colors } from '../../config/Color'
import { Screen } from '../../Interface/index'
import { User } from '../../Interface/index'
import { getUser } from '../../services/User'
import { useDispatch } from 'react-redux'
import { userReducer } from '../../store/User.store'
const Login: React.FC<Screen> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    async function handleLogin() {
        const user = await getUser({ email:email.toLocaleLowerCase(), password:password.toLocaleLowerCase() }) as User
        if (user) {
            console.log(user)
            dispatch(userReducer(user))
            navigation.navigate("Main", {
                screen: 'RecentGames',
            })
        }


    }
    return (
        <View style={styles.container}>
            <TGL />
            <Text style={styles.text}>Authentication</Text>
            <Card>
                <Input value={email} onChange={setEmail} placeholder="Email" secureTextEntry={false} />
                <Input value={password} onChange={setPassword} placeholder="Password" secureTextEntry={true} />
                <ButtonIcon iconSize={40} text="Log In" color={colors.PRIMARY_COLOR} press={() => handleLogin()} position={false} />
                <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotText}>I forget my password</Text>
                </TouchableOpacity>
            </Card>
            <ButtonIcon iconSize={40} text="Sign Up" color={colors.SECONDARY_COLOR} press={() => navigation.navigate('Registration')} position={false} />
        </View>
    )
}


export default Login