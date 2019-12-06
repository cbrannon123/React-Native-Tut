import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOne}/>
            <View  style={styles.viewTwo}/>
            <View  style={styles.viewThree}/>

        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        width: 50,
        height: 50,
        backgroundColor:'red'

    },
    viewTwo: {
        width: 50,
        height: 50,
        backgroundColor:'blue',
        top: 50
    },
    viewThree: {
        width: 50,
        height: 50,
        backgroundColor:'green'
    },
});

export default BoxScreen;