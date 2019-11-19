import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Option(props) {
    const type = props.kind;
    let t;
    if (type == 'red' || type == 'green')
    {
        t = {backgroundColor: type};
    }
    else if (props.ans === true && props.id === props.corr)
    {
        t = {backgroundColor: 'green'};
    }
    else
    {
       t = {backgroundColor: 'cyan'};
    }
    return (
        <View id = {props.id} style = {{ borderBottomColor:'gray', borderTopColor:'gray', borderTopWidth:2, borderBottomWidth:2 ,...t}}>
          <Text style={styles.option}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    option: {
        padding: 20,
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
        opacity: 0.4
    }
});