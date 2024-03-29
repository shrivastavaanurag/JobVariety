import * as React from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CardView from 'react-native-cardview';
import {Actions} from 'react-native-router-flux';
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import TextViewRegular from "../components/customTextViews/TextViewRegular";
import Globals from "../constants/Globals";
import TextViewMedium from "../components/customTextViews/TextViewMedium";
import arrow from '../images/arrow.png'

export default class BrowseTaskList extends React.Component {

    itemClick = (item) => {
        if (this.props.fromComponent === 'taskInPerson') {
            console.log('###### taskInPerson : ' + this.props.fromComponent);
            Actions.jobDetails();
        } else if (this.props.fromComponent === 'taskDate') {
            console.log('###### taskDate : ' + this.props.fromComponent);
            Actions.jobDetails();
        } else if (this.props.fromComponent === 'taskPrice') {
            console.log('###### taskPrice : ' + this.props.fromComponent);
            Actions.jobDetails();
        } else if (this.props.fromComponent === 'taskRemote') {
            console.log('###### taskRemote : ' + this.props.fromComponent);
            Actions.jobDetails();
        } else if (this.props.fromComponent === 'taskDistance') {
            console.log('###### taskDistance : ' + this.props.fromComponent);
            Actions.jobDetails();
        }
    };

    render() {
        return (

            <View style={styles.scene}>
                <FlatList
                    data={this.props.dummyData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>

                        <TouchableOpacity
                            onPress={this.itemClick.bind(this, item)}>

                            <View style={styles.MainContainer}>

                                <CardView
                                    cardElevation={5}
                                    cardMaxElevation={2}
                                    cornerRadius={15}
                                    style={styles.cardViewStyle}>

                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        width: '100%', paddingBottom: 10, paddingRight: 10,
                                        justifyContent: 'center',
                                        alignItems: 'space-around',
                                    }}>
                                        <View style={{flexDirection: 'column', flexGrow: 1}}>
                                            <TextViewRegular TextFlex={1} FontTextAlign="left" FontPaddingVertical={5}
                                                             value={item.message}/>
                                            <TextViewRegular TextFlex={1} FontTextAlign="left"
                                                             FontColor={Globals.COLOR.DARKBLUE} FontPaddingVertical={5}
                                                             value={item.remote}/>
                                            <TextViewRegular TextFlex={1} FontTextAlign="left"
                                                             FontColor={Globals.COLOR.DARKBLUE} FontPaddingVertical={5}
                                                             value={item.date}/>
                                            <TextViewRegular TextFlex={1} FontTextAlign="left"
                                                             FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                             FontPaddingVertical={5} value={item.offers}/>
                                        </View>

                                        <View style={{
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <TextViewMedium value={item.price}
                                                            FontColor={Globals.COLOR.THEME_COLOR_BLUE}
                                                            FontPaddingVertical={5}
                                                            FontSize={Globals.TEXT_SIZE.MEDIUM}/>
                                            <Image source={item.image}
                                                   style={styles.image}/>
                                            <Image source={arrow}
                                                   style={{
                                                       justifyContent: 'center',
                                                       alignItems: 'center',
                                                       height: widthPercentageToDP(5),
                                                       width: widthPercentageToDP(5)
                                                   }}/>
                                        </View>
                                    </View>

                                </CardView>

                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center'
    },
    cardViewStyle: {
        backgroundColor: '#FCFEFE',
        padding: 10,
        width: widthPercentageToDP('95%'),
    },
    image: {
        height: heightPercentageToDP(7),
        width: heightPercentageToDP(7), margin: 10
    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});