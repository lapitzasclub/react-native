import { styles, stylesVariables } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { IvapHeader } from '../../components/header/header';
import { ofertaEmpleoStyles } from './oferta-empleo-styles';
import { OfertaEmpleo } from './oferta-empleo.model';
import { Link } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export class OfertaEmpleoDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        let ofertaEmpleoList = [];
        ofertaEmpleoList.push(new OfertaEmpleo(
            1,
            'Técnico de administración general',
            'Ayuntamiento de Amorebieta-Etxano (Amorebieta - Bizkaia)',
            2,
            'Funcionaria/o',
            'Plazo de inscripción abierto (13/07/2020 - 07/08/2020)'
        ))
        ofertaEmpleoList.push(new OfertaEmpleo(
            2,
            'Administrativa/o',
            'Instituto Foral de Asistencia Social de Bizkaia (IFAS) (Bizkaia)',
            25,
            'Funcionaria/o',
            'Plazo de inscripción abierto (11/07/2020 - 30/08/2020)'
        ))
        ofertaEmpleoList.push(new OfertaEmpleo(
            3,
            'Administrativa/o',
            'Instituto Foral de Asistencia Social de Araba (IFAS) (Araba)',
            18,
            'Funcionaria/o',
            'Plazo de inscripción abierto (11/07/2020 - 30/08/2020)'
        ))
        ofertaEmpleoList.push(new OfertaEmpleo(
            4,
            'Administrativa/o',
            'Instituto Foral de Asistencia Social de Gipuzkoa (IFAS) (Gipuzkoa)',
            21,
            'Funcionaria/o',
            'Plazo de inscripción abierto (11/07/2020 - 30/08/2020)'
        ))

        this.state = {
            ofertaEmpleoList: ofertaEmpleoList,
            loading: false
        };
    }

    render() {
        return (
            <View style={styles.bg}>
                <IvapHeader navigationProps={this.props.navigation} />
                <View style={styles.mainView} >
                    <ScrollView contentContainerStyle={styles.mainScrollView} >
                        <Text h2 style={styles.h2}>Detalle de la oferta</Text>

                    </ScrollView>
                </View>
            </View >
        );
    }
}