import React from "react";
import { View, StyleSheet } from "react-native";
import Formulario from "./componentes/Formulario";

export default () => {
	return (
		<View style={style.App}>
			<Formulario />
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
