import * as React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box'
import cvv from '../../images/cvv.png';
import visa from '../../images/visa.png';
import deleteCard from '../../images/delete.png';
import editCard from '../../images/edit.png';
import Globals from "../../constants/Globals";
import TextViewMedium from "../../components/customTextViews/TextViewMedium";
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import dummyData from "../../utils/dummyData";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";

import {TextInputMask} from 'react-native-masked-text';


export default class MakePayment extends React.Component {

    _agreeTermsClicked = () => {

    };
    addCardClicked = () => {

    };
    itemClick = (item) => {
        // this.setState({checked: !this.state.checked});
    };

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            isRadioChecked: -1,
            cardValue: {},
            agreeChecked: false,
            creditCard: '',
            cardDate: ''

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
                    <View>
                        <TextViewMedium value={'Saved Card'} TextFlex={1} FontTextAlign={'left'}
                                        FontPaddingVertical={10}
                                        FontColor={Globals.COLOR.DARKBLUE} FontSize={Globals.TEXT_SIZE.MEDIUM_2}/>


                        <FlatList
                            style={{
                                marginBottom: heightPercentageToDP(8),
                                borderTopWidth: 1,
                                borderTopColor: Globals.COLOR.GREY
                            }}
                            data={dummyData.CARD_DATA}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>

                                <TouchableOpacity
                                    onPress={this.itemClick.bind(this, item)}>

                                    <View style={styles.MainContainer}>

