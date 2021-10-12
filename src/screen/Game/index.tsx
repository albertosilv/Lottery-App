import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import Header from '../../components/Header'
import { GameProps } from '../../Interface'
import { getGame } from '../../services/Game'
import Button from '../../components/Button'
const Game = () => {
    const [games, setGames] = useState<GameProps[]>()
    const[numbers,setNumbers] = useState<[]>()
    useEffect(() => {
        const fetch = async () => {
            const dataGame = await getGame()
            setGames(dataGame)
        }
        fetch()
    }, [])
    useEffect(()=>{
        const game = games?.filter(e=>{
            return e.selected
        })
        if(game?.length!=0){
            const newBets = game?.map(i=>{
                const bet = bets?.filter(e=>{
                     return e.type.type==i.type
                })
                return bet
            })
            const bet= newBets.flat() as Item[]
        }else{
        }
    },[games])
    function handleFilter(id: string) {
        const gamesCopy: GameProps[] = Object.assign([], games);
        gamesCopy.forEach(e => {
            if (e.id == id) {
                e.selected = true

            } else {
                e.selected = false
            }
        })

        setGames(gamesCopy)

    }
    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.textPrimary}>Recent Games</Text>
                <Text style={styles.textSecundary}>Filters</Text>
                <View style={styles.buttonContainer}>
                    {games?.map(e => (
                        <Button key={e.id} id={e.id} color={e.color} type={e.type} selected={e.selected} click={handleFilter} />
                    ))}
                </View>
                <View>
                    text
                </View>
            </View>
        </View>
    )
}

export default Game

