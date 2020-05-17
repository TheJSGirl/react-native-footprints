import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetailScreen = ({title, imageSource, imageScore}) => {
    return <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image score - {imageScore}</Text>
        </View>
}
export default ImageDetailScreen;