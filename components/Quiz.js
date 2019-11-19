import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Quiz(props) {
    return (
        <View style={{borderBottomWidth: 2,borderBottomColor: 'white',borderTopColor: 'white',borderTopWidth: 2}}>
          <Text style={styles.quiz}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    quiz: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
});