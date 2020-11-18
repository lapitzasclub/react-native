import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const headerStyles = StyleSheet.create({
  menuButton: {
    color: "#fff",
    paddingLeft: "10px"
  },  
  notificationsButton: {
    color: "#fff",
    paddingRight: "10px"
  },
  container: {
    backgroundColor: stylesVariables.color.background.ivap,
    borderBottomColor: stylesVariables.color.background.ivap,
    margin: 0,
    height: 70
  },
  centerComponent: {
    color: "#fff"
  },
});
