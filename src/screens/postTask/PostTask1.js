import * as React from 'react';
import {Platform, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";
import Globals from "../../constants/Globals";
import TextViewMedium from "../../components/customTextViews/TextViewMedium";
import BackGround from "../../components/BackGround";
import {Actions} from "react-native-router-flux";
import DetectDeviceService from "../../utils/DetectDeviceService";
import MenuIcon from '../../images/menuIcon.png';
import TextViewBold from "../../components/customTextViews/TextViewBold";

export default class PostTask1 extends React.Component {

    onNextClick = () => {
        Actions.postTask2();
    };


    render() {
        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Post Task'}
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

                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.wrapper}>
                                <TextViewMedium value={'What do you need done?'} FontColor={Globals.COLOR.DARKBLUE}
                                                FontSize={Globals.TEXT_SIZE.LARGE_2}
                                                FontTextAlignVertical={'center'} TextFlex={1}
                                                FontTextAlign={'left'} FontPaddingVertical={2}/>

                                <TextViewRegular
                                    value={'This will be the title of your task, eg. Please help move my sofa set.'}
                                    FontColor={Globals.COLOR.GREY}
                                    FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                    FontTextAlignVertical={'center'} TextFlex={1}
                                    FontTextAlign={'left'} FontPaddingVertical={2}/>

                            </View>
                            <View style={styles.wrapper}>
                                <TextViewMedium value={'What are the details?'} FontColor={Globals.COLOR.DARKBLUE}
                                                FontSize={Globals.TEXT_SIZE.LARGE_2}
                                                FontTextAlignVertical={'center'} TextFlex={1}
                                                FontTextAlign={'left'} FontPaddingVertical={2}/>

                                <TextViewRegular value={'Be as specific as you can about what needs doing'}
                                                 FontColor={Globals.COLOR.GREY}
                                                 FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                 FontTextAlignVertical={'center'} TextFlex={1}
                                                 FontTextAlign={'left'} FontPaddingVertical={2}/>

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
                                    value="Next"
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
    wrapper: {
        alignItems: 'flex-start',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        paddingBottom: 10,
        width: widthPercentageToDP(100)
    },
    input: {
        width: widthPercentageToDP(90),
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