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
    resizeMode: 'center',
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  euskadi: {
    width: 200,
    height: 20,
    resizeMode: 'strech',
    marginVertical: 20,
    marginHorizontal: 20
  },
  gv: {
    width: 200,
    height: 20,
    resizeMode: 'strech',
    marginVertical: 10,
    marginHorizontal: 20
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
