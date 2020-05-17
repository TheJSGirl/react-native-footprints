import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';


const FlatListScreen =  () => {
    const friends = [
        {name: "Friend 1", age: 12},
        {name: "Friend 2", age: 12},
        {name: "Friend 3", age: 12},
        {name: "Friend 4", age: 12},
        {name: "Friend 5", age: 12},
        {name: "Friend 6", age: 12},
        {name: "Friend 7", age: 12},

    ]
return (
    <FlatList 
        keyExtractor={(friend) => friend.name} 
        data={friends} 
        renderItem={({item}) => <Text style={styles.textStyle} >{item.name} - Age {item.age}</Text>}/>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical:50,
    }
})

export default FlatListScreen;