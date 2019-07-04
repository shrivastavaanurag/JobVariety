import * as React from 'react';
import {Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
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


import {RadioButton} from 'react-native-paper';

const dummyText = "Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer.";
const finalPayment = "Final payment will be agreed later";

export default class PostTask3 extends React.Component {

    _getOffers = () => {
        Actions.postTask4();
    };

    state = {
        value: 'total',
        amount: 0
    };

    constructor(props) {
        super(props);

    }

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

                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>

                            <View style={styles.wrapper}>
                                <TextViewMedium value={'What is your budget?'} FontColor={Globals.COLOR.DARKBLUE}
                                                FontSize={Globals.TEXT_SIZE.LARGE_2}
                                                FontTextAlignVertical={'center'} TextFlex={1}
                                                FontTextAlign={'left'} FontPaddingVertical={2}/>

                                <TextViewRegular
                                    value={dummyText}
                                    FontColor={Globals.COLOR.GREY}
                                    FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                    FontTextAlignVertical={'center'} TextFlex={1}
                                    FontTextAlign={'left'} FontPaddingVertical={2}/>

                            </View>
                            <RadioButton.Group
                                onValueChange={value => this.setState({value})}
                                value={this.state.value}
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: widthPercentageToDP(100)
                                }}>

                                    <View style={{
                                        flexGrow: 0.5,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                        <RadioButton value="total" uncheckedColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                     color={Globals.COLOR.DARKBLUE}/>
                                        <TextViewMedium FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingHorizontal={3}
                                                        FontTextAlign={'center'} FontColor={Globals.COLOR.BLACK}
                                                        value="Total" FontPaddingVertical={0}/>
                                    </View>

                                    <View style={{
                                        flexGrow: 0.5,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                        <RadioButton value="hourlyRate" uncheckedColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                     color={Globals.COLOR.DARKBLUE}/>
                                        <TextViewMedium FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingHorizontal={3}
                                                        FontTextAlign={'center'} FontColor={Globals.COLOR.BLACK}
                                                        value="Hourly rate" FontPaddingVertical={0}/>
                                    </View>

                                </View>
                            </RadioButton.Group>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <TextViewRegular value={'$'} FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                 FontSize={Globals.TEXT_SIZE.LARGE}/>
                                <View style={styles.inputWrapper}>
                                    <TextInput style={styles.input}
                                               placeholder="00"
                                               placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                               autoCorrect={false}
                                               underlineColorAndroid="transparent"
                                               onChangeText={(amount) => this.setState({amount})}
                                               keyboardType={'numeric'}
                                    />
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'space-around',
                                paddingHorizontal: 10,
                                marginTop: 15
                            }}>
                                <TextViewRegular value="ESTIMATED BUDGET" FontTextAlign={'left'} TextFlex={.7}
                                                 FontSize={Globals.TEXT_SIZE.LARGE_2} FontColor={Globals.COLOR.DARKBLUE}
                                                 FontPaddingVertical={5}/>
                                <TextViewRegular value={'$ ' + this.state.amount} FontTextAlign={'right'} TextFlex={.3}
                                                 FontSize={Globals.TEXT_SIZE.LARGE_2}
                                                 FontColor={Globals.COLOR.THEME_COLOR_BLUE} FontPaddingVertical={5}/>
                            </View>
                            <TextViewRegular
                                value={finalPayment}
                                FontColor={Globals.COLOR.GREY} FontPaddingHorizontal={20}
                                FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                FontTextAlignVertical={'center'} TextFlex={1}
                                FontTextAlign={'left'} FontPaddingVertical={2}/>

                        </View>

                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            marginTop: 25
                        }}>
                            <TouchableOpacity
                                style={styles.nextButtonContainer}
                                activeOpacity={0.7}
                                onPress={this._getOffers}>
                                <TextViewBold
                                    value="Get Offers"
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
    inputWrapper: {
        alignItems: 'center',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
    },
    input: {
        flex: 1,
        paddingVertical: heightPercentageToDP(0.8),
        fontSize: Globals.TEXT_SIZE.LARGE,
        color: Globals.COLOR.THEME_COLOR_BLUE
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