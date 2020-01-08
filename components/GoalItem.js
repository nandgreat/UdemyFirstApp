import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {

    // Examples of Touchables
    /**
     * <TouchableNativeFeedback> for android
     * <TouchableOpacity> 
     * <TouchableWithoutFeedback>
     */

    return (
        <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
            <Text >{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#dddddd',
        borderColor: '#dddddd',
        borderWidth: 1
    }
})

export default GoalItem