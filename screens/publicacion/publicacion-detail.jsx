import { styles } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';
import { ScrollView } from 'react-native-gesture-handler';
import { publicacionStyles } from './publicacion-styles';
import { Card, Icon } from 'react-native-elements';
import moment from 'moment';

export const PublicacionDetailScreen = (props) => {
    const { publicacion } = props.route.params

    return (
        <View style={styles.bg}>
            <IvapHeader navigationProps={props.navigation} />
            <View style={styles.mainView} >
                <ScrollView contentContainerStyle={styles.mainScrollView} >
                    <Text style={styles.h2}>{publicacion.title}</Text>

                </ScrollView>
            </View>
        </View>
    );
}