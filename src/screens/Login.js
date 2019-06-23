import React, {Component} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import Globals from "../constants/Globals";
import Logo from "../components/Logo";
import LoginSignupForm from "../components/LoginSignupForm";
import TextViewBold from "../components/customTextViews/TextViewBold";

export default class Login extends Component {

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
                                          value={Globals.TEXT_VALUES.LOGIN} FontPaddingVertical={10}/>
                            <LoginSignupForm fromScreen="Login"
                                             buttonText="Login"
                                             haveaccount="Don't have an account?"
                                             signin=" Sign Up"
                                             orSignin="-- Or sign in with --"/>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    : <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                                  keyboardShouldPersistTaps='handled'>
                        <Logo/>
                        <LoginSignupForm fromScreen="Login"
                                         buttonText="Login"
                                         haveaccount="Don't have an account?"
                                         signin=" Sign Up"
                                         orSignin="-- Or sign in with --"/>
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