import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
    ActivityIndicator,
    Alert,
    Image,
    NetInfo,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import CheckBox from 'react-native-check-box'
import TextViewBold from "./customTextViews/TextViewBold";
import TextViewMedium from "./customTextViews/TextViewMedium";
import Globals from "../constants/Globals";
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "./customTextViews/TextViewRegular";

import fbIcon from '../images/facebook_icon.png';
import googleIcon from '../images/g_plus.png';
import {Actions} from 'react-native-router-flux';

let func = require('../constants/toastFunction');
let alerts = require('../constants/alertFunction');

const _deviceType = Platform.select({
    ios: 'ios',
    android: 'Android',
});

export default class SignupForm extends Component {


    _loadInitialState = async () => {

    };

    signUpClicked = () => {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (isConnected) {
                alert('clicked');
            } else {
                this.notConnected();
            }
        });
    };

    notConnected = () => {
        Alert.alert(
            'Network Issue!',
            'It seems your device is not connected to the internet.',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Retry', onPress: () => this.signUpClicked()},
            ],
            {cancelable: false}
        )
    };

    _agreeTermsClicked = () => {
        alert('t&c clicked');
    };

    _AlreadyHaveAccount = () => {
        Actions.popTo('login');
    };

    _loginWithFacebook = () => {
        alert('fbclicked');
    };

    _loginWithGoogle = () => {
        alert('googlclicked');
    };


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            checked: false
        };

    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    componentWillMount() {

    }

    componentWillUnmount() {
    }

    isValid() {
        const {email, password} = this.state;
        let valid = false;

        if (email.length > 0 && password.length > 0) {
            valid = true;
        }

        if (email.length === 0) {
            this.setState({error: 'Please enter email address'});
        } else if (password.length === 0) {
            this.setState({error: 'Please enter password'});
        }
        return valid;
    }

    render() {

        if (this.state.isLoading) {
            return (<View style={{
                flexGrow: 1, backgroundColor: 'rgba(255,255,255, 0.2)', alignItems: 'center', justifyContent: 'center'
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

                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               placeholder="Username"
                               placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                               keyBoardType='email-address'
                               returnKeyType='next'
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               autoCapitalize='none'
                               onChangeText={(email) => this.setState({email})}
                               onSubmitEditing={() => this.refs.txtPassword.focus()}/>

                </View>

                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               placeholder="Password"
                               placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                               secureTextEntry
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               onChangeText={(password) => this.setState({password})}
                               ref={"txtPassword"}/>
                </View>


                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               placeholder="Confirm Password"
                               placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                               secureTextEntry
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               onChangeText={(password) => this.setState({password})}
                               ref={"txtPassword"}/>
                </View>

                <View style={styles.forgotPassContainer}>
                    <TouchableOpacity
                        style={{alignItems: 'flex-start', justifyContent: 'center'}}
                        activeOpacity={0.7}
                        onPress={this._agreeTermsClicked}>
                        <CheckBox
                            style={{flex: 1}}
                            onClick={() => {
                                this.setState({
                                    checked: !this.state.checked
                                })
                            }}
                            isChecked={this.state.checked}
                            rightTextStyle={{color: Globals.COLOR.DARKBLUE}}
                            rightTextView={<TextViewRegular value="I agree with privacy and policy"
                                                            FontColor={Globals.COLOR.LIGHTBLUE}/>}
                            checkBoxColor={Globals.COLOR.THEME_COLOR_BLUE}
                            checkedCheckBoxColor={Globals.COLOR.THEME_COLOR_BLUE}
                        />
                    </TouchableOpacity>

                </View>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={{flex: 1, width: widthPercentageToDP('78%'), alignItems: 'center'}}
                        activeOpacity={0.7}
                        onPress={this.signUpClicked}>
                        <TextViewBold
                            value={this.props.buttonText}
                            FontSize={Globals.TEXT_SIZE.MEDIUM} FontColor={Globals.COLOR.WHITE} FontPaddingVertical={7}
                            FontPaddingHorizontal={8}
                        />
                    </TouchableOpacity>

                </View>


                <View style={styles.orStyle}>
                    <TextViewRegular value={this.props.orSignin} FontSize={Globals.TEXT_SIZE.MEDIUM}
                                     FontColor={Globals.COLOR.DARKBLUE} FontTextAlign="center" FontPaddingVertical={10}
                                     FontPaddingHorizontal={0}/>
                </View>

                <View style={{flexDirection: 'row', marginTop: heightPercentageToDP(0.8),}}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this._loginWithFacebook}>
                        <Image source={fbIcon}
                               style={styles.socialNetworkIcon}
                        />
                    </TouchableOpacity>
                    <View style={{
                        borderWidth: 0.5,
                        borderColor: 'black',
                        margin: 10,
                    }}/>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this._loginWithGoogle}>
                        <Image source={googleIcon}
                               style={styles.socialNetworkIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.donthaveaccount}>
                    <TouchableOpacity
                        style={{alignItems: 'center', flexDirection: 'row'}}
                        activeOpacity={0.7}
                        onPress={this._AlreadyHaveAccount}>
                        <TextViewRegular value={this.props.haveaccount} FontSize={Globals.TEXT_SIZE.SMALL}
                                         FontColor={Globals.COLOR.GREY} FontTextAlign="center"
                                         FontPaddingHorizontal={0}/>
                        <TextViewMedium value={this.props.signin} FontSize={Globals.TEXT_SIZE.SMALL}
                                        FontColor={Globals.COLOR.THEME_COLOR_BLUE} FontTextAlign="center"
                                        FontPaddingHorizontal={0}/>
                    </TouchableOpacity>
                </View>


            </View>

        );
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('80%'),
        flexGrow: 1,
        alignItems: 'center', justifyContent: 'center',
    },
    inputWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1, paddingVertical: heightPercentageToDP(0.8), fontSize: Globals.TEXT_SIZE.MEDIUM
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
        width: widthPercentageToDP('80%'),
        marginTop: heightPercentageToDP(0.8),
        borderColor: "#f3f3f3",
        borderWidth: 1,
        borderRadius: 30,
        padding: 4
    },

    forgotPassContainer: {
        width: widthPercentageToDP('80%'),
        marginTop: heightPercentageToDP(0.8),
        marginBottom: heightPercentageToDP(0.8),
    },
    forgotPassText: {
        textAlign: 'center',
        color: '#000000',
        fontSize: Globals.TEXT_SIZE.SMALL
    },
    donthaveaccount: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: heightPercentageToDP(2.4),
    },

    orStyle: {
        flexDirection: 'row',
    },

    socialNetworkIcon: {
        height: widthPercentageToDP('12%'),
        width: widthPercentageToDP('12%'),
        marginHorizontal: 10
    }


});
