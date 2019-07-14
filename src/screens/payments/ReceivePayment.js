import * as React from 'react';
import {ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Globals from "../../constants/Globals";
import TextViewMedium from "../../components/customTextViews/TextViewMedium";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import {TextInputMask} from 'react-native-masked-text';

export default class ReceivePayment extends React.Component {

    saveBillingAddressClicked = () => {

    };
    addBankClicked = () => {

    };

    constructor(props) {
        super(props);

        this.state = {
            address1: '',
            address2: '',
            suburb: '',
            addState: '',
            zipcode: '',
            country: '',
            accountName: '',
            accNumber: '',
            bsb: ''
        }
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (

            <View style={styles.scene}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10}}
                            keyboardShouldPersistTaps='handled'>
                    <View style={{marginTop: 10}}>
                        <TextViewMedium value={'Billing Address'} TextFlex={1} FontTextAlign={'left'}
                                        FontPaddingVertical={5}
                                        FontColor={Globals.COLOR.DARKBLUE} FontSize={Globals.TEXT_SIZE.MEDIUM_2}/>

                        <TextViewRegular value={Globals.MESSAGE.BILLING_ADDRESS} TextFlex={1} FontTextAlign={'left'}
                                         FontPaddingVertical={5}
                                         FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                         FontSize={Globals.TEXT_SIZE.SMALL_2}/>

                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input}
                                       placeholder="Address Line 1"
                                       placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                       keyBoardType='default'
                                       textContentType='streetAddressLine1'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       underlineColorAndroid="transparent"
                                       autoCapitalize='none'
                                       onChangeText={(address1) => this.setState({address1})}
                                       onSubmitEditing={() => this.refs.add2.focus()}/>
                        </View>

                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input}
                                       placeholder="Address Line 2 (Optional)"
                                       placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                       keyBoardType='default'
                                       textContentType='streetAddressLine2'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       underlineColorAndroid="transparent"
                                       autoCapitalize='none'
                                       onChangeText={(address2) => this.setState({address2})}
                                       onSubmitEditing={() => this.refs.sublocalitiy.focus()}
                                       ref={"add2"}/>
                        </View>

                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input}
                                       placeholder="Suburb"
                                       placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                       keyBoardType='default'
                                       textContentType='sublocality'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       underlineColorAndroid="transparent"
                                       autoCapitalize='none'
                                       onChangeText={(suburb) => this.setState({suburb})}
                                       onSubmitEditing={() => this.refs.addstate.focus()}
                                       ref={"sublocalitiy"}/>
                        </View>

                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input}
                                       placeholder="State"
                                       placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                       keyBoardType='default'
                                       textContentType='addressState'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       underlineColorAndroid="transparent"
                                       autoCapitalize='none'
                                       onChangeText={(addState) => this.setState({addState})}
                                       onSubmitEditing={() => this.refs.zipCode.focus()}
                                       ref={"addstate"}/>
                        </View>

                        <View style={styles.inputWrapper}>
                            <TextInputMask
                                type={'zip-code'}
                                value={this.state.zipcode}
                                onChangeText={zipcode => {
                                    this.setState({zipcode})
                                }}
                                style={styles.input}
                                placeholder={'Postcode'}
                                placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                ref={(ref) => this.zipCode = ref}
                                onSubmitEditing={() => this.refs.country.focus()}

                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <TextInput style={styles.input}
                                       placeholder="Country"
                                       placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                       keyBoardType='default'
                                       textContentType='countryName'
                                       returnKeyType='done'
                                       autoCorrect={false}
                                       underlineColorAndroid="transparent"
                                       autoCapitalize='none'
                                       onChangeText={(country) => this.setState({country})}
                                       ref={"country"}/>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={{
                                    width: widthPercentageToDP(40),
                                    alignItems: 'center',
                                    backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
                                    borderColor: "#f3f3f3",
                                    borderWidth: 1,
                                    borderRadius: 30
                                }}
                                activeOpacity={0.7}
                                onPress={this.saveBillingAddressClicked}>
                                <TextViewMedium
                                    value={'Save'}
                                    FontSize={Globals.TEXT_SIZE.SMALL_2} FontColor={Globals.COLOR.WHITE}
                                    FontPaddingVertical={10}
                                    FontPaddingHorizontal={8}
                                />
                            </TouchableOpacity>
                        </View>

                        {/*BANK ACCOUNT DETAILS */}
                        <View style={{marginTop: 20}}>
                            <TextViewMedium value={'BANK ACCOUNT DETAILS'} TextFlex={1} FontTextAlign={'left'}
                                            FontPaddingVertical={5}
                                            FontColor={Globals.COLOR.DARKBLUE} FontSize={Globals.TEXT_SIZE.MEDIUM_2}/>

                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="Account holder name"
                                           placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                           keyBoardType='default'
                                           textContentType='name'
                                           returnKeyType='next'
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           autoCapitalize='none'
                                           onChangeText={(accountName) => this.setState({accountName})}
                                           onSubmitEditing={() => this.refs.accNum.focus()}/>
                            </View>

                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="Account number"
                                           placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                           keyBoardType='default'
                                           textContentType='none'
                                           returnKeyType='next'
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           autoCapitalize='none'
                                           onChangeText={(accNumber) => this.setState({accNumber})}
                                           onSubmitEditing={() => this.refs.bsb.focus()}
                                           ref={"accNum"}/>
                            </View>

                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="BSB"
                                           placeholderTextColor={Globals.COLOR.LIGHTGRAY}
                                           keyBoardType='default'
                                           textContentType='none'
                                           returnKeyType='done'
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           autoCapitalize='none'
                                           onChangeText={(bsb) => this.setState({bsb})}
                                           ref={"bsb"}/>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={{
                                    width: widthPercentageToDP(40),
                                    alignItems: 'center',
                                    backgroundColor: Globals.COLOR.THEME_COLOR_BLUE,
                                    borderColor: "#f3f3f3",
                                    borderWidth: 1,
                                    borderRadius: 30
                                }}
                                activeOpacity={0.7}
                                onPress={this.addBankClicked}>
                                <TextViewMedium
                                    value={'Add Bank'}
                                    FontSize={Globals.TEXT_SIZE.SMALL_2} FontColor={Globals.COLOR.WHITE}
                                    FontPaddingVertical={10}
                                    FontPaddingHorizontal={8}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
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
        flex: 1, paddingVertical: heightPercentageToDP(0.8), fontSize: Globals.TEXT_SIZE.SMALL_2
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentageToDP(100),
        marginTop: heightPercentageToDP(1),
        padding: 4,
    },
});