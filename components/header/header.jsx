import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from 'react-native-elements';
import { headerStyles } from './header-styles';

class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={navigation.toggleDrawer} >
                <Icon name="md-menu" size={30} style={headerStyles.menuButton} />
            </TouchableOpacity>
        );
    }
}

class NavigationDrawerButton extends React.Component {
    constructor(props) {
        super(props);
    }
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#1562b0' barStyle='light-content' />
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                        <Icon name="md-menu" size={30} style={headerStyles.menuButton} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class NotificationsButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <Icon name="md-notifications" size={25} style={headerStyles.notificationsButton} />
            </TouchableOpacity>
        );
    }
}

export class IvapHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header id="ivapHeader"
                placement="left"
                leftComponent={<NavigationDrawerButton navigationProps={this.props.navigationProps} />}
                centerComponent={{ text: 'IVAP', style: headerStyles.centerComponent }}
                rightComponent={<NotificationsButton onPress={() => { this.props.navigationProps.navigate('NotificacionScreen'); }} />}
                containerStyle={headerStyles.container}
            />
        );
    }
}