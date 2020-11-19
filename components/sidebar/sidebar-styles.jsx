import { StyleSheet } from "react-native";
import { stylesVariables } from "../../global-styles";

export const ivapSidebar = StyleSheet.create({
  container: {
    backgroundColor: stylesVariables.color.background.ivap,
  },
  item: {
    color: "#fff"
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
