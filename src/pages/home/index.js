import React, { useState } from "react";
import { View, Text, RefreshControl, FlatList, TextInput } from 'react-native';
import { useSelector } from "react-redux";
import CardEvent from "../../components/cardEvent";
import styles from "./style";
import Input from "../../components/input";
import { Icon } from "react-native-elements";
import { colors } from '../../utils/Constants'

export default function Home() {

  const name = useSelector(state => state.name);
  const [events, setEvents] = useState([
    {
      id: '1',
      name: 'Palestra sobre Segurança da Informação',
      description: 'A palestra sobre segurança da informação abrange as questões mais comuns de qualquer pessoa que use a internet no dia-a-dia - no trabalho, em casa ou no lazer - através de um computador ou dispositivo móvel.',
      price: 20.50,
      date: '09/12/2021',
      hour: '20:30'
    },
    {
      id: '2',
      name: 'Palestra sobre Segurança da Informação',
      description: 'A palestra sobre segurança da informação abrange as questões mais comuns de qualquer pessoa que use a internet no dia-a-dia - no trabalho, em casa ou no lazer - através de um computador ou dispositivo móvel.',
      price: 20.50,
      date: '09/12/2021',
      hour: '20:30'
    },
    {
      id: '3',
      name: 'Palestra sobre Segurança da Informação',
      description: 'A palestra sobre segurança da informação abrange as questões mais comuns de qualquer pessoa que use a internet no dia-a-dia - no trabalho, em casa ou no lazer - através de um computador ou dispositivo móvel.',
      price: 20.50,
      date: '09/12/2021',
      hour: '20:30'
    },

  ]);
  const [isRefresh, setIsRefresh] = useState(false);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {name ?
          <Text style={styles.txtTitle}>Olá, {name}</Text>
          : null
        }
        <View style={styles.containerHeader}>
          <TextInput placeholder='Pesquisar' placeholderTextColor={colors.cinza} style={styles.inputStyle} />
          <View style={styles.inside} />
          <Icon name="search" style={styles.iconSty} color={colors.cinza} />
        </View>
        <Text style={styles.txtTitle}>Eventos Disponíveis</Text>
        <FlatList
          data={events}
          refreshControl={<RefreshControl refreshing={isRefresh} />}
          style={{ width: '100%' }}
          keyExtractor={item => item.id}
          renderItem={({ item: item }) => (
            <CardEvent item={item} />
          )}
        />
      </View>
    </View>
  )
}