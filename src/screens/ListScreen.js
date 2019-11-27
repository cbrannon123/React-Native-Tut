import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 41 },
        { name: 'Friend #2', age: 43 },
        { name: 'Friend #3', age: 44 },
        { name: 'Friend #4', age: 42 },
        { name: 'Friend #5', age: 53 },
        { name: 'Friend #6', age: 25 },
        { name: 'Friend #7', age: 56 },
        { name: 'Friend #8', age: 2 },
    ];


    return (
        <FlatList
            // show list horizontal
            //horizontal
            // gets rid of scroll bar at bottem
            //showsHorizontalScrollIndicator={false}
            data={friends}
            keyExtractor={(friend) => friend.name}
            renderItem={({ item }) => {
                //element == {item: {name: 'friend #1}, index: 0}
                return (
                    <Text style={styles.textStye}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStye: {
        marginVertical: 50
    }
});

export default ListScreen;
