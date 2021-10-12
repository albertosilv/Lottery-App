import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import {getGame} from '../../services/Game'
import Header from '../../components/Header'
import { GameProps, Item } from '../../Interface'
import Button from '../../components/Button'
import { getBets } from '../../services/Bet'
import {useSelector} from 'react-redux'
import { User } from '../../Interface';
import { RootState } from '../../store';
import CardBets from '../../components/CardBets'
const RecentGames = () => {
    const[games,setGames] =  useState<GameProps[]>()
    const[bets,setBets] = useState<Item[]>()
    const[betsSelections,setBetsSelections] =useState<Item[]>()
    const user: User = useSelector((state: RootState) => state.user.user)
    useEffect(()=>{ 
        const fetch = async ()=>{
            const dataGame= await getGame()
            const databet = await getBets(user)
            setBets(databet)
            setBetsSelections(databet)
            setGames(dataGame)
        }
        fetch()
    },[])
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
            setBetsSelections(bet)
        }else{
            setBetsSelections(bets)
        }
    },[games])
    function handleFilter(id:string){
        const gamesCopy:GameProps[] = Object.assign([], games);
        gamesCopy.forEach(e=>{
            if(e.id==id){
                if(e.selected){
                    e.selected=false;
                }else{
                    e.selected=true
                }
            }
        })

        setGames(gamesCopy)

    }
    return (
        <View style={styles.wrapper}>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.textPrimary}>Recent Games</Text>
                <Text style={styles.textSecundary}>Filters</Text>
                <View style={styles.buttonContainer}>
                    {games?.map(e=>(
                        <Button key={e.id} id={e.id} color={e.color} type={e.type} selected={e.selected} click={handleFilter}/>
                    ))}
                </View>
                <View>
                    {betsSelections?.map(e=>(
                        <CardBets key={e.id} id={e.id} data={e.data} numbers={e.numbers} type={e.type} />
                    ))}
                </View>
            </View>
        </View>
    )
}

export default RecentGames

