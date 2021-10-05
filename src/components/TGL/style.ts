import { StyleSheet} from 'react-native'
import { colors } from '../../config/Color'
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    border:{
        borderColor:colors.PRIMARY_COLOR,
        borderWidth:4,
        borderRadius:30
    },
    text:{
        color:colors.SECONDARY_COLOR,
        fontSize:50,
        textTransform:'uppercase',
        fontWeight:'700',
        fontStyle:'italic'
    }
})

export default styles
