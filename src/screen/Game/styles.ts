import { StyleSheet } from 'react-native'
import { colors } from '../../config/Color'
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#F7F7F7',
        marginTop:20,
    },
    container:{
        marginTop:10,
        paddingLeft:20,
    },
    textPrimary:{
        color:colors.SECONDARY_COLOR,
        fontSize:20,
        fontWeight:'700',
        textTransform:'uppercase',
        paddingBottom:10,
    },
    textSecundary:{
        color:colors.SECONDARY_COLOR,
        fontSize:15,
        fontWeight:'600',
        paddingBottom:10,
    },
    buttonContainer:{
        flexDirection:'row',
    }

})
export default styles
