import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen =  ({navigation}) => {
    return <View>
        <Text style={styles.textStyle}>This is Home Screen</Text>
        <Button 
            title="Go to List"
            onPress={() => navigation.navigate('ListScreen') }
            style={styles.btn}
        />
        <Button 
            title="Go to FlatList"
            onPress={() => navigation.navigate('FlatListScreen')}

        />
        <Button 
            title="Go to ImageList"
            onPress={() => navigation.navigate('ImageListScreen')}

        />
        <Button 
            title="Go to Counter Page"
            onPress={() => navigation.navigate('CounterScreen')}

        />
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('FlatListScreen')}>
            <Text>
                Go to List Demo
            </Text>
        </TouchableOpacity> */}
        </View>

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    btn: {
        marginBottom: 50
    }
})

export default HomeScreen;