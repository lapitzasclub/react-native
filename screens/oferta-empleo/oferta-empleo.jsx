import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';

export class OfertaEmpleoScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <IvapHeader navigationProps={this.props.navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Empleo público</Text>
                </View>
            </View>
        );
    }
}