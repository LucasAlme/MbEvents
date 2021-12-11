import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert, PermissionsAndroid } from 'react-native';
import { Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { dispatchState } from "../../utils/Constants";
import styles from "./style";
import ImagePicker from 'react-native-image-picker';
import { colors } from '../../utils/Constants'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Button from "../../components/button";
import api from "../../service/api";
import { IsEmail } from "../../utils/isEmail";

const error = require('../../assets/images/error.png')

export default function Profile() {

  const name = useSelector(state => state.name);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (user?.foto)
      uploadImage();
  }, [user?.foto]);


  useEffect(() => {
    // setUser({ ...user, name: name });
    const concedido = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Precisamos de sua permissão'
      },
    );
    if (concedido === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Você pode usar a câmera');
    }
  }, [])


  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const resp = await api.get(`users?name=${name}`);
    setUser(resp.data[0]);
  }

  function logoff() {
    dispatch({ type: dispatchState.isLogin, value: false });
    dispatch({ type: dispatchState.name, value: '' });
  }

  function alterar() {
    if (user?.name?.length === 0) return null;
    setIsEditable(!isEditable);
    if (isEditable) {
      if (!IsEmail(user.email)) {
        Alert.alert('Email Inválido', 'Insira um email válido');
        return null
      }
      dispatch({ type: dispatchState.name, value: user?.name });
      api.put(`users/${user.id}`, user);
      Alert.alert('Sucesso!', 'Seus dados foram alterados com sucesso!')
    }
  }
  function selectImage() {
    const options = {
      title: 'Selecionar Foto',
      cancelButtonTitle: "CANCELAR",
      takePhotoButtonTitle: "Tirar Foto Agora...",
      chooseFromLibraryButtonTitle: "Escolher da Galeria...",
      rotation: 360,
      quality: 0.10,

    };
    ImagePicker.showImagePicker(options, response => {
      if (!response.error && !response.didCancel)
        setUser({ ...user, foto: response.uri });
    });
  }

  function uploadImage() {
    api.put(`users/${user.id}`, user);
  }

  return (
    <View style={styles.background}>
      {name ?
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.containerProfile}>
            <Text style={styles.txtProfileTitle}>Perfil</Text>
            <TouchableOpacity style={styles.avatarBorder} onPress={() => selectImage()}>
              <Avatar rounded source={user?.foto ? { uri: user?.foto } : null} title={name.substr(0, 1)} titleStyle={{ color: colors.branco }} containerStyle={{ backgroundColor: colors.cinza }} size={heightPercentageToDP('15%')} />
            </TouchableOpacity>
            <TextInput style={isEditable ? styles.txtNameEditable : styles.txtName} value={user?.name} onChangeText={(txt) => setUser({ ...user, name: txt })} editable={isEditable} />
          </View>
          <View style={styles.content}>
            <View>
              <Text style={[styles.txt, { paddingLeft: 4, fontWeight: 'bold' }]}>E-mail</Text>
              <TextInput placeholder={'...@gmail.com'} editable={isEditable} placeholderTextColor={isEditable ? colors.cinzaEscuro : colors.cinza}
                onChangeText={(txt) => setUser({ ...user, email: txt })} value={user?.email}
                style={!isEditable ? styles.txtInput : styles.txtInputEditable} />
              <Text style={[styles.txt, { paddingLeft: 4, fontWeight: 'bold' }]}>Telefone</Text>
              <Text style={[styles.txtInput, { paddingLeft: 4, paddingTop: 5 }]}>{user?.phone}</Text>
            </View>
            <View>
              <Button value="Alterar Dados" onPress={alterar} />
              <TouchableOpacity onPress={logoff}>
                <Text style={[styles.txtTitle, { alignSelf: 'center' }]}>Sair do App</Text>
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