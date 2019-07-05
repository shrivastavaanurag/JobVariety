import React, {Component} from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    NetInfo,
    Platform,
    ScrollView,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Globals from "../constants/Globals";
import Logo from "../components/Logo";
import TextViewBold from "../components/customTextViews/TextViewBold";
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import {Actions} from "react-native-router-flux";

export default class ForgotPassword extends Component {

    backButtonClicked = () => {
        Actions.pop();
    }

    submitClicked = () => {
        console.log("Submit Clicked");
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (isConnected) {
                Actions.drawer();

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
                {text: 'Retry', onPress: () => this.loginClicked()},
            ],
            {cancelable: false}
        )
    };

    async componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>

                {Platform.OS === 'ios' ?
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                                    keyboardShouldPersistTaps='handled'>
                            <Logo/>
                            <TextViewBold FontColor={Globals.COLOR.LIGHTGRAY} FontSize={Globals.TEXT_SIZE.LARGE}
                                          value={Globals.TEXT_VALUES.FORGOT_PASSWORD} FontPaddingVertical={5}/>

                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="Enter Email Id"
                                           placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                           keyBoardType='email-address'
                                           returnKeyType='next'
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           autoCapitalize='none'
                                           onChangeText={(email) => this.setState({email})}
                                           onSubmitEditing={() => this.refs.txtPassword.focus()}/>

                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={{flex: 1, width: widthPercentageToDP('80%'), alignItems: 'center'}}
                                    activeOpacity={0.7}
                                    onPress={this.submitClicked}>
                                    <TextViewBold
                                        value='Submit'
                                        FontSize={Globals.TEXT_SIZE.MEDIUM} FontColor={Globals.COLOR.WHITE}
                                        FontPaddingVertical={7}
                                        FontPaddingHorizontal={8}
                                    />
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    : <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                                  keyboardShouldPersistTaps='handled'>

                        <Logo/>
                        <TextViewBold FontColor={Globals.COLOR.LIGHTGRAY} FontSize={Globals.TEXT_SIZE.LARGE}
                                      value={Globals.TEXT_VALUES.FORGOT_PASSWORD} FontPaddingVertical={5}/>

                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input}
                                       placeholder="Enter Email Id"
                                       placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                       keyBoardType='email-address'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       underlineColorAndroid="transparent"
                                       autoCapitalize='none'
                                       onChangeText={(email) => this.setState({email})}
                                       onSubmitEditing={() => this.refs.txtPassword.focus()}/>

                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={{flex: 1, width: widthPercentageToDP('80%'), alignItems: 'center'}}
                                activeOpacity={0.7}
                                onPress={this.submitClicked}>
                                <TextViewBold
                                    value='Submit'
                                    FontSize={Globals.TEXT_SIZE.MEDIUM} FontColor={Globals.COLOR.WHITE}
                                    FontPaddingVertical={7}
                                    FontPaddingHorizontal={8}
                                />
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                }

            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1, paddingVertical: 25,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: Globals.COLOR.WHITE
    },
    input: {
        flex: 1,
        paddingVertical: heightPercentageToDP(0.8),
        fontSize: Globals.TEXT_SIZE.MEDIUM
    },
    inputWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
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
};