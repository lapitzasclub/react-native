import { styles } from '../../global-styles';
import React from 'react';
import { Text, View } from 'react-native';
import { IvapHeader } from '../../components/header/header';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Publicacion } from './publicacion.model';
import { publicacionStyles } from './publicacion-styles';
import { Card, Icon } from 'react-native-elements';
import moment from 'moment';
import { parseClass4Navigation } from '../../screens/shared/utils';

export class PublicacionScreen extends React.Component {
    constructor(props) {
        super(props);

        let publicacionList = [];
        publicacionList.push(new Publicacion(
            1,
            'La sede de Bilbao de la biblioteca del IVAP permanecerá cerrada del 13 al 24 de julio. Disculpen las molestias',
            new Date(),
            'BIBLIOTECA del IVAP / AREA DE DCOUMENTACIÓN',
            '<p>Ya está disponible el boletín de junio sobre Recursos Humanos, donde se recopila información seleccionada en ' +
            'materia de Recursos Humanos: noticias, nueva bibliografía, novedades legislativas y formación prevista a corto ' +
            'plazo</p><p>En caso de estar interesado en recibir el boletín por correo electrónico, mande su solicitud a la ' +
            'siguiente dirección<br/><a mailto:"liburutegia@ivap.eus">liburutegia@ivap.eus</a></p><p>Para acceder al boletín ' +
            'siga el siguiente enlace: <a href="#">JUNIO 2020</a></p>'
        ))
        publicacionList.push(new Publicacion(
            2,
            'Boletín de junio sobre Recursos Humanos ya en la red',
            new Date(),
            'BIBLIOTECA del IVAP / AREA DE DCOUMENTACIÓN',
            '<p>Ya está disponible el boletín de junio sobre Recursos Humanos, donde se recopila información seleccionada en ' +
            'materia de Recursos Humanos: noticias, nueva bibliografía, novedades legislativas y formación prevista a corto ' +
            'plazo</p><p>En caso de estar interesado en recibir el boletín por correo electrónico, mande su solicitud a la ' +
            'siguiente dirección<br/><a mailto:"liburutegia@ivap.eus">liburutegia@ivap.eus</a></p><p>Para acceder al boletín ' +
            'siga el siguiente enlace: <a href="#">JUNIO 2020</a></p>'
        ))
        publicacionList.push(new Publicacion(
            3,
            'Boletín de junio sobre Lenguas y Traducción ya en la red',
            new Date(),
            'BIBLIOTECA del IVAP / AREA DE DCOUMENTACIÓN',
            '<p>Ya está disponible el boletín de junio sobre Recursos Humanos, donde se recopila información seleccionada en ' +
            'materia de Recursos Humanos: noticias, nueva bibliografía, novedades legislativas y formación prevista a corto ' +
            'plazo</p><p>En caso de estar interesado en recibir el boletín por correo electrónico, mande su solicitud a la ' +
            'siguiente dirección<br/><a mailto:"liburutegia@ivap.eus">liburutegia@ivap.eus</a></p><p>Para acceder al boletín ' +
            'siga el siguiente enlace: <a href="#">JUNIO 2020</a></p>'
        ))
        publicacionList.push(new Publicacion(
            4,
            'El IVAP ha publicado el libro La mediación escolar en el sistema educativo vasco no universitario',
            new Date(),
            'BIBLIOTECA del IVAP / AREA DE DCOUMENTACIÓN',
            '<p>Ya está disponible el boletín de junio sobre Recursos Humanos, donde se recopila información seleccionada en ' +
            'materia de Recursos Humanos: noticias, nueva bibliografía, novedades legislativas y formación prevista a corto ' +
            'plazo</p><p>En caso de estar interesado en recibir el boletín por correo electrónico, mande su solicitud a la ' +
            'siguiente dirección<br/><a mailto:"liburutegia@ivap.eus">liburutegia@ivap.eus</a></p><p>Para acceder al boletín ' +
            'siga el siguiente enlace: <a href="#">JUNIO 2020</a></p>'
        ))

        this.state = {
            publicacionList: publicacionList,
            loading: false
        };
    }
    render() {
        return (
            <View style={styles.bg}>
                <IvapHeader navigationProps={this.props.navigation} />
                <View style={styles.mainView} >
                    <ScrollView contentContainerStyle={styles.mainScrollView} >
                        <Text h2 style={styles.h2}>Publicaciones</Text>

                        {this.state.publicacionList && this.state.publicacionList.length > 0 ? (
                            <View>
                                {this.state.publicacionList.map((publicacion, i) => (
                                    <Card containerStyle={publicacionStyles.card} key={i} key={i}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('PublicacionDetailScreen', { publicacion: parseClass4Navigation(publicacion) })}
                                            style={publicacionStyles.touchable}>
                                            <View style={{ flexDirection: "row" }}>
                                                <View style={publicacionStyles.cardLeft}>
                                                    <Text style={publicacionStyles.date}>{moment(publicacion.date).format('DD/MM/YYYY')}</Text>
                                                    <Text style={publicacionStyles.title}>{publicacion.title}</Text>
                                                </View>
                                                <View style={publicacionStyles.cardRight}>
                                                    <Icon name="chevron-right" size={35}></Icon>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Card>
                                ))}
                            </View>
                        ) : (
                                !this.state.loading && (
                                    <Text>
                                        No se han encontrado publicaciones
                                    </Text>
                                )
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}