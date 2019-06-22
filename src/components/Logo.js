import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import logoImg from '../images/app-logo.png';
import {widthPercentageToDP} from "../utils/responsive";

export default class Logo extends Component {
    render() {
        return (<View style={styles.container}>
            <Image source={logoImg}
                   style={styles.image}
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center', justifyContent: 'center',
    },

    image: {
        height: widthPercentageToDP(50),
        width: widthPercentageToDP(50)
    }
});
