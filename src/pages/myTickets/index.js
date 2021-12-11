import React, { useEffect, useState } from "react";
import { View, Text, RefreshControl, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import CardEvent from "../../components/cardEvent";
import FooterList from "../../components/footerList";
import api from "../../service/api";
import { dispatchState } from "../../utils/Constants";
import styles from "./style";
import { colors } from '../../utils/Constants';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Telas } from "../../utils/enums/telas";

const sadUser = require('../../assets/images/saduser.png')
export default function MyTickets() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const [events, setEvents] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const navigation = useNavigation();


  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []));

  async function getData() {
    setIsRefresh(true);
    const resp = await api.get(`users?name=${name}`);
    setEvents(resp?.data[0]?.myTickets);
    setIsRefresh(false);
  }

  function logoff() {
    dispatch({ type: dispatchState.isLogin, value: false });
    dispatch({ type: dispatchState.name, value: '' });
  }

  return (
    <View style={styles.background}>
      {name ?
        events?.length === 0 ?
          <View style={styles.containerDeslogado}>
            <Text style={[styles.txtTitle, { textAlign: 'center' }]}>Você ainda não possui nenhum ingresso!</Text>
            <Image source={sadUser} style={styles.imgSty} />
          </View>
          :
          <View style={styles.container}>
            <>
              <View style={styles.row}>
                <Text style={styles.txtTitle}>Meus Ingressos</Text>
                <Text style={styles.txtTitle}>Possuí {events.length} ingresso</Text>
              </View>

              <FlatList
                data={events}
                refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={() => getData()} colors={[colors.azul, colors.branco]} />}
                style={{ width: '100%' }}
                keyExtractor={item => String(item.id)}
                ListFooterComponent={<FooterList load={isRefresh} />}
                renderItem={({ item: item }) => (
                  <CardEvent item={item} isMyTicket onPress={() => navigation.navigate(Telas.detailsTicket, { isMyTicket: true, event: item })} />
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