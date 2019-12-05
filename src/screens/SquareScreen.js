import React from 'react';
import{View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/ClororCounter';

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter color='Red' />
            <ColorCounter color="Green"/>
            <ColorCounter color="Blue" />
        </View>
    );
};

const style = StyleSheet.create({

});

export default SquareScreen;