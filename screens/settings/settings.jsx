import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';

export class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <IvapHeader navigationProps={this.props.navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>AJUSTES</Text>
                </View>
            </View>
        );
    }
}