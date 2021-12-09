import { StyleSheet } from 'react-native';
import { colors } from '../../utils/Constants';

export default styles = StyleSheet.create({

    containerPedidos: {
        width: '98%',
        alignSelf: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: colors.branco,
        elevation: 5,
        borderColor: colors.cinza,
        marginVertical: 10,
        padding: 10
    },

    containerCard: {
        width: '100%',
        paddingHorizontal: 1,
        borderRadius: 15
    },

    txtOs: {
        color: colors.preto,
        fontSize: 16,
    },

    txtStandard: {
        color: colors.cinzaEscuro,
        fontSize: 16,
    },

});
