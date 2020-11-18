import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IvapDrawer } from './components/sidebar/sidebar';
import { View } from 'react-native';
import { styles } from './global-styles';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <IvapDrawer />
    </NavigationContainer>
  );
}
