import { StyleSheet } from 'react-native'
import { colors } from '../../config/Color'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F7F7',
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        color:colors.SECONDARY_COLOR,
        fontSize:30,
        fontWeight:'700',
        padding:30
    }
})
export default styles
