import { StyleSheet } from 'react-native'
import { colors } from '../../utils/Constants'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.branco,
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',
        height: '100%'
    },
    txtTitle: {
        fontSize: 22
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    txt: {
        fontSize: 18
    },
    txtBuy: {
        fontSize: 16,
        color: colors.cinzaEscuro,
        paddingVertical: 5
    }
})