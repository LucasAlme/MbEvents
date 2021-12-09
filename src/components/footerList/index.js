import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../utils/Constants';

export default function FooterList({ load }) {
    if (!load) return null;
    return (
        <View style={{ padding: 10 }}>
            <ActivityIndicator size={25} color={colors.azul} />
        </View>
    )
}