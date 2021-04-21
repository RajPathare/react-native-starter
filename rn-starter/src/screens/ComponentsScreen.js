import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {    

    let myName = 'Raj';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React-Native!</Text>
            <Text style={styles.smallTextStyle}>My name is {myName}!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    smallTextStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;