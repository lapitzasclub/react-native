import { StyleSheet } from "react-native";

export const stylesVariables = {
    color: {
        font: {
            default: "#262626",
            ivap: "#A2355C",
        },
        icon: {
            default: "#B7B7B7"
        },
        background: {
            default: "white",
            ivap: "#B72A5E",
            alert: "#E9E9E9",
            primary: "#059CCB",
        }
    },
    font: {
        default: "Montserrat"
    }

}

export const styles = StyleSheet.create({
    h2: {
        fontFamily: 'Montserrat-SemiBold',
        color: stylesVariables.color.font.default,
        fontSize: 25,
        textAlign: "left",
        margin: 15
    },
    bg: {
        flex: 1,
        backgroundColor: stylesVariables.color.background.ivap
    },
    mainView: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    mainScrollView: {
        paddingVertical: 15,
        minWidth: '100%'
    }

});