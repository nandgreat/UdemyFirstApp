import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const GoalItem = props => {

    // Examples of Touchables
    /**
     * <TouchableNativeFeedback> for android
     * <TouchableOpacity> 
     * <TouchableWithoutFeedback>
     */

    return (
        <TouchableNativeFeedback  onPress={props.onDelete}>
            <View style={styles.listItem} >
            <Text >{props.title}</Text>
        </View>
        </TouchableNativeFeedback>
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