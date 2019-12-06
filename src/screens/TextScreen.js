import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
           {name.length > 4 ? null : <Text>Pw must be 5 char long.</Text>}

        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;