import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from "../../components/button";
import DismissKeyboard from '../../components/dismissKeyboard';
import Input from "../../components/input";
import { Auth } from "../../models/auth";
import { dispatchState } from "../../utils/Constants";
import styles from "./style";


export default function Login() {

  const [auth, setAuth] = useState(new Auth());
  const dispatch = useDispatch();

  function login() {
    if (auth.username.length < 3 || auth.senha.length < 3) {
      Alert.alert('Usuario Incorreto', 'O nome de usuário e senha devem ter mais que 3 carácteres');
      return null
    } else {
      dispatch({ type: dispatchState.isLogin, value: true });
      dispatch({ type: dispatchState.name, value: auth.username });
    }
  }

  function loginWithoutLogin() {
    dispatch({ type: dispatchState.isLogin, value: true });
  }

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView keyboardVerticalOffset={-150} behavior={'height'} contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
        <View style={styles.background}>
          <View style={styles.containerInput}>
          <Text style={styles.txtBold}>Login</Text>
            <View style={styles.containerLogin}>
              <Text style={styles.txt}>Seu Nome</Text>
              <Input 
                placeholder='Nome de usuário' onChangeText={(txt) => setAuth({ ...auth, username: txt })} />
              <Text style={styles.txt}>Sua senha</Text>
              <Input
                placeholder='******************' password onChangeText={(txt) => setAuth({ ...auth, senha: txt })} />
            </View>
            <Button value="ENTRAR" customStyle={{ marginTop: 30 }} onPress={login} />
            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={loginWithoutLogin}>
              <Text style={styles.txtBlue}>Inicie sem Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  )
}