import * as React from 'react';
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";
import Globals from "../../constants/Globals";
import BackGround from "../../components/BackGround";
import DetectDeviceService from "../../utils/DetectDeviceService";
import MenuIcon from '../../images/menuIcon.png';
import TextViewBold from "../../components/customTextViews/TextViewBold";
import {Actions} from 'react-native-router-flux';
import userImage from '../../images/userProfileImage.png';
import getPaid from '../../images/get_paid.png';

export default class PreviewOffer extends React.Component {

    _onSubmit = () => {
        Actions.popTo('jobDetails');
    };


    render() {
        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Preview Offer'}
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

                        <View style={styles.headerContainer}>
                            <View
                                style={{flexGrow: .5, flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10}}>
                                <Image source={userImage} style={styles.image}/>

                                <View style={{flexDirection: 'column', margin: 10}}>

                                    <TextViewRegular value="Stephanie A" FontColor={Globals.COLOR.DARKBLUE}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={2}
                                                     FontPaddingHorizontal={5}
                                                     FontTextAlign='left' FontTextAlignVertical={'bottom'}/>
                                    <TextViewRegular value="Business Manager" FontColor={Globals.COLOR.GREY}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM} FontPaddingVertical={2}
                                                     FontPaddingHorizontal={5}
                                                     FontTextAlign='left' FontTextAlignVertical={'bottom'}/>
                                </View>
                            </View>

                            <View style={{flexGrow: .5, flexDirection: 'column', paddingHorizontal: 10, margin: 10}}>
                                <View style={{flexDirection: 'column', alignItems: 'flex-end', marginLeft: 3}}>
                                    <TextViewRegular value="Total" FontColor={Globals.COLOR.GREY}
                                                     FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={2}
                                                     FontPaddingHorizontal={2}
                                                     FontTextAlign='center' FontTextAlignVertical={'center'}/>
                                    <TextViewRegular value="$50" FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                     FontSize={Globals.TEXT_SIZE.LARGE} FontPaddingVertical={2}
                                                     FontPaddingHorizontal={2}
                                                     FontTextAlign='center' FontTextAlignVertical={'center'}/>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'space-around',
                            paddingHorizontal: 10,
                            marginTop: 10
                        }}>
                            <TextViewRegular value={'Bronze service fee'} FontTextAlign={'left'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontColor={Globals.COLOR.GREY}
                                             FontPaddingVertical={5}/>
                            <TextViewRegular value={'-$6.00'} FontTextAlign={'right'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontColor={Globals.COLOR.GREY}
                                             FontPaddingVertical={5}/>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'space-around',
                            paddingHorizontal: 10
                        }}>
                            <TextViewRegular value={'GST'} FontTextAlign={'left'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontColor={Globals.COLOR.GREY}
                                             FontPaddingVertical={5}/>
                            <TextViewRegular value={'-$.60'} FontTextAlign={'right'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontColor={Globals.COLOR.GREY}
                                             FontPaddingVertical={5}/>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'space-around',
                            paddingHorizontal: 10
                        }}>
                            <TextViewRegular value="You'll receive" FontTextAlign={'left'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.LARGE_2} FontColor={Globals.COLOR.DARKBLUE}
                                             FontPaddingVertical={15}/>
                            <TextViewRegular value={'-$23.40'} FontTextAlign={'right'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.LARGE_2}
                                             FontColor={Globals.COLOR.THEME_COLOR_BLUE} FontPaddingVertical={15}/>
                        </View>

                        <TextViewRegular
                            value="Airtasker automatically includes a service free to cover variable insurance and transaction cost"
                            FontTextAlign={'left'} TextFlex={1} FontSize={Globals.TEXT_SIZE.MEDIUM}
                            FontColor={Globals.COLOR.GREY} FontPaddingVertical={15} FontPaddingHorizontal={20}/>


                        <View style={{
                            flexGrow: .5,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            marginLeft: 10,
                            marginRight: 10
                        }}>
                            <Image source={getPaid} style={styles.image}/>

                            <View style={{flexDirection: 'column', marginRight: 10}}>

                                <TextViewRegular value="Get paid securely" FontColor={Globals.COLOR.DARKBLUE}
                                                 FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={2}
                                                 FontPaddingHorizontal={5}
                                                 FontTextAlign='left' FontTextAlignVertical={'bottom'}/>
                                <TextViewRegular value="Task funds are held securely until the task is completed."
                                                 FontColor={Globals.COLOR.GREY} TextFlex={1}
                                                 FontSize={Globals.TEXT_SIZE.MEDIUM} FontPaddingVertical={2}
                                                 FontPaddingHorizontal={5}
                                                 FontTextAlign='left' FontTextAlignVertical={'bottom'}/>
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
                                onPress={this._onSubmit}>
                                <TextViewBold
                                    value="Submit"
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
        alignItems: 'center',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
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
    },
    image: {
        height: heightPercentageToDP(7.5),
        width: heightPercentageToDP(7.5), margin: 10
    },
    headerContainer: {
        flexDirection: 'row', alignItems: 'flex-start', width: widthPercentageToDP(100)
    },
});