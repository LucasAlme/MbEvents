import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Button from '../../components/button';
import { Telas } from '../../utils/enums/telas';
import style from './style';

export default function DetailsTicket() {
    const route = useRoute();
    const navigation = useNavigation();
    const event = route.params.event;

    return (
        <View style={style.background}>
            <StatusBar backgroundColor={"rgba(5, 230, 250, 0.05)"} />
            <View style={style.container}>
                <View>
                    <Text style={style.txtTitle}>{event.name}</Text>
                    <View style={style.content}>
                        <Text>Valor: R${event.price}</Text>
                        <Text>Dia: {event.date} às {event.hour}</Text>
                    </View>
                    <Text style={{paddingBottom: 20}}>Local: {event.local}</Text>
                    <Text>{event.description}</Text>
                </View>
                <Button value="Ingresso" onPress={() => navigation.navigate(Telas.buyTickets, {event: event})} />
            </View>
        </View>
    )
}