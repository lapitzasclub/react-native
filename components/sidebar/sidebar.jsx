import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { OfertaEmpleoScreen } from '../../screens/oferta-empleo/oferta-empleo';
import { PublicacionScreen } from '../../screens/publicacion/publicacion';
import { NotificacionScreen } from '../../screens/notificacion/notificacion';
import { SettingsScreen } from '../../screens/settings/settings';
import { ivapSidebar } from './sidebar-styles';
import { Image, SafeAreaView, View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import logoIvap from '../../assets/images/logo-menu-ivap.png';
import logoGV from '../../assets/images/logo-menu-GV.png';
import logoEuskadi from '../../assets/images/logo-menu-euskadi.png';

const Drawer = createDrawerNavigator();

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={logoIvap} style={ivapSidebar.logo} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={ivapSidebar.customItem}>
        <Image source={logoEuskadi} style={ivapSidebar.euskadi} />
      </View>
      <View style={ivapSidebar.customItem}>
        <Image source={logoGV} style={ivapSidebar.gv} />
      </View>
    </SafeAreaView>
  );
};


export class IvapDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="OfertaEmpleoScreen"
        drawerStyle={ivapSidebar.container}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
        drawerContentOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: '#FFECF8',
          itemStyle: ivapSidebar.item
        }}
      >
        <Drawer.Screen
          name="OfertaEmpleoScreen"
          component={OfertaEmpleoScreen}
          options={{
            drawerIcon: config => <Icon size={20} color="#DD99B2" name="work" />,
            drawerLabel: 'Empleo público'
          }}
        />
        <Drawer.Screen
          name="PublicacionScreen"
          component={PublicacionScreen}
          options={{
            drawerIcon: config => <Icon size={20} color="#DD99B2" name="bullhorn" type="material-community" />,
            drawerLabel: 'Publicaciones'
          }}
        />
        <Drawer.Screen
          name="NotificacionScreen"
          component={NotificacionScreen}
          options={{
            drawerIcon: config => <Icon size={20} color="#DD99B2" name="notifications" />,
            drawerLabel: 'Notificaciones'
          }}
        />
        <Drawer.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            drawerIcon: config => <Icon size={20} color="#DD99B2" name="settings" />,
            drawerLabel: 'Ajustes'
          }}
        />
      </Drawer.Navigator>
    );
  }
}