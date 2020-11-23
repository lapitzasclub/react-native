import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { OfertaEmpleoScreen } from '../../screens/oferta-empleo/oferta-empleo';
import { OfertaEmpleoDetailScreen } from '../../screens/oferta-empleo/oferta-empleo-detail';
import { PublicacionScreen } from '../../screens/publicacion/publicacion';
import { PublicacionDetailScreen } from '../../screens/publicacion/publicacion-detail';
import { NotificacionScreen } from '../../screens/notificacion/notificacion';
import { SettingsScreen } from '../../screens/settings/settings';
import { sidebarStyles } from './sidebar-styles';
import { Image, SafeAreaView, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

import logoIvap from '../../assets/images/logo-menu-ivap.png';
import logoGV from '../../assets/images/logo-menu-GV.png';
import logoEuskadi from '../../assets/images/logo-menu-euskadi.png';
import splash from '../../assets/images/fondo-splash.png';

const Drawer = createDrawerNavigator();

const CustomSidebarMenu = (props) => {
  // const filteredProps = {
  //   ...props,
  //   state: {
  //     ...props.state,
  //     routeNames: props.state.routeNames.filter(
  //       routeName => /.*(?<!DetailScreen)$/g.test(routeName)
  //     ),
  //     routes: props.state.routes.filter(
  //       route => /.*(?<!DetailScreen)$/g.test(route.name)
  //     ),
  //   },
  // };

  const routeName = props.state.routes[props.state.index].name;
  const navigation = props.navigation;

  function resetTo(screen) {
    return navigation.reset({
      index: 0,
      routes: [{ name: screen }]
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={splash} style={sidebarStyles.bg}>
        <Image source={logoIvap} style={sidebarStyles.logo} />
        <DrawerContentScrollView {...props}>
          {/* <DrawerItemList {...filteredProps} /> */}
          <DrawerItem
            icon={() => <Icon size={20} color="#DD99B2" name="work" style={sidebarStyles.icon} />}
            label="Empleo público"
            onPress={() => resetTo('OfertaEmpleoScreen')}
            activeTintColor='#FFF'
            inactiveTintColor='#FFECF8'
            labelStyle={sidebarStyles.item}
            focused={routeName.match(/^(OfertaEmpleoScreen|OfertaEmpleoDetailScreen)$/)}
          />
          <DrawerItem
            icon={() => <Icon size={20} color="#DD99B2" name="bullhorn" type="material-community" style={sidebarStyles.icon} />}
            label="Publicaciones"
            onPress={() => resetTo('PublicacionScreen')}
            activeTintColor='#FFF'
            inactiveTintColor='#FFECF8'
            labelStyle={sidebarStyles.item}
            focused={routeName.match(/^(PublicacionScreen|PublicacionDetailScreen)$/)}
          />
          <DrawerItem
            icon={() => <Icon size={20} color="#DD99B2" name="notifications" style={sidebarStyles.icon} />}
            label="Notificaciones"
            onPress={() => resetTo('NotificacionScreen')}
            activeTintColor='#FFF'
            inactiveTintColor='#FFECF8'
            labelStyle={sidebarStyles.item}
            focused={routeName.match(/^(NotificacionScreen)$/)}
          />
          <DrawerItem
            icon={() => <Icon size={20} color="#DD99B2" name="settings" style={sidebarStyles.icon} />}
            label="Ajustes"
            onPress={() => resetTo('SettingsScreen')}
            activeTintColor='#FFF'
            inactiveTintColor='#FFECF8'
            labelStyle={sidebarStyles.item}
            focused={routeName.match(/^(SettingsScreen)$/)}
          />
        </DrawerContentScrollView>
        <View style={sidebarStyles.customItem}>
          <Image source={logoEuskadi} style={sidebarStyles.euskadi} />
        </View>
        <View style={sidebarStyles.customItem}>
          <Image source={logoGV} style={sidebarStyles.gv} />
        </View>
      </ImageBackground>
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
        drawerStyle={sidebarStyles.container}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
        drawerContentOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: '#FFECF8',
          labelStyle: sidebarStyles.item
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

        <Drawer.Screen
          name="OfertaEmpleoDetailScreen"
          component={OfertaEmpleoDetailScreen}
        />
        <Drawer.Screen
          name="PublicacionDetailScreen"
          component={PublicacionDetailScreen}
        />
      </Drawer.Navigator>
    );
  }
}
