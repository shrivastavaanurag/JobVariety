import * as React from 'react';
import {Dimensions, Image, Platform, ScrollView, StyleSheet, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "../components/customTextViews/TextViewRegular";
import Globals from "../constants/Globals";
import TextViewMedium from "../components/customTextViews/TextViewMedium";
import BackGround from "../components/BackGround";
import {Actions} from "react-native-router-flux";
import DetectDeviceService from "../utils/DetectDeviceService";
import MenuIcon from '../images/menuIcon.png';
import userImage from '../images/userProfileImage.png';
import mapIcon from '../images/mapIcon.png';
import payment_verified_icon from '../images/payment_verified_icon.png';
import email_verified_icon from '../images/email_verified_icon.png';
import phone_verified_icon from '../images/phone_verified_icon.png';
import {Rating} from 'react-native-ratings';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AsTasker from "./publicProfile/AsTasker";
import AsPoster from "./publicProfile/AsPoster";
import ReviewAsTasker from "./publicProfile/ReviewAsTasker";
import ReviewAsPoster from "./publicProfile/ReviewAsPoster";

export default class PublicProfile extends React.Component {

    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'As a Tasker'},
            {key: 'second', title: 'As a Poster'}
        ],
    };

    stateReview = {
        index: 0,
        routes: [
            {key: 'first', title: 'As a Tasker'},
            {key: 'second', title: 'As a Poster'}
        ],
    };

    constructor(props) {
        super(props);

    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {

        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Public Profile'}
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
                            paddingVertical: heightPercentageToDP(2)
                        }}>
                            <View style={styles.headerContainer}>
                                <View style={{
                                    flexGrow: .5,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginLeft: 10
                                }}>
                                    <Image source={userImage}
                                           style={styles.image}/>

                                    <View style={{flexDirection: 'column'}}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                            <TextViewRegular value="Stephanie A" FontColor={Globals.COLOR.DARKBLUE}
                                                             FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                             FontPaddingVertical={2}
                                                             FontPaddingHorizontal={5}
                                                             FontTextAlign='left' FontTextAlignVertical={'center'}/>

                                            <View style={{flexDirection: 'column',}}>
                                                <TextViewRegular value="Member since"
                                                                 FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                                 FontSize={Globals.TEXT_SIZE.EXTRA_SMALL_2}
                                                                 FontPaddingVertical={2}
                                                                 FontPaddingHorizontal={5}
                                                                 FontTextAlign='right'
                                                                 FontTextAlignVertical={'center'}/>
                                                <TextViewRegular value="2nd July 2019"
                                                                 FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                                 FontSize={Globals.TEXT_SIZE.EXTRA_SMALL_2}
                                                                 FontPaddingVertical={2}
                                                                 FontPaddingHorizontal={5}
                                                                 FontTextAlign='right'
                                                                 FontTextAlignVertical={'center'}/>
                                            </View>
                                        </View>
                                        <TextViewRegular value="Last seen 1 min ago..."
                                                         FontColor={Globals.COLOR.DARKBLUE}
                                                         FontSize={Globals.TEXT_SIZE.EXTRA_SMALL_2}
                                                         FontPaddingVertical={2}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'center'}/>

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start', justifyContent: 'flex-start',
                                            marginRight: 10
                                        }}>
                                            <Image source={mapIcon}
                                                   style={{
                                                       height: heightPercentageToDP(2),
                                                       width: heightPercentageToDP(2),
                                                       marginTop: 3
                                                   }}/>
                                            <TextViewRegular value="A/651, Adelaide SA, 8000 / 8001"
                                                             FontColor={Globals.COLOR.DARKBLUE}
                                                             FontSize={Globals.TEXT_SIZE.SMALL} FontPaddingVertical={3}
                                                             noOfLines={3}
                                                             FontPaddingHorizontal={5}
                                                             FontTextAlign='left' FontTextAlignVertical={'top'}/>
                                        </View>


                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flexDirection: 'row',
                                marginLeft: 20,
                                marginTop: 20,
                                width: widthPercentageToDP(100),
                                justifyContent: 'space-between'
                            }}>
                                <View style={{width: widthPercentageToDP(50), justifyContent: 'flex-start'}}>
                                    <View style={{width: widthPercentageToDP(50), flexDirection: 'row'}}>

                                        <View style={{backgroundColor: Globals.COLOR.ORENGE_COLOR}}>
                                            <TextViewRegular value={'4.5'} FontPaddingHorizontal={4}
                                                             FontSize={Globals.TEXT_SIZE.EXTRA_SMALL}
                                                             FontColor={Globals.COLOR.WHITE} FontPaddingVertical={2}/>
                                        </View>
                                        <Rating
                                            type='star' style={{marginLeft: 10}}
                                            ratingCount={5} readonly={true}
                                            imageSize={heightPercentageToDP(2)} startingValue={5}
                                            showRating={false} defaultRating={5}
                                            onFinishRating={this.ratingCompleted}/>

                                        <TextViewRegular value={'25 reviews'} FontSize={Globals.TEXT_SIZE.EXTRA_SMALL}
                                                         FontPaddingVertical={2}/>
                                    </View>
                                    <TextViewRegular value={'100% Job Completed'}
                                                     FontSize={Globals.TEXT_SIZE.EXTRA_SMALL} FontPaddingHorizontal={20}
                                                     FontPaddingVertical={3} TextFlex={0} FontTextAlign={'left'}
                                                     FontColor={Globals.COLOR.THEME_COLOR_BLUE}/>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                    justifyContent: 'space-around',
                                    width: widthPercentageToDP(50)
                                }}>
                                    <Image source={phone_verified_icon}
                                           style={{
                                               height: heightPercentageToDP(2.5),
                                               width: heightPercentageToDP(2.5),
                                               padding: 10
                                           }}/>
                                    <Image source={email_verified_icon}
                                           style={{
                                               height: heightPercentageToDP(2.5),
                                               width: heightPercentageToDP(2.5),
                                               padding: 10
                                           }}/>
                                    <Image source={payment_verified_icon}
                                           style={{
                                               height: heightPercentageToDP(2.5),
                                               width: heightPercentageToDP(2.5),
                                               padding: 10
                                           }}/>
                                </View>
                            </View>

                            <View style={{width: widthPercentageToDP(100), flex: 1}}>
                                <TabView
                                    navigationState={this.state}
                                    renderScene={SceneMap({
                                        first: AsTasker,
                                        second: AsPoster
                                    })}
                                    onIndexChange={index => this.setState({index})}
                                    initialLayout={{width: Dimensions.get('window').width}}
                                    renderTabBar={props =>
                                        <TabBar
                                            {...props}
                                            indicatorStyle={{backgroundColor: Globals.COLOR.THEME_COLOR_BLUE}}
                                            style={{
                                                backgroundColor: Globals.COLOR.WHITE,
                                                width: '100%',
                                                height: heightPercentageToDP(5)
                                            }}
                                            labelStyle={{
                                                color: Globals.COLOR.DARKBLUE, fontSize: Globals.TEXT_SIZE.SMALL_2,
                                                flex: 1, width: '100%',
                                            }}
                                        />
                                    }

                                />
                            </View>

                            {/* REVIEW */}
                            <View style={{width: widthPercentageToDP(100), flex: 1, marginTop: 20}}>

                                <TextViewMedium value={'Reviews'} FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                FontColor={Globals.COLOR.DARKBLUE}
                                                FontTextAlign={'left'} FontPaddingHorizontal={15}
                                                TextFlex={1}/>
                                <TabView
                                    navigationState={this.stateReview}
                                    renderScene={SceneMap({
                                        first: ReviewAsTasker,
                                        second: ReviewAsPoster
                                    })}
                                    onIndexChange={index => this.setState({index})}
                                    initialLayout={{width: Dimensions.get('window').width}}
                                    renderTabBar={props =>
                                        <TabBar
                                            {...props}
                                            indicatorStyle={{backgroundColor: Globals.COLOR.THEME_COLOR_BLUE}}
                                            style={{
                                                backgroundColor: Globals.COLOR.WHITE,
                                                width: '100%',
                                                height: heightPercentageToDP(5)
                                            }}
                                            labelStyle={{
                                                color: Globals.COLOR.DARKBLUE, fontSize: Globals.TEXT_SIZE.SMALL_2,
                                                flex: 1, width: '100%',
                                            }}
                                        />
                                    }

                                />
                            </View>

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
    headerContainer: {
        flexDirection: 'row', alignItems: 'flex-start', width: widthPercentageToDP(100)
    },
    image: {
        height: heightPercentageToDP(7),
        width: heightPercentageToDP(7), margin: 10
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
    },

});