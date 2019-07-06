import * as React from 'react';
import {Platform, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "../components/customTextViews/TextViewRegular";
import Globals from "../constants/Globals";
import BackGround from "../components/BackGround";
import {ActionConst, Actions} from "react-native-router-flux";
import DetectDeviceService from "../utils/DetectDeviceService";
import MenuIcon from '../images/menuIcon.png';
import TextViewBold from "../components/customTextViews/TextViewBold";

export default class Settings extends React.Component {

    onNextClick = () => {
        // Actions.previewOffer();
    };

    _profileSettings = () => {
        // Actions.previewOffer();
    };

    _changePassword = () => {
        // Actions.previewOffer();
    };

    _notificationSettings = () => {
        // Actions.previewOffer();
    };

    _help = () => {
        Actions.help({type: ActionConst.REPLACE});
    };


    render() {
        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Settings'}
                        backgroundColor={Globals.COLOR.WHITE}
                        onLeftPress={() => Actions.drawerOpen()}
                        leftIconImage={MenuIcon}
                        leftIconImageStyle={styles.leftIconStyle}
                        rightIconImageStyle={styles.rightIconStyle}
                        titleContainerStyle={styles.leftTitleStyle}
                        titleStyle={{
                            fontSize: Platform.isPad ? Globals.TEXT_SIZE.SMALL_2 : Globals.TEXT_SIZE.MEDIUM_2,
                            textAlign: 'center', color: Globals.COLOR.DARKBLUE
                        }}
                        leftIconContainerStyle={styles.leftIconStyle}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                                keyboardShouldPersistTaps='handled'>

                        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 5}}>
                            <View style={styles.inputWrapper}>
                                <TouchableOpacity
                                    style={{width: widthPercentageToDP(100)}}
                                    activeOpacity={0.7}
                                    onPress={this._profileSettings}>
                                    <TextViewRegular value={'Profile Settings'} FontColor={Globals.COLOR.GREY}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                     FontTextAlignVertical={'center'}
                                                     FontTextAlign={'left'} FontPaddingVertical={15}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TouchableOpacity
                                    style={{width: widthPercentageToDP(100)}}
                                    activeOpacity={0.7}
                                    onPress={this._changePassword}>
                                    <TextViewRegular value={'Change Password'} FontColor={Globals.COLOR.GREY}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                     FontTextAlignVertical={'center'}
                                                     FontTextAlign={'left'} FontPaddingVertical={15}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TouchableOpacity
                                    style={{width: widthPercentageToDP(100)}}
                                    activeOpacity={0.7}
                                    onPress={this._notificationSettings}>
                                    <TextViewRegular value={'Notification Settings'} FontColor={Globals.COLOR.GREY}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                     FontTextAlignVertical={'center'}
                                                     FontTextAlign={'left'} FontPaddingVertical={15}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TouchableOpacity
                                    style={{width: widthPercentageToDP(100)}}
                                    activeOpacity={0.7}
                                    onPress={this._help}>
                                    <TextViewRegular value={'Help'} FontColor={Globals.COLOR.GREY}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                     FontTextAlignVertical={'center'}
                                                     FontTextAlign={'left'} FontPaddingVertical={15}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            marginTop: 20
                        }}>
                            <TouchableOpacity
                                style={styles.nextButtonContainer}
                                activeOpacity={0.7}
                                onPress={this.onNextClick}>
                                <TextViewBold
                                    value="Save"
                                    FontSize={Globals.TEXT_SIZE.MEDIUM} FontColor={Globals.COLOR.WHITE}
                                    FontPaddingVertical={7}
                                    FontPaddingHorizontal={8}
                                />
                            </TouchableOpacity>

                        </View>

                    </ScrollView>
                </View>
            </BackGround>

        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
    actionBarStyle: {
        flexDirection: 'row',
        backgroundColor: Globals.COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        height: DetectDeviceService.isTablet ? heightPercentageToDP('5%') : heightPercentageToDP('6%'),
        paddingVertical: 5,
        borderBottomColor: Globals.COLOR.THEME_COLOR_BLUE,
        borderBottomWidth: 1,
        elevation: 10,
    },
    leftIconStyle: {
        padding: 10,
        alignItems: 'center',
        height: widthPercentageToDP('4%'),
        width: widthPercentageToDP('4%'),
        margin: 10,
        tintColor: Globals.COLOR.THEME_COLOR_BLUE
    },

    rightIconStyle: {
        padding: 10,
        alignItems: 'center',
        height: widthPercentageToDP('4%'), paddingRight: widthPercentageToDP('4%'),
        width: widthPercentageToDP('4%'),
        margin: 10
    },
    leftTitleStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', marginRight: widthPercentageToDP(10),
    },
    inputWrapper: {
        alignItems: 'flex-start',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        width: widthPercentageToDP(100),
    },
    input: {
        width: widthPercentageToDP(100),
        fontSize: Globals.TEXT_SIZE.MEDIUM_2,
        color: Globals.COLOR.GREY,
        textAlignVertical: 'top'
    },
    nextButtonContainer: {
        borderColor: "#f3f3f3",
        borderWidth: 1,
        borderRadius: 30, backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
        padding: 4,
        width: Platform.isPad ? widthPercentageToDP('25%') : widthPercentageToDP('45%'),
        alignItems: 'center'
    }
});