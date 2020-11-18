import { StyleSheet } from "react-native";

export const stylesVariables = {
    "color": {
        "font": {
            "default": "#262626",
            "ivap": "#A2355C",
        },
        "icon": {
            "default": "#B7B7B7"
        },
        "background": {
            "default": "white",
            "ivap": "#B72A5E",
            "alert": "#E9E9E9",
            "primary": "#059CCB",
        }
    }
}

export const styles = StyleSheet.create({
    h2: {
        color: stylesVariables.color.font.default,
        fontSize: 25,
        fontWeight: 600,
        textAlign: "left",
        margin: 15
    },
    bg: {
        backgroundColor: stylesVariables.color.background.ivap
    },
    mainView: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 15
    }

});