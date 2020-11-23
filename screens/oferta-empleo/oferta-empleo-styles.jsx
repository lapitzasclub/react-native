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
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'normal',
    color: stylesVariables.color.font.ivap,
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: "left"
  },
  item: {
    flexDirection: "row",
    flexWrap: 'nowrap',
    marginBottom: 15,
  },
  itemIcon: {
    flex: 1,
    marginRight: 5
  },
  itemLabel: {
    flex: 2,
    marginRight: 5,
    fontFamily: 'Montserrat',
    color: stylesVariables.color.font.default
  },
});
