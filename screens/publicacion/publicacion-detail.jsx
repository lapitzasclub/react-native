import { styles } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';
import { ScrollView } from 'react-native-gesture-handler';
import { publicacionStyles } from './publicacion-styles';
import moment from 'moment';
import { publicacionDetailStyles } from './publicacion-detail-styles';
import HTML from "react-native-render-html";

export const PublicacionDetailScreen = (props) => {
    const { publicacion } = props.route.params

    return (
        <View style={styles.bg}>
            <IvapHeader navigationProps={props.navigation} />
            <View style={styles.mainView} >
                <ScrollView contentContainerStyle={styles.mainScrollView} >
                    <View style={publicacionDetailStyles.mainView}>
                        <Text h2 style={publicacionDetailStyles.title}>{publicacion.title}</Text>
                        <Text style={publicacionStyles.date}>{moment(publicacion.date).format('DD/MM/YYYY')}</Text>
                        <Text style={publicacionDetailStyles.from}>{publicacion.from}</Text>
                        <HTML
                            html={publicacion.content}
                            containerStyle={publicacionDetailStyles.content}
                            tagsStyles={{ p: publicacionDetailStyles.paragraph }} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}