import React, { useEffect, useState } from "react";
import { View, Text, RefreshControl, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import CardEvent from "../../components/cardEvent";
import styles from "./style";
import Input from "../../components/input";
import { Icon } from "react-native-elements";
import { colors } from '../../utils/Constants';
import api from '../../service/api';
import FooterList from "../../components/footerList";
import { useNavigation } from '@react-navigation/native';
import { Telas } from "../../utils/enums/telas";

export default function Home() {

  const name = useSelector(state => state.name);
  const [events, setEvents] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    console.log(name)
    getData();
  }, [search])

  function getData() {
    setIsRefresh(true);
    api.get(`events?q=${search}`)
      .then((resp) =>
        setEvents(resp.data),
        setIsRefresh(false)
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err)
        setIsRefresh(false)
      })

  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {name ?
          <Text style={styles.txtTitle}>Olá, {name}</Text>
          : null
        }
        <View style={styles.containerHeader}>
          <TextInput placeholder='Pesquisar' placeholderTextColor={colors.cinza} style={styles.inputStyle} onChangeText={txt => setSearch(txt)} />
          <View style={styles.inside} />
          <Icon name="search" style={styles.iconSty} color={colors.cinza} />
        </View>
        <Text style={styles.txtTitle}>Eventos Disponíveis</Text>
        <FlatList
          data={events}
          refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={() => getData()} colors={[colors.azul, colors.branco]} />}
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={true}
          ListFooterComponent={<FooterList load={isRefresh} />}
          keyExtractor={item => item.id}
          renderItem={({ item: item }) => (
            <CardEvent item={item}
              onPress={() => navigation.navigate(Telas.detailsTicket, {event: item})}
            />
          )}
        />
      </View>
    </View>
  )
}

