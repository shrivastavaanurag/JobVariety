import * as React from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "../components/customTextViews/TextViewRegular";
import Globals from "../constants/Globals";
import BackGround from "../components/BackGround";
import {Actions} from "react-native-router-flux";
import DetectDeviceService from "../utils/DetectDeviceService";
import MenuIcon from '../images/menuIcon.png';
import TextViewBold from "../components/customTextViews/TextViewBold";
import Logo from "../components/Logo";

export default class AboutUs extends React.Component {

    render() {
        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'About Us'}
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

                            <Logo/>
                            <TextViewBold value={'Lorem ipsum is simply dummy text of this app'}
                                          FontSize={Globals.TEXT_SIZE.LARGE_2}
                                          FontColor={Globals.COLOR.DARKBLUE} FontPaddingVertical={5}
                                          FontPaddingHorizontal={20} FontTextAlign={'center'}/>

                            <TextViewRegular
                                value={'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, ' +
                                'Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern in tis boo and the lol waht is this no api is calling in this app sample app only and the sample text it is. Lorem ipsum is simply dummy text of this app, '}
                                FontSize={Globals.TEXT_SIZE.SMALL}
                                FontColor={Globals.COLOR.GREY} FontPaddingVertical={5}
                                FontPaddingHorizontal={10} FontTextAlign={'left'} FontTextAlignVertical={'center'}/>

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
        alignItems: 'center',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,

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