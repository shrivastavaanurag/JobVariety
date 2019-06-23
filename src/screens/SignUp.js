import React, {Component} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import Globals from "../constants/Globals";
import Logo from "../components/Logo";
import LoginSignupForm from "../components/LoginSignupForm";
import TextViewBold from "../components/customTextViews/TextViewBold";

export default class SignUp extends Component {

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
                                          value="Sign up" FontPaddingVertical={10}/>
                            <LoginSignupForm fromScreen="SignUp"
                                             buttonText="Sign Up"
                                             haveaccount="Already have an account?"
                                             signin=" Sign In"
                                             orSignin="-- Or sign up with --"/>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    : <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                                  keyboardShouldPersistTaps='handled'>
                        <Logo/>
                        <LoginSignupForm fromScreen="SignUp"
                                         buttonText="Sign Up"
                                         haveaccount="Already have an account?"
                                         signin=" Sign In"
                                         orSignin="-- Or sign up with --"/>
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
    }
};