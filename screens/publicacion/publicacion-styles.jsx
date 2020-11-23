import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const publicacionStyles = StyleSheet.create({
  card: {
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 10,
    shadowColor: '#7A7A7A',
    shadowOpacity: 0.2,
    padding: 0
  },
  touchable: {
    borderRadius: 20,
    padding: 15,
  },
  cardLeft: {
    flex: 1
  },
  cardRight: {
    flex: 2,
    maxWidth: 25,
    justifyContent: 'center'
  },
  date: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#8E8E8E',
    textTransform: 'uppercase',
    textAlign: "left",
    marginBottom: 10
  },
  title: {
    fontFamily: 'Montserrat',
    color: stylesVariables.color.font.default,
  }
});
