import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../utils/Constants';
import styles from './style';

export default function Button({ value, customStyle, color, onPress, txtStyle }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, customStyle, { backgroundColor: color ?? colors.azul }]} containerStyle={{width: '100%'}}>
                <Text style={[styles.txt, txtStyle]}>{value}</Text>
        </TouchableOpacity>
    )
}
