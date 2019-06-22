import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Globals from "../constants/Globals";
import {heightPercentageToDP, widthPercentageToDP} from '../utils/responsive';
import logoImg from '../images/app-logo.png';

export default class Login extends Component {

    _forgotPasswordClicked = () => {
        alert('forgot password');
    };
    loginClicked = () => {
        alert('login clicked');
    };

    async componentDidMount() {

    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Image source={logoImg}
                       style={styles.image}
                />

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

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={{flex: 1, alignItems: 'center'}}
                        activeOpacity={0.7}
                        onPress={this.loginClicked}>
                        <Text style={{
                            flex: 1,
                            textAlign: 'center',
                            color: Globals.COLOR.WHITE,
                            justifyContent: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>LOGIN</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.donthaveaccount}>
                    <TouchableOpacity
                        style={{alignItems: 'center', flexDirection: 'row'}}
                        activeOpacity={0.7}
                        onPress={this._forgotPasswordClicked}>
                        <Text style={{

                            textAlign: 'center',
                            color: Globals.COLOR.GREY,
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}>Don't have an account? </Text>
                        <Text style={{

                            textAlign: 'center',
                            color: Globals.COLOR.THEME_COLOR_BLUE,
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}>Sign-Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.WHITE
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },

    inputWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: "#707070",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginHorizontal: 30
    },

    input: {
        flex: 1, paddingVertical: 10, fontSize: Globals.TEXT_SIZE.MEDIUM
    },


    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
        width: widthPercentageToDP('80%'),
        paddingVertical: 10,
        height: heightPercentageToDP('5.5%'),
        marginTop: 10,
        borderColor: "#f3f3f3",
        borderWidth: 1,
        borderRadius: 30,
        padding: 4
    },

    donthaveaccount: {
        flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop: 20,
    },

    image: {
        height: widthPercentageToDP(50),
        width: widthPercentageToDP(50)
    }
};