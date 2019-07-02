import React from 'react';
import {Platform, StatusBar, StyleSheet, View,} from 'react-native';
import Globals from "../constants/Globals";
import {ifIphoneX} from "../utils/iPhoneXHelper";

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default class BackGround extends React.Component {

    constructor(props) {
        super(props);

        if (Platform.OS === 'ios') {
            this.state = {statusbar: true}
        } else {
            this.state = {statusbar: true}
        }
    }

    render() {

        return (

            <View style={styles.container}>

                <MyStatusBar
                    backgroundColor={Platform.OS === 'ios' ? Globals.COLOR.WHITE : Globals.COLOR.WHITE}
                    barStyle="dark-content"/>

                <View style={styles.content}>
                    {this.props.children}
                </View>

            </View>

        );
    }

}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (ifIphoneX() ? 50 : 20) : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: Platform.OS === 'ios' ? Globals.COLOR.WHITE : Globals.COLOR.THEME_COLOR_BLUE,
        height: APPBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});
