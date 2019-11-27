import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Hello too you</Text>;
    const name = 'Casey';

    return ( 
        //props to create elements"View, Text
        <View>
            <Text style={styles.subHeader}>Getting started with React Native!</Text>
            <Text style={styles.name}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subHeader: {
        fontSize: 45
    },
    name: {
        fontSize: 20
    }
});

export default ComponentsScreen;