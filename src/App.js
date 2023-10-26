import React from "react";
import { View, StyleSheet } from "react-native";
import MaxMin from "./componentes/MaxMin";

export default () =>  {
    return (
        <View style={style.App}>
            <MaxMin min={7} max={99}/>
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
