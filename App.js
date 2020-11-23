import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IvapDrawer } from './components/sidebar/sidebar';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat': require('./assets/fonts/Montserrat.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf')
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <NavigationContainer>
          <IvapDrawer />
        </NavigationContainer>
      );
    }
    else {
      return (
        // <View style={styles.container}>
        //   <ActivityIndicator />
        //   <StatusBar barStyle="default" />
        // </View>
        <AppLoading />
      );
    }
  }
}
