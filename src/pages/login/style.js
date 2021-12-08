import { StyleSheet } from 'react-native'
import { colors } from '../../utils/Constants'

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.branco,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerInput: {
    width: '100%',
    height: '65%',
    alignItems: 'center',
    paddingHorizontal: 40
  },

  containerLogin: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    color: colors.cinzaEscuro,
    fontSize: 16,
    alignSelf: 'flex-start',
    
    marginBottom: 5,
    marginTop: 10,
  },
  txtBlue: {
    color: colors.azul,
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
  },

  txtBold: {
    color: colors.preto,
    fontSize: 28,
    alignSelf: 'flex-start',
    paddingBottom: 50
  },

  containerTouch: {
    justifyContent: 'space-evenly'
  }

})