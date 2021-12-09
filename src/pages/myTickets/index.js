import React, { useState } from "react";
import { View, Text, RefreshControl, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import CardEvent from "../../components/cardEvent";
import { dispatchState } from "../../utils/Constants";
import styles from "./style";

const sadUser = require('../../assets/images/saduser.png')
export default function MyTickets() {
  const name = useSelector(state => state.name);
  const [events, setEvents] = useState([
    {
      name: 'Palestra sobre Segurança da Informação',
      description: 'A palestra sobre segurança da informação abrange as questões mais comuns de qualquer pessoa que use a internet no dia-a-dia - no trabalho, em casa ou no lazer - através de um computador ou dispositivo móvel.',
      price: 20.50,
      date: '09/12/2021',
      hour: '20:30'
    },
    {
      name: 'Palestra sobre Segurança da Informação',
      description: 'A palestra sobre segurança da informação abrange as questões mais comuns de qualquer pessoa que use a internet no dia-a-dia - no trabalho, em casa ou no lazer - através de um computador ou dispositivo móvel.',
      price: 20.50,
      date: '09/12/2021',
      hour: '20:30'
    },
    {
      name: 'Palestra sobre Segurança da Informação',
      description: 'A palestra sobre segurança da informação abrange as questões mais comuns de qualquer pessoa que use a internet no dia-a-dia - no trabalho, em casa ou no lazer - através de um computador ou dispositivo móvel.',
      price: 20.50,
      date: '09/12/2021',
      hour: '20:30'
    },

  ]);
  const [isRefresh, setIsRefresh] = useState(false);
  const dispatch = useDispatch();


  function logoff() {
    dispatch({ type: dispatchState.isLogin, value: false });
    dispatch({ type: dispatchState.name, value: '' });
  }

  return (
    <View style={styles.background}>
      {name ?
        <View style={styles.container}>
          <>
            <Text style={styles.txtTitle}>Meus Ingressos</Text>
            <FlatList
              data={events}
              refreshControl={<RefreshControl refreshing={isRefresh} />}
              style={{ width: '100%' }}
              renderItem={({ item: item }) => (
                <CardEvent item={item} isMyTicket />
              )}
            />
          </>
        </View>
        :
        <View style={styles.containerDeslogado}>
          <Text style={[styles.txtTitle, { textAlign: 'center' }]}>É preciso estar logado para ter acesso aos seus ingressos!</Text>
          <Image source={sadUser} style={styles.imgSty} />
          <TouchableOpacity onPress={logoff}>
            <Text style={[styles.txtTitle, { textAlign: 'center' }]}>Clique aqui para fazer login</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}