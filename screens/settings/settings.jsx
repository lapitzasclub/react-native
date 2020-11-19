import { styles } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';
import { ScrollView } from 'react-native-gesture-handler';

export const SettingsScreen = (props) => {
    return (
        <View style={styles.bg}>
            <IvapHeader navigationProps={props.navigation} />
            <View style={styles.mainView} >
                <ScrollView contentContainerStyle={styles.mainScrollView} >
                    <Text style={styles.h2}>Ajustes</Text>
                </ScrollView>
            </View>
        </View>
    );
}