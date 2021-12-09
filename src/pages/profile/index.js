import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { dispatchState } from "../../utils/Constants";
import styles from "./style";
import { colors } from '../../utils/Constants'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Button from "../../components/button";

const error = require('../../assets/images/error.png')

export default function Profile() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();


  function logoff() {
    dispatch({ type: dispatchState.isLogin, value: false });
    dispatch({ type: dispatchState.name, value: '' });
  }

  return (
    <View style={styles.background}>
      {name ?
        <View style={{justifyContent: 'center'}}>
          <View style={styles.containerProfile}>
            <Text style={styles.txtProfileTitle}>Perfil</Text>
            <Avatar rounded title={name.substr(0, 1)} titleStyle={{ color: colors.branco }} containerStyle={{ backgroundColor: colors.cinza }} size={heightPercentageToDP('15%')} />
            <Text style={styles.txtName}>{name}</Text>
          </View>
          <View style={styles.content}>
            <View>
              <Text style={[styles.txt, { paddingLeft: 4 }]}>E-mail</Text>
              <TextInput placeholder={'Digite seu email'} placeholderTextColor={colors.cinzaEscuro} style={styles.txtInput} />
            </View>
            <View>
              <Button value="Alterar Dados" />
              <TouchableOpacity>
                <Text style={[styles.txtTitle, {alignSelf: 'center'}]}>Sair do App</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        :
        <View style={styles.containerDeslogado}>
          <Text style={[styles.txtTitle, { textAlign: 'center' }]}>É preciso estar logado para ter acesso aos seu perfil de usuário!</Text>
          <Image source={error} style={styles.imgSty} />
          <TouchableOpacity onPress={logoff}>
            <Text style={[styles.txtTitle, { textAlign: 'center' }]}>Clique aqui para fazer login</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}