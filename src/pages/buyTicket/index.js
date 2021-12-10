import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../../components/button';
import Input from '../../components/input';
import api from '../../service/api';
import { Telas } from '../../utils/enums/telas';
import style from './style';

export default function BuyTicket() {
    const name = useSelector(state => state.name);
    const route = useRoute();
    const navigation = useNavigation()
    const event = route.params?.event;
    const [dataCard, setDataCard] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {

    }, [user])

    async function getData() {
        const rep = await api.get(`users?name=${name}`)
        getEvent(rep);
    }

    function getEvent(rep) {
        if (rep?.data[0]) {
            const { myTickets, ...repRes } = rep.data[0];
            setUser({ ...repRes, myTickets: [...myTickets, event] });
        }
    }

    function isValid() {
        if (!name) {
            Alert.alert('Impossível', 'É preciso fazer login de usuário para comprar ingressos');
            return null
        }
        const listErrors = [];
        if (String(dataCard?.cardNumber).length < 19) listErrors.push('O número do cartão é inválido');
        if (String(dataCard?.cardCode).length !== 3) listErrors.push('O código de segurança inserido é inválido');
        if (String(dataCard?.cardDate).length !== 5) listErrors.push('A data inserida é inválida');
        if (listErrors.length > 0) {
            Alert.alert('Campos preenchidos incorretamente', `${listErrors.join('\n\n')}`);
            return false
        }
        buyTicket();
        return true;
    }

    function buyTicket() {
        api.put(`users/${user.id}`, user);
        navigation.navigate(Telas.home);
        Alert.alert('Parabéns!', 'Sua compra foi feita com sucesso!')

    }

    return (
        <View style={style.background}>
            <View style={style.container}>
                <View>
                    <Text style={style.txtTitle}>{event.name}</Text>
                    <View style={style.content}>
                        <Text style={style.txt}>Valor: R${event.price}</Text>
                        <Text style={style.txt}>Dia: {event.date} às {event.hour}</Text>
                    </View>
                    <Text style={style.txtBuy}>Número do cartão*</Text>
                    <Input mask={'credit-card'} value={dataCard?.cardNumber} onChangeText={(string, txt) => setDataCard({ ...dataCard, cardNumber: txt })} type="number-pad" />
                    <Text style={style.txtBuy}>Código de segurança*</Text>
                    <Input value={dataCard?.cardCode} onChangeText={(txt) => setDataCard({ ...dataCard, cardCode: txt })} />
                    <Text style={style.txtBuy}>Data de expiração*</Text>
                    <Input value={dataCard?.cardDate} onChangeText={(txt) => setDataCard({ ...dataCard, cardDate: txt })} />
                </View>
                <Button value="Comprar Ingresso" onPress={isValid} />
            </View>
        </View>
    )
}