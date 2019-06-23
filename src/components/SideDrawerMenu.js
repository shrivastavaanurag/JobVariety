/*
    SideBar.js

    Component used to render contents of SideBar
*/

import React from 'react';
import {View} from 'react-native';

const {
    modalBackground,
    topContentStyle,
    bottomContentStyle
} = styles;

class SideDrawerMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <View
                elevation={5}
                style={modalBackground}
            >

            </View>
        );
    }
}

export default SideDrawerMenu;