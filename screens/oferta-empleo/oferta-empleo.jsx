import { styles, stylesVariables } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { IvapHeader } from '../../components/header/header';
import { ofertaEmpleoStyles } from './oferta-empleo-styles';
import { OfertaEmpleo } from './oferta-empleo.model';
import { Link } from '@react-navigation/native';

export class OfertaEmpleoScreen extends React.Component {
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
                <View style={styles.mainView}>
                    <Text style={styles.h2}>Empleo público</Text>

                    {this.state.ofertaEmpleoList && this.state.ofertaEmpleoList.length > 0 ? (
                        <View className="ofertas">
                            {this.state.ofertaEmpleoList.map((ofertaEmpleo, i) => (
                                <Card containerStyle={ofertaEmpleoStyles.card}>
                                    <Card.Title style={ofertaEmpleoStyles.title}>{ofertaEmpleo.title}</Card.Title>
                                    <View style={ofertaEmpleoStyles.item}>
                                        <Icon name="place" style={ofertaEmpleoStyles.itemIcon} color={stylesVariables.color.icon.default} />
                                        <Link style={ofertaEmpleoStyles.link}>
                                            {ofertaEmpleo.place}
                                        </Link>
                                    </View>
                                    <View style={ofertaEmpleoStyles.item}>
                                        <Icon name="people" style={ofertaEmpleoStyles.itemIcon} color={stylesVariables.color.icon.default} />
                                        <Text style={ofertaEmpleoStyles.itemLabel}>
                                            Nº plazas: {ofertaEmpleo.slots}
                                        </Text>
                                    </View>
                                    <View style={ofertaEmpleoStyles.item}>
                                        <Icon name="work" style={ofertaEmpleoStyles.itemIcon} color={stylesVariables.color.icon.default} />
                                        <Text style={ofertaEmpleoStyles.itemLabel}>
                                            Tipo de contrato: {ofertaEmpleo.contract}
                                        </Text>
                                    </View>
                                    <View style={ofertaEmpleoStyles.item}>
                                        <Icon name="today" style={ofertaEmpleoStyles.itemIcon} color={stylesVariables.color.icon.default} />
                                        <Text style={ofertaEmpleoStyles.itemLabel}>
                                            {ofertaEmpleo.term}
                                        </Text>
                                    </View>
                                </Card>
                            ))}
                        </View>
                    ) : (
                            !this.state.loading && (
                                <div className="alert alert-warning">
                                    No se han encontrado ofertas de empleo público
                                </div>
                            )
                        )
                    }
                </View>
            </View>
        );
    }
}