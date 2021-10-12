import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12,
        paddingHorizontal:22,
        borderRadius:20,
        marginLeft:2,
    },
    textContainer:{
        display:'flex',
        flexDirection:'row'
    },
    text:{
        fontSize:16,
        fontWeight:'700',
        textAlign:'center'
    },
    sob:{
        lineHeight: 12,
        fontWeight:'700',
        color:'#fff'
    }
})

export default styles
