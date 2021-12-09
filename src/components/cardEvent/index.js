import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/Constants';
import styles from './style';

export default function CardEvent({ item, onPress, isMyTicket }) {
    return (
        <TouchableOpacity style={styles.containerPedidos} onPress={onPress}>
            <LinearGradient style={styles.containerCard} colors={[colors.branco, "rgba(5, 230, 250, 0.05)"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={styles.txtOs}>{item.name}</Text>
                <Text style={styles.txtStandard}>{String(item.description).length > 40 ? String(item.description).substr(0, 37) + '...' : item.description}</Text>
                {isMyTicket ? null : <Text style={styles.txtStandard}>{"Valor do Ingresso: R$" + item.price}</Text>}
                <Text style={styles.txtStandard}>Dia: {item.date} às: {item.hour}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}