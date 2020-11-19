import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IvapDrawer } from './components/sidebar/sidebar';
import { AppRegistry, Platform } from 'react-native';
import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './global-styles';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <IvapDrawer />
    </NavigationContainer>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (Platform.OS == "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}