import React, {Component} from 'react';
import {Image, View} from 'react-native';
import applogo from '../images/app-logo.png';
import {widthPercentageToDP} from '../utils/responsive';
import Globals from "../constants/Globals";

export default class SplashScreen extends Component {
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('result')
                },
                2000
            )
        )
    };

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            // this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Image
                    style={styles.stretch}
                    source={applogo}
                />
            </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.WHITE
    },

    stretch: {
        height: widthPercentageToDP(50),
        width: widthPercentageToDP(50)
    }
};