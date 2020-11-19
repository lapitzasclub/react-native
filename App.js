import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IvapDrawer } from './components/sidebar/sidebar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <IvapDrawer />
    </NavigationContainer>
  );
}
