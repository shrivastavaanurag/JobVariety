import React, {Component} from 'react';
import {FlatList, Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Globals from "../constants/Globals";
import userImage from '../images/userProfileImage.png';
import shareImage from '../images/share.png';
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "../components/customTextViews/TextViewRegular";
import TextViewBold from "../components/customTextViews/TextViewBold";
import TextViewMedium from "../components/customTextViews/TextViewMedium";
import fbIcon from '../images/fbIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import linkdinIcon from '../images/linkedinIcon.png';
import calendarIcon from '../images/calendarIcon.png';
import mapIcon from '../images/mapIcon.png';
import {Actions} from 'react-native-router-flux';
import ActionBar from 'react-native-action-bar';
import MenuIcon from '../images/menuIcon.png';
import BackGround from "../components/BackGround";
import DetectDeviceService from "../utils/DetectDeviceService";
import dummyData from "../utils/dummyData";
import {Rating} from 'react-native-ratings';

export default class JobDetails extends Component {

    _makeOfferClicked = () => {
        Actions.makeOffer1();
    };
    itemClick = (item) => {

    };

    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
        };
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    async componentDidMount() {

    }

    render() {
        return (
            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Job Details'}
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
                    <View style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                                    keyboardShouldPersistTaps='handled'>

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
                                        <TextViewRegular value="Posted By" FontColor={Globals.COLOR.GREY}
                                                         FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={2}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'center'}/>
                                        <TextViewRegular value="Stephanie A" FontColor={Globals.COLOR.DARKBLUE}
                                                         FontSize={Globals.TEXT_SIZE.MEDIUM} FontPaddingVertical={2}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'center'}/>
                                        <View style={{
                                            flexDirection: 'row',
                                            height: heightPercentageToDP(4),
                                            alignItems: 'flex-end',
                                            marginLeft: 3
                                        }}>
                                            <TextViewRegular value="$50" FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                             FontSize={Globals.TEXT_SIZE.LARGE_2}
                                                             FontPaddingVertical={2}
                                                             FontPaddingHorizontal={2}
                                                             FontTextAlign='left' FontTextAlignVertical={'center'}/>
                                            <TextViewRegular value="Business Manager" FontColor={Globals.COLOR.GREY}
                                                             FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                             FontPaddingVertical={3}
                                                             FontPaddingHorizontal={2}
                                                             FontTextAlign='left' FontTextAlignVertical={'bottom'}/>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                                style={{
                                                    flex: 1,
                                                    width: widthPercentageToDP('25%'),
                                                    alignItems: 'center'
                                                }}
                                                activeOpacity={0.7}
                                                onPress={this._makeOfferClicked}>
                                                <TextViewBold
                                                    value="Make An Offer"
                                                    FontSize={Globals.TEXT_SIZE.EXTRA_SMALL}
                                                    FontColor={Globals.COLOR.WHITE}
                                                    FontPaddingVertical={7}
                                                    FontPaddingHorizontal={8}
                                                />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    height: 50,
                                    borderWidth: 0.5,
                                    borderColor: Globals.COLOR.THEME_COLOR_BLUE,
                                    marginLeft: 4, marginTop: 10
                                }}/>
                                <View style={{
                                    flexGrow: .5,
                                    flexDirection: 'column',
                                    marginLeft: 5
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center', justifyContent: 'flex-end',
                                        marginRight: 10
                                    }}>
                                        <Image source={shareImage}
                                               style={{
                                                   height: heightPercentageToDP(3),
                                                   width: heightPercentageToDP(3)
                                               }}/>
                                        <TextViewRegular value="Share" FontColor={Globals.COLOR.DARKBLUE}
                                                         FontSize={Globals.TEXT_SIZE.SMALL} FontPaddingVertical={3}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'top'}/>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center', justifyContent: 'flex-end',
                                        marginTop: 10, marginRight: 10
                                    }}>
                                        <Image source={fbIcon}
                                               style={{
                                                   height: heightPercentageToDP(3),
                                                   width: heightPercentageToDP(3),
                                                   padding: 10
                                               }}/>
                                        <Image source={twitterIcon}
                                               style={{
                                                   height: heightPercentageToDP(3),
                                                   width: heightPercentageToDP(3),
                                                   padding: 10
                                               }}/>
                                        <Image source={linkdinIcon}
                                               style={{
                                                   height: heightPercentageToDP(3),
                                                   width: heightPercentageToDP(3),
                                                   padding: 10
                                               }}/>
                                    </View>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row', flex: 1, marginTop: 10}}>
                                <View style={{
                                    flexGrow: .5, width: widthPercentageToDP(50),
                                    flexDirection: 'column', marginRight: 10,
                                    marginLeft: 5
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start', justifyContent: 'flex-start',
                                        marginRight: 10
                                    }}>
                                        <Image source={mapIcon}
                                               style={{
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
                                </View>
                                <View style={{
                                    flexGrow: .5, width: widthPercentageToDP(50),
                                    flexDirection: 'column',
                                    marginLeft: 5
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start', justifyContent: 'flex-start',

                                    }}>
                                        <Image source={calendarIcon}
                                               style={{
                                                   height: heightPercentageToDP(3),
                                                   width: heightPercentageToDP(3),
                                                   marginTop: 3
                                               }}/>
                                        <TextViewRegular value="Due Date" FontColor={Globals.COLOR.DARKBLUE}
                                                         FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontPaddingVertical={3}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'top'}/>
                                    </View>
                                    <View style={{flexDirection: 'column', marginLeft: heightPercentageToDP(3)}}>
                                        <TextViewRegular value="Tuesday, 11th june 2019" FontColor={Globals.COLOR.GREY}
                                                         FontSize={Globals.TEXT_SIZE.SMALL_2} FontPaddingVertical={3}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'center'}/>
                                        <TextViewRegular value="Any time" FontColor={Globals.COLOR.GREY}
                                                         FontSize={Globals.TEXT_SIZE.SMALL_2} FontPaddingVertical={3}
                                                         FontPaddingHorizontal={5}
                                                         FontTextAlign='left' FontTextAlignVertical={'center'}/>
                                    </View>
                                </View>
                            </View>

                            <View style={{borderBottomColor: Globals.COLOR.LIGHTGRAY, borderBottomWidth: 1}}>
                                <TextViewMedium FontPaddingHorizontal={15} FontTextAlign="left" FontPaddingVertical={5}
                                                value="Job Description" FontColor={Globals.COLOR.DARKBLUE}
                                                FontSize={Globals.TEXT_SIZE.LARGE_2}/>

                                <TextViewRegular FontPaddingHorizontal={15}
                                                 FontTextAlign="left" FontPaddingVertical={5}
                                                 value="lorem ipsum dollor sit dude man wth have fun in the city make it simple as possible no worries aapki najro ne samjha chutiya etc etc, this is test text only no sapmple hdsk hutiye"
                                                 FontColor={Globals.COLOR.GREY} FontSize={Globals.TEXT_SIZE.SMALL}/>
                            </View>

                            <View style={{
                                borderBottomColor: Globals.COLOR.LIGHTGRAY,
                                borderBottomWidth: 1,
                                marginTop: 10,
                                paddingBottom: 10
                            }}>
                                <TextViewMedium FontPaddingHorizontal={15} FontTextAlign="left"
                                                FontPaddingVertical={5}
                                                value="Ask Questions" FontColor={Globals.COLOR.DARKBLUE}
                                                FontSize={Globals.TEXT_SIZE.LARGE_2}/>
                            </View>


                            <View style={styles.submitButtonContainer}>
                                <TouchableOpacity
                                    style={{
                                        borderColor: "#f3f3f3",
                                        borderWidth: 1,
                                        borderRadius: 30, backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
                                        padding: 4,
                                        width: Platform.isPad ? widthPercentageToDP('30%') : widthPercentageToDP('50%'),
                                        alignItems: 'center'
                                    }}
                                    activeOpacity={0.7}
                                    onPress={this.loginClicked}>
                                    <TextViewBold
                                        value="Submit"
                                        FontSize={Globals.TEXT_SIZE.MEDIUM_2} FontColor={Globals.COLOR.WHITE}
                                        FontPaddingVertical={7}
                                        FontPaddingHorizontal={8}
                                    />
                                </TouchableOpacity>

                            </View>


                            <View>


                                <View style={{
                                    borderBottomColor: Globals.COLOR.LIGHTGRAY,
                                    borderBottomWidth: 1,
                                    marginTop: 10,
                                    paddingBottom: 10
                                }}>
                                    <TextViewMedium FontPaddingHorizontal={15} FontTextAlign="left"
                                                    FontPaddingVertical={5}
                                                    value="Offers" FontColor={Globals.COLOR.DARKBLUE}
                                                    FontSize={Globals.TEXT_SIZE.LARGE_2}/>

                                </View>

                                <FlatList
                                    data={dummyData.JobDetailsDummyData}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({item}) =>

                                        <TouchableOpacity
                                            onPress={this.itemClick.bind(this, item)}>

                                            <View style={styles.MainContainer}>

                                                <Image source={item.image}
                                                       style={styles.image}/>

                                                <View style={{
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'flex-start',
                                                    paddingVertical: 10,
                                                    flexGrow: 0.5,
                                                    width: widthPercentageToDP(35)
                                                }}>

                                                    <TextViewMedium value={item.name} FontColor={Globals.COLOR.DARKBLUE}
                                                                    FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                                    FontPaddingVertical={0} FontTextAlign={'left'}/>

                                                    <Rating
                                                        type='star' style={{marginLeft: 10}}
                                                        ratingCount={5} readonly={true}
                                                        imageSize={20} startingValue={item.ratings}
                                                        showRating={false} defaultRating={item.ratings}
                                                        onFinishRating={this.ratingCompleted}
                                                    />
                                                </View>

                                                <View style={{
                                                    flexDirection: 'column', paddingVertical: 10, flexGrow: 0.5,
                                                    width: widthPercentageToDP(40)
                                                }}>

                                                    <TextViewMedium value={'(' + item.offers + ')'}
                                                                    FontColor={Globals.COLOR.GREY}
                                                                    FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                                    FontPaddingVertical={0} FontTextAlign={'left'}/>

                                                    <TextViewMedium value={item.comp_rate}
                                                                    FontColor={Globals.COLOR.DARKBLUE}
                                                                    FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                                    FontPaddingVertical={0} FontTextAlign={'left'}/>

                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    }
                                    keyExtractor={item => item.id.toString()}
                                />


                            </View>


                        </ScrollView>
                    </View>
                </View>
            </BackGround>
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    container: {
        flex: 1, paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.WHITE
    },
    headerContainer: {
        flexDirection: 'row', alignItems: 'flex-start', width: widthPercentageToDP(100)
    },
    image: {
        height: heightPercentageToDP(7),
        width: heightPercentageToDP(7), margin: 10
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
        width: Platform.isPad ? widthPercentageToDP('20%') : widthPercentageToDP('25%'),
        marginTop: 10,
        borderColor: "#f3f3f3",
        borderWidth: 1,
        borderRadius: 30,
        padding: 4
    },

    submitButtonContainer: {
        alignItems: 'center', padding: 10,
        justifyContent: 'center',
        width: widthPercentageToDP(100),
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
    MainContainer: {
        flex: 1, flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },

});