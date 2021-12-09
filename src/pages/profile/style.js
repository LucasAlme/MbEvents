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
    marginBottom: 50
  },
  txtTitle: {
    fontSize: 18,
    color: colors.azul,
    marginLeft: 2,
    paddingVertical: 20
  },
  txtName: {
    fontSize: 20,
    color: colors.azul,
    paddingVertical: 20
  },
  imgSty: {
    height: 250,
    width: 250,
    marginTop: 15,
    alignSelf: 'center',
  },
  containerDeslogado: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 20
  },
  containerProfile: {
    alignItems: 'center'
  },
  txtProfileTitle: {
    fontSize: 24,
    color: colors.cinzaEscuro,
    paddingBottom: 20
  },
  txt: {
    fontSize: 16,
    color: colors.cinzaEscuro,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 50,
    justifyContent: 'space-between',
    height: '55%'

  },
  txtInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: colors.cinza,
    color: colors.cinzaEscuro,
    width: '70%'
  }
})