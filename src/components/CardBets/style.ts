import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
        margin:10,
    },
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        margin:10,
        height:110,
    },
    border:{
        borderWidth:3,
        marginRight:10,
        borderRadius:20,
    },
    numbers:{
        fontSize:20
    }
})

export default styles
