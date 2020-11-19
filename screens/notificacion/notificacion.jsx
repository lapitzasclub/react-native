import { styles } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';
import { ScrollView } from 'react-native-gesture-handler';

export class NotificacionScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.bg}>
                <IvapHeader navigationProps={this.props.navigation} />
                <View style={styles.mainView} >
                    <ScrollView contentContainerStyle={styles.mainScrollView} >
                        <Text style={styles.h2}>Notificaciones</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}