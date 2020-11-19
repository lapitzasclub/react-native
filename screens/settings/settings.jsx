import { styles } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';

export const SettingsScreen = (props) => {
    return (
        <View style={styles.bg}>
            <IvapHeader navigationProps={props.navigation} />
            <View style={styles.mainView}>
                <Text style={styles.h2}>
                    Ajustes
                </Text>
            </View>
        </View>
    );
}