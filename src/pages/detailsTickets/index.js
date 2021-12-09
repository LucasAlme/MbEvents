import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import style from './style';

export default function DetailsTicket() {
    const route = useRoute();
    const event = route.params.event;

    useEffect(() => {
        console.log(event)
    })
    return (
        <View style={style.background}>
            <StatusBar backgroundColor={"rgba(5, 230, 250, 0.05)"} />
            <View style={style.container}>
                <Text style={style.txtTitle}>{event.name}</Text>
                <View style={style.content}>
                    <Text>Valor: {event.price}</Text>
                    <Text>Dia: {event.date} às {event.hour}</Text>
                </View>
                <Text>{event.description}</Text>
            </View>
        </View>
    )
}