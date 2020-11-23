import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const sidebarStyles = StyleSheet.create({
  container: {
    backgroundColor: stylesVariables.color.background.ivap,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  icon: {
    marginLeft: 15,
    marginRight: 0,
    padding: 0
  },
  item: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: "#fff",
    marginLeft: -15,
  },
  logo: {
    marginTop: 50,
    resizeMode: 'contain',
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  euskadi: {
    width: 200,
    height: 20,
    resizeMode: 'stretch',
    marginVertical: 20,
    marginHorizontal: 20
  },
  gv: {
    width: 200,
    height: 20,
    resizeMode: 'stretch',
    marginVertical: 10,
    marginHorizontal: 20
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
