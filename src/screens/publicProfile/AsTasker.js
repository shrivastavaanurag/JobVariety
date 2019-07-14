import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/responsive";
import TextViewRegular from "../../components/customTextViews/TextViewRegular";
import Globals from "../../constants/Globals";

export default class AsTasker extends React.Component {

    _portfolioClicked = () => {
        // Actions.previewOffer();
    };

    _aboutClicked = () => {
        // Actions.previewOffer();
    };

    _skillsClicked = () => {
        // Actions.previewOffer();
    };

    render() {
        return (
            <View style={styles.scene}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                    <View style={styles.inputWrapper}>
                        <TouchableOpacity
                            style={{width: widthPercentageToDP(100)}}
                            activeOpacity={0.4}
                            onPress={this._aboutClicked}>
                            <View style={{marginLeft: widthPercentageToDP(10), paddingVertical: 7}}>
                                <TextViewRegular value={'About'} FontColor={Globals.COLOR.DARKBLUE}
                                                 FontSize={Globals.TEXT_SIZE.SMALL_2}
                                                 FontTextAlignVertical={'left'}
                                                 FontTextAlign={'left'} FontPaddingVertical={2}/>
                                <TextViewRegular value={'Edit your description now'} FontColor={Globals.COLOR.GREY}
                                                 FontSize={Globals.TEXT_SIZE.EXTRA_SMALL_2}
                                                 FontTextAlignVertical={'center'}
                                                 FontTextAlign={'left'} FontPaddingVertical={2}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TouchableOpacity
                            style={{width: widthPercentageToDP(100)}}
                            activeOpacity={0.4}
                            onPress={this._portfolioClicked}>
                            <View style={{marginLeft: widthPercentageToDP(10), paddingVertical: 7}}>
                                <TextViewRegular value={'Portfolio'} FontColor={Globals.COLOR.DARKBLUE}
                                                 FontSize={Globals.TEXT_SIZE.SMALL_2}
                                                 FontTextAlignVertical={'left'}
                                                 FontTextAlign={'left'} FontPaddingVertical={2}/>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TouchableOpacity
                            style={{width: widthPercentageToDP(100)}}
                            activeOpacity={0.4}
                            onPress={this._skillsClicked}>
                            <View style={{marginLeft: widthPercentageToDP(10), paddingVertical: 7}}>
                                <TextViewRegular value={'Skills'} FontColor={Globals.COLOR.DARKBLUE}
                                                 FontSize={Globals.TEXT_SIZE.SMALL_2}
                                                 FontTextAlignVertical={'left'}
                                                 FontTextAlign={'left'} FontPaddingVertical={2}/>
                                <TextViewRegular value={'This user has not added any skills yet.'}
                                                 FontColor={Globals.COLOR.GREY}
                                                 FontSize={Globals.TEXT_SIZE.EXTRA_SMALL_2}
                                                 FontTextAlignVertical={'center'}
                                                 FontTextAlign={'left'} FontPaddingVertical={2}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
    inputWrapper: {
        alignItems: 'flex-start',
        marginVertical: heightPercentageToDP(0.8),
        borderBottomColor: Globals.COLOR.LIGHTGRAY,
        borderBottomWidth: 1,
        width: widthPercentageToDP(100),
    }
});