                                        <View style={{
                                            flexDirection: 'row',
                                            marginRight: 10,
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                        }}>
                                            <CheckBox
                                                style={{marginLeft: 10, width: widthPercentageToDP(50)}}
                                                onClick={() => {
                                                    this.setState({
                                                        checked: !this.state.checked
                                                    })
                                                }}
                                                isChecked={this.state.checked}
                                                rightTextStyle={{color: Globals.COLOR.DARKBLUE}}
                                                rightTextView={<TextViewRegular value={item.cardNumber}
                                                                                FontColor={Globals.COLOR.GREY}/>}
                                                checkBoxColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                checkedCheckBoxColor={Globals.COLOR.THEME_COLOR_BLUE}
                                            />
                                            <TextViewMedium value={item.bankName} FontPaddingHorizontal={3}
                                                            FontColor={Globals.COLOR.GREY}/>
                                            <Image style={{
                                                height: heightPercentageToDP(2),
                                                width: widthPercentageToDP(10),
                                                resizeMode: 'center'
                                            }} source={item.cardImage}/>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            height: '100%',
                                            flexGrow: 1,
                                            alignItems: 'center',
                                        }}>

                                            <Image style={{
                                                height: widthPercentageToDP(4),
                                                paddingHorizontal: 10,
                                                marginHorizontal: 10,
                                                width: widthPercentageToDP(4),
                                                resizeMode: 'center'
                                            }} source={editCard}/>
                                            <Image style={{
                                                height: widthPercentageToDP(4),
                                                paddingHorizontal: 10,
                                                marginHorizontal: 10,
                                                width: widthPercentageToDP(4),
                                                resizeMode: 'center'
                                            }} source={deleteCard}/>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.id.toString()}
                        />

                        <TextViewMedium value={'Add New Credit Card'} TextFlex={1} FontTextAlign={'left'}
                                        FontPaddingVertical={10}
                                        FontColor={Globals.COLOR.DARKBLUE} FontSize={Globals.TEXT_SIZE.MEDIUM_2}/>


                        <View style={styles.inputWrapper}>
                            <TextInputMask
                                type={'credit-card'}
                                options={{
                                    obfuscated: false,
                                    issuer: Globals.CREDIT_CARD_ISSUER.VISA_MASTER
                                }}
                                value={this.state.creditCard}
                                onChangeText={text => {
                                    this.setState({
                                        creditCard: text
                                    })
                                }}
                                style={styles.input}
                                placeholder={'xxxx xxxx xxxx xxxx'}
                            />
                            <Image style={{
                                height: heightPercentageToDP(2),
                                width: widthPercentageToDP(10), marginRight: 10,
                                resizeMode: 'center'
                            }} source={visa}/>
                        </View>

                        <View style={styles.inputWrapper}>
                            <View>
                                <TextViewRegular value={'Card Expiry'} FontPaddingHorizontal={0}
                                                 FontSize={Globals.TEXT_SIZE.SMALL_2} FontPaddingVertical={2}
                                                 FontColor={Globals.COLOR.GREY}/>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'MM/YY'
                                    }}
                                    value={this.state.cardDate}
                                    onChangeText={text => {
                                        this.setState({
                                            cardDate: text
                                        })
                                    }}
                                    // add the ref to a local var
                                    ref={(ref) => this.datetimeField = ref}
                                    style={styles.input2}
                                    placeholder={'01/25'}
                                />

                            </View>

                            <View>
                                <View style={{flexDirection: 'row', marginRight: 10}}>
                                    <TextViewRegular value={'CVV'} FontPaddingHorizontal={0}
                                                     FontSize={Globals.TEXT_SIZE.SMALL_2}
                                                     FontPaddingVertical={3} FontColor={Globals.COLOR.GREY}/>
                                    <Image style={{
                                        height: heightPercentageToDP(2.5), marginLeft: 5,
                                        width: widthPercentageToDP(10),
                                        resizeMode: 'center'
                                    }} source={cvv}/>
                                </View>
                                <TextInput style={styles.input2}
                                           placeholder="***"
                                           placeholderTextColor={Globals.COLOR.GREY}
                                           secureTextEntry
                                           maxLength={4}
                                           autoCorrect={false}
                                           underlineColorAndroid="transparent"
                                           onChangeText={(cvv) => this.setState({cvv})}
                                />

                            </View>

                        </View>


                        <View style={styles.agreeTCStyle}>
                            <TouchableOpacity
                                style={{alignItems: 'flex-start', justifyContent: 'center'}}
                                activeOpacity={0.7}
                                onPress={this._agreeTermsClicked}>
                                <CheckBox
                                    style={{flex: 1}}
                                    onClick={() => {
                                        this.setState({
                                            agreeChecked: !this.state.agreeChecked
                                        })
                                    }}
                                    isChecked={this.state.agreeChecked}
                                    rightTextStyle={{color: Globals.COLOR.DARKBLUE}}
                                    rightTextView={<TextViewRegular value="I agree with privacy and policy"
                                                                    FontColor={Globals.COLOR.DARKBLUE}/>}
                                    checkBoxColor={Globals.COLOR.THEME_COLOR_BLUE}
                                    checkedCheckBoxColor={Globals.COLOR.THEME_COLOR_BLUE}
                                />
                            </TouchableOpacity>

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
                                onPress={this.addCardClicked}>
                                <TextViewMedium
                                    value={'Add Card'}
                                    FontSize={Globals.TEXT_SIZE.MEDIUM} FontColor={Globals.COLOR.WHITE}
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
        flex: 1, paddingVertical: 20
    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
        borderBottomColor: Globals.COLOR.GREY, borderBottomWidth: 1
    },
    agreeTCStyle: {
        width: widthPercentageToDP('80%'),
        marginTop: heightPercentageToDP(0.8),
        marginBottom: heightPercentageToDP(0.8), paddingLeft: 10
    },
    input: {
        paddingVertical: heightPercentageToDP(0.8),
        fontSize: Globals.TEXT_SIZE.SMALL_2, color: Globals.COLOR.GREY,
    },
    input2: {
        paddingVertical: heightPercentageToDP(0.8),
        fontSize: Globals.TEXT_SIZE.SMALL_2, color: Globals.COLOR.GREY,
        borderBottomColor: Globals.COLOR.GREY,
        borderBottomWidth: 1,
    },
    inputWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: heightPercentageToDP(0.8),
        paddingHorizontal: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: widthPercentageToDP(100),
        marginTop: heightPercentageToDP(1),
        padding: 4,
    },
});