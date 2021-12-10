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
  row: { 
    flexDirection: 'row' ,
    justifyContent: 'space-between'
  },
  txt:{
    fontSize: 16,
    color: colors.azul,
    marginLeft: 2,
    paddingVertical: 20
  }
})