import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSrc={require('../../assets/forest.jpg')}
                score={11}
            />
            <ImageDetail
                title="Beach"
                imageSrc={require('../../assets/beach.jpg')}
                score={1}
            />
            <ImageDetail
                title="Mountain"
                imageSrc={require('../../assets/mountain.jpg')}
                score={4}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;