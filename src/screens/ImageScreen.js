import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={9}/>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={8} />
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={12} />
    </View>
}

export default ImageScreen;