import React from 'react'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function DismissKeyboard({ children }) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }} containerStyle={{ flex: 1 }}>
            {children}
        </TouchableWithoutFeedback>
    )
}
