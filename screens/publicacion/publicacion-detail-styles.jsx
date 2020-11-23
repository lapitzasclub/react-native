import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const publicacionDetailStyles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: "bold",
    color: stylesVariables.color.font.ivap,
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 15,
    fontFamily: "Montserrat"
  },
  date: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    color: '#8E8E8E',
    textTransform: 'uppercase',
    textAlign: "left",
    marginBottom: 20
  },
  from: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    textAlign: "left",
    marginBottom: 15
  },
  content: {
    flex: 1,
  },
  paragraph: {
    fontFamily: "Montserrat",
    color: stylesVariables.color.font.default,
    marginBottom: 10
  }
});
