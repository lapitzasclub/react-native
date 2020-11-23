import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const headerStyles = StyleSheet.create({
  menuButton: {
    color: "#fff",
    paddingLeft: 10
  },
  notificationsButton: {
    color: "#fff",
    paddingRight: 10
  },
  container: {
    backgroundColor: stylesVariables.color.background.ivap,
    borderBottomColor: stylesVariables.color.background.ivap,
    margin: 0,
    height: 90,
  },
  centerComponent: {
    fontFamily: 'Montserrat-Bold',
    lineHeight: 27,
    fontSize: 22,
    color: "#fff",
    marginLeft: 5
  },
});
