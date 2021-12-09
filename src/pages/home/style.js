import { StyleSheet } from 'react-native'
import { colors } from '../../utils/Constants'

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.branco,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 150
  },
  txtTitle: {
    fontSize: 18,
    color: colors.azul,
    marginLeft: 2,
    paddingVertical: 20
  },
  containerHeader: {
    height: 45,
    backgroundColor: colors.branco,
    justifyContent: 'space-between',
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.cinza
  },
  inputStyle: {
    color: colors.cinzaEscuro,
    alignSelf: 'flex-start',
    fontSize: 14,
    width: '85%'
  },
  inside: {
    height: '100%',
    borderRightWidth: 1,
    height: '100%',
    borderColor: colors.cinza,
    flex: 1,
    marginRight: 10
  },
  iconSty: {
    paddingVertical: 10,
    paddingRight: 12
  }
})