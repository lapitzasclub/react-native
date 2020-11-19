import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const ofertaEmpleoStyles = StyleSheet.create({
  card: {
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 10,
    shadowColor: '#7A7A7A',
    shadowOpacity: 0.2
  },
  title: {
    color: stylesVariables.color.font.ivap,
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: "left"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    color: stylesVariables.color.font.default,
    marginBottom: 15,
  },
  itemIcon: {
    marginRight: 5
  },
});
