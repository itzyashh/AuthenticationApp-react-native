import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const customInput = ({ value, setValue, placeholder,secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white'
        , borderWidth: 1,
        borderColor: '#ced5db',
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {
    }
})

export default customInput