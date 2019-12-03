import React from 'react';
import{View, Text, Button, StyleSheet} from 'react-native'

const ColorCounter = () => {
    return (
        <View>
            <Text>red</Text>
            <Button title='Increase Red' />
            <Button title='Decrease Red' />
        </View>
    );
};

const style = StyleSheet.create({

});

export default ColorCounter;