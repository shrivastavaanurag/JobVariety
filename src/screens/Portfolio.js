import * as React from 'react';
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ActionBar from 'react-native-action-bar';
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "../components/customTextViews/TextViewRegular";
import Globals from "../constants/Globals";
import TextViewMedium from "../components/customTextViews/TextViewMedium";
import BackGround from "../components/BackGround";
import {Actions} from "react-native-router-flux";
import DetectDeviceService from "../utils/DetectDeviceService";
import MenuIcon from '../images/menuIcon.png';
import upload_resume from '../images/upload_resume.png';
import upload_files from '../images/upload_files.png';
import DocumentPicker from 'react-native-document-picker';

let ImagePicker = require('react-native-image-picker');

let options = {
    title: 'Select File',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class Portfolio extends React.Component {

    _uploadResume = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.pdf],
            });
            for (const res of results) {
                alert('FILE NAME : \n' + JSON.stringify(res.name) + '\nPATH : \n' + JSON.stringify(res.uri));
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.name,
                    res.size
                );
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    };

    _uploadFiles = (image) => {
        alert('Image Path:\n' + JSON.stringify(image));
    };

    _addImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                if (source !== null) {
                    this._uploadFiles(source);
                }

                // You can also display the image using data:
                if (response.type !== null) {
                    if (response.type !== undefined) {
                        this.setState({
                            fileType: response.type
                        });
                    }
                } else {
                    this.setState({fileType: 'image/png'})
                }

                this.setState({
                    imageSource: source,
                });

            }
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            fileType: '',
            imageSource: upload_files
        }
    }

    render() {

        return (

            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Portfolio'}
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
                            paddingVertical: heightPercentageToDP(7)
                        }}>

                            <TouchableOpacity
                                style={{width: widthPercentageToDP(90)}}
                                activeOpacity={0.7}
                                onPress={this._uploadResume}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingVertical: 10,
                                    marginTop: 10
                                }}>
                                    <Image style={{width: widthPercentageToDP(25), height: widthPercentageToDP(25)}}
                                           source={upload_resume}/>


                                    <TextViewMedium FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                    FontPaddingHorizontal={3} FontTextAlign={'center'}
                                                    FontColor={Globals.COLOR.DARKBLUE} value="Upload your resume"
                                                    FontPaddingVertical={5}/>

                                    <TextViewRegular FontSize={Globals.TEXT_SIZE.SMALL_2}
                                                     FontPaddingHorizontal={3} FontTextAlign={'center'}
                                                     FontColor={Globals.COLOR.GREY}
                                                     value="Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern"
                                                     FontPaddingVertical={10}/>


                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{width: widthPercentageToDP(90), marginTop: heightPercentageToDP(5)}}
                                activeOpacity={0.7}
                                onPress={this._addImage}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingVertical: 10,
                                }}>
                                    <Image style={{width: widthPercentageToDP(25), height: widthPercentageToDP(25)}}
                                           source={this.state.imageSource}/>


                                    <TextViewMedium FontSize={Globals.TEXT_SIZE.MEDIUM_2}
                                                    FontPaddingHorizontal={3} FontTextAlign={'center'}
                                                    FontColor={Globals.COLOR.DARKBLUE} value="Upload files"
                                                    FontPaddingVertical={5}/>

                                    <TextViewRegular FontSize={Globals.TEXT_SIZE.SMALL_2}
                                                     FontPaddingHorizontal={3} FontTextAlign={'center'}
                                                     FontColor={Globals.COLOR.GREY}
                                                     value="Lorem ipsum is simply dummy text of this app. this is long text to show the testing of this text only, bla bla is not the library only text writtern"
                                                     FontPaddingVertical={10}/>


                                </View>
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
    }
});