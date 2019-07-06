import * as React from 'react';
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";
import Globals from "../../constants/Globals";
import TextViewMedium from "../../components/customTextViews/TextViewMedium";
import BackGround from "../../components/BackGround";
import {Actions} from "react-native-router-flux";
import DetectDeviceService from "../../utils/DetectDeviceService";
import MenuIcon from '../../images/menuIcon.png';
import inPerson from '../../images/in_person.png';
import online from '../../images/onine.png';
import TextViewBold from "../../components/customTextViews/TextViewBold";
import mapIcon from '../../images/mapIcon.png';
import calendarIcon from '../../images/calendarIcon.png';


import {RadioButton} from 'react-native-paper';

export default class PostTask2 extends React.Component {

    onNextClick = () => {
        Actions.postTask3();
    };

    state = {
        value: 'inPerson',
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

                            <TextViewMedium value={'Where do you need it done?'} FontColor={Globals.COLOR.DARKBLUE}
                                            FontSize={Globals.TEXT_SIZE.LARGE_2}
                                            FontTextAlignVertical={'center'} TextFlex={1}
                                            FontTextAlign={'left'} FontPaddingVertical={2}/>

                            <RadioButton.Group
                                onValueChange={value => this.setState({value})}
                                value={this.state.value}
                            >
                                <View style={{
                                    paddingVertical: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: widthPercentageToDP(100)
                                }}>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={{width: widthPercentageToDP(25), height: widthPercentageToDP(25)}}
                                               source={inPerson}/>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <RadioButton value="inPerson"
                                                         uncheckedColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                         color={Globals.COLOR.DARKBLUE}/>
                                            <TextViewMedium FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                            FontPaddingHorizontal={3} FontTextAlign={'center'}
                                                            FontColor={Globals.COLOR.BLACK} value="In Person"
                                                            FontPaddingVertical={0}/>
                                        </View>
                                        <TextViewRegular FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingHorizontal={3}
                                                         FontTextAlign={'center'} FontColor={Globals.COLOR.GREY}
                                                         value="Select this if you need the tasker physically there."
                                                         FontPaddingVertical={3}/>
                                    </View>
                                    <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={{width: widthPercentageToDP(25), height: widthPercentageToDP(25)}}
                                               source={online}/>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <RadioButton value="online" uncheckedColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                         color={Globals.COLOR.DARKBLUE}/>
                                            <TextViewMedium FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                            FontPaddingHorizontal={3} FontTextAlign={'center'}
                                                            FontColor={Globals.COLOR.BLACK} value="Online"
                                                            FontPaddingVertical={0}/>
                                        </View>
                                        <TextViewRegular FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingHorizontal={3}
                                                         FontTextAlign={'center'} FontColor={Globals.COLOR.GREY}
                                                         value="Select this if the tasker can do it from home."
                                                         FontPaddingVertical={3}/>
                                    </View>
                                </View>
                            </RadioButton.Group>


                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                marginLeft: 10
                            }}>
                                <Image source={mapIcon} style={{
                                    height: heightPercentageToDP(3),
                                    width: heightPercentageToDP(3),
                                    marginTop: 3
                                }}/>
                                <TextViewRegular value="A/651, Adelaide SA, 8000 / 8001"
                                                 FontColor={Globals.COLOR.DARKBLUE}
                                                 FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={3}
                                                 noOfLines={3}
                                                 FontPaddingHorizontal={5}
                                                 FontTextAlign='left' FontTextAlignVertical={'top'}/>
                            </View>

                            <TextViewMedium value={'Where do you need it done?'} FontColor={Globals.COLOR.DARKBLUE}
                                            FontSize={Globals.TEXT_SIZE.LARGE_2}
                                            FontTextAlignVertical={'center'} TextFlex={1}
                                            FontTextAlign={'left'} FontPaddingVertical={10}/>


                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={this.onNextClick}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginLeft: 10
                                }}>
                                    <Image source={calendarIcon} style={{
                                        height: heightPercentageToDP(3),
                                        width: heightPercentageToDP(3),
                                        marginTop: 3
                                    }}/>
                                    <TextViewRegular value="Select Date" FontColor={Globals.COLOR.DARKBLUE}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={3}
                                                     FontPaddingHorizontal={5}
                                                     FontTextAlign='left' FontTextAlignVertical={'top'}/>
                                </View>
                            </TouchableOpacity>


                        </View>

                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            marginTop: heightPercentageToDP(3)
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