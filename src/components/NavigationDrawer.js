import React, {Component} from 'react';
import Dimensions from 'Dimensions';

import PropTypes from 'prop-types';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewPropTypes,
} from 'react-native';

import Globals from "../constants/Globals";

import {ActionConst, Actions} from 'react-native-router-flux';

import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";

import SideMenuContent from "../utils/SideMenuContent";
import TextViewRegular from "./customTextViews/TextViewRegular";

import userImage from '../images/userProfileImage.png'
import TextViewMedium from "./customTextViews/TextViewMedium";

let func = require('../constants/toastFunction');

let username = '', fullname = '';
export default class NavigationDrawer extends Component {

    static propTypes = {
        name: PropTypes.string,
        sceneStyle: ViewPropTypes.style,
        title: PropTypes.string,
    };
    static contextTypes = {
        drawer: PropTypes.object,
    };

    renderSeparator = () => (<View
        style={styles.lineSeparator}
    />);

    renderSeparatorHorizontal = () => (<View
        style={{
            backgroundColor: 'transparent',
            width: 10,
        }}
    />);

    goToScreen = async (item) => {
        switch (item.name) {
            case 'Browse Task':
                Actions.browsTask({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
            case 'Logout':
                Actions.popTo('login');
                break;
            case 'Help':
                Actions.help({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
            case 'About Us':
                Actions.aboutus({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
            case 'Settings':
                Actions.settings({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
            case 'Post Task':
                Actions.postTask1({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
            case 'Payment Method':
                Actions.paymentMethod({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
            case 'Portfolio':
                Actions.portfolio({type: ActionConst.REPLACE});
                Actions.drawerClose();
                break;
        }
    };

    toogleDrawer = async () => {
        if (Actions.drawerOpen) {
            await Actions.drawerClose();
        }
    };

    _loadInitialState = async () => {

    };

    constructor() {
        super();
        this.state = {
            isLoading: false,
            itemList: [],
        };

    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    componentDidMount() {

    }

    render() {

        if (this.state.isLoading) {
            return (<View style={{
                flex: 1, backgroundColor: 'rgba(255,255,255, 0.2)', alignItems: 'center', justifyContent: 'center'
            }}>
                <ActivityIndicator
                    style={{opacity: this.state.isLoading ? 1.0 : 0.0}}
                    animating={true}
                    size="large" color="#FF00FF"
                />
            </View>);
        }

        return (

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 1}}
                            keyboardShouldPersistTaps='handled'>

                    <View style={styles.imageContainer}>

                        <View style={styles.currentUserImageContainer}>
                            <Image style={styles.currentUserProfileImage}
                                   source={userImage}
                            />
                        </View>
                        <View style={{padding: 3, flex: 1}}>

                            <TextViewMedium noOfLines={1} FontColor="#FFFFFF"
                                            value="Mark Brian" FontTextAlign='center'
                                            FontPaddingHorizontal={5} FontPaddingVertical={1} FontSize={
                                Platform.isPad ? Globals.TEXT_SIZE.MEDIUM : Globals.TEXT_SIZE.LARGE}/>
                            <TextViewRegular noOfLines={1} FontColor="#FFFFFF"
                                             value="Electrician 5 year exp." FontTextAlign='center'
                                             FontPaddingHorizontal={5} FontPaddingVertical={1} FontSize={
                                Platform.isPad ? Globals.TEXT_SIZE.SMALL : Globals.TEXT_SIZE.MEDIUM}/>
                        </View>

                    </View>

                    <FlatList
                        ItemSeparatorComponent={this.renderSeparator}
                        data={SideMenuContent.NAV_MENU_ITEMS}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>

                            <TouchableOpacity activeOpacity={0.7}
                                              onPress={this.goToScreen.bind(this, item)}>
                                <View style={styles.flatview}>
                                    <TextViewRegular noOfLines={1}
                                                     value={item.name}
                                                     FontColor={Globals.COLOR.DARKGRAY}
                                                     FontSize={Platform.isPad ? Globals.TEXT_SIZE.SMALL : Globals.TEXT_SIZE.MEDIUM}
                                                     FontPaddingVertical={8}
                                                     FontPaddingHorizontal={10}
                                                     FontTextAlign='left' FontTextAlignVertical={'center'}
                                                     TextFlex={1}
                                    />

                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.name}
                    />

                </ScrollView>
            </View>
        );
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1, height: DEVICE_HEIGHT,

    },
    imageContainer: {
        width: '100%',
        backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
        marginTop: -3,
        paddingTop: heightPercentageToDP(7),
        paddingBottom: heightPercentageToDP(2)
    },
    currentUserProfileImage: {
        height: widthPercentageToDP('20%'),
        width: widthPercentageToDP('20%'),
        borderRadius: widthPercentageToDP('20%') / 2
    },
    currentUserImageContainer: {
        flexDirection: 'row', justifyContent: 'center'
    },

    lineSeparator: {
        backgroundColor: Globals.COLOR.GREY,
        height: 0.5, width: widthPercentageToDP(65)
    },
    flatview: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10, paddingVertical: 8,
        backgroundColor: Globals.COLOR.WHITE,
    },

});
