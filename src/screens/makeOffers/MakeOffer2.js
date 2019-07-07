import * as React from 'react';
import {Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";
import Globals from "../../constants/Globals";
import BackGround from "../../components/BackGround";
import {Actions} from "react-native-router-flux";
import DetectDeviceService from "../../utils/DetectDeviceService";
import MenuIcon from '../../images/menuIcon.png';
import TextViewBold from "../../components/customTextViews/TextViewBold";

export default class MakeOffer2 extends React.Component {

    onNextClick = () => {
        Actions.previewOffer();
    };


    render() {
        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Make Your Offers'}
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

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 10
                        }}>
                            <TextViewRegular FontPaddingVertical={3}
                                             value={'Why are you the best person for this task?'}
                                             FontColor={Globals.COLOR.DARKBLUE} FontSize={Globals.TEXT_SIZE.LARGE_2}/>
                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="Comment..."
                                           multiline={true}
                                           numberOfLines={4}
                                           placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           onChangeText={(comment) => this.setState({comment})}
                                />
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'space-around',
                            paddingHorizontal: 10,
                            marginTop: 20
                        }}>
                            <TextViewRegular value="You'll receive" FontTextAlign={'left'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.LARGE_2} FontColor={Globals.COLOR.DARKBLUE}
                                             FontPaddingVertical={15}/>
                            <TextViewRegular value={'-$23.40'} FontTextAlign={'right'} TextFlex={.5}
                                             FontSize={Globals.TEXT_SIZE.LARGE_2}
                                             FontColor={Globals.COLOR.THEME_COLOR_BLUE} FontPaddingVertical={15}/>
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
    }
});