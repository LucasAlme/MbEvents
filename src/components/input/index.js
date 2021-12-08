import React from 'react'
import { TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';
import { colors } from '../../utils/Constants';

import styles from './style';

export default function Input({ mask, placeholder, textAlignVertical , placeholderColor, customStyle, width, password,type, value, onChangeText, multiline }) {
    return (
        mask ? 
        <TextInputMask includeRawValueInChangeText style={[styles.input, customStyle, {width: width ?? '100%'}]} type={mask} 
         placeholder={placeholder} multiline={multiline} placeholderTextColor={placeholderColor ?? colors.cinza}
         keyboardType={type} value={value} onChangeText={onChangeText} textAlignVertical={textAlignVertical}/>
        :
        <TextInput  place secureTextEntry={password} placeholderTextColor={placeholderColor ?? colors.cinza}
        value={value} onChangeText={onChangeText} multiline={multiline}
        keyboardType={type} placeholder={placeholder} style={[styles.input, customStyle, {width: width ?? '100%'}]} textAlignVertical={textAlignVertical} />
    )
}
