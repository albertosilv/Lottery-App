import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import {getGame} from '../../services/Game'
import Header from '../../components/Header'
import { GameProps } from '../../Interface'
import Button from '../../components/Button'
const RecentGames = () => {
    const[games,setGames] =  useState<GameProps[]>()
    useEffect(()=>{ 
        const fetch = async ()=>{
            const data= await getGame()
            setGames(data)
        }
        fetch()
    },[])
    function handleFilter(id:string){
        const gamesCopy:GameProps[] = Object.assign([], games);
        gamesCopy.forEach(e=>{
            if(e.id==id){
                if(e.selected){
                    e.selected=false;
                }else{
                    e.selected=true
                }
            }else{
                e.selected=false
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
            </View>
        </View>
    )
}

export default RecentGames

