import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';


const ListScreen =  () => {
    const friends = [
        {name: "Friend 1"},
        {name: "Friend 2"},
        {name: "Friend 3"},
        {name: "Friend 4"},
        {name: "Friend 5"},
        {name: "Friend 6"},
        {name: "Friend 7"},

    ]
return (
    <FlatList 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name} 
        data={friends} 
        renderItem={({item}) => <Text style={styles.textStyle} >{item.name}</Text>}/>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical:50,
    }
})

export default ListScreen;