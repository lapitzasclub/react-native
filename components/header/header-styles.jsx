import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const ivapHeader = StyleSheet.create({
  menuButton: {
    color: "#fff",
    paddingLeft: "10px"
  },  
  notificationsButton: {
    color: "#fff",
    paddingRight: "10px"
  },
  container: {
    backgroundColor: stylesVariables.color.background.ivap
  },
  centerComponent: {
    color: "#fff"
  },
});
