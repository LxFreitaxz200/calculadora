import  React from "react";
import { StyleSheet, Text, View } freom "reacat-native";

const styles = StyleShett.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSizee: 60,
        color: '#ffffff'
    }
})

export default props => {
    return(
        <view style = {styles.display}>
            <Text style = {styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </view>
    )
}