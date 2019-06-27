import * as React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ActionBar from 'react-native-action-bar';
import DetectDeviceService from "../utils/DetectDeviceService";
import MenuIcon from '../images/menuIcon.png';
import {Actions} from 'react-native-router-flux';
import Globals from "../constants/Globals";
import {heightPercentageToDP, widthPercentageToDP} from "../utils/responsive";
import BackGround from "../components/BackGround";
import BrowseTaskInPerson from "./browsTaskTabs/BrowseTaskInPerson";
import BrowseTaskRemote from "./browsTaskTabs/BrowseTaskRemote";
import BrowseTaskDate from "./browsTaskTabs/BrowseTaskDate";
import BrowseTaskPrice from "./browsTaskTabs/BrowseTaskPrice";
import BrowseTaskDistance from "./browsTaskTabs/BrowseTaskDistance";

export default class BrowsTask extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'In Person'},
            {key: 'second', title: 'Remote'},
            {key: 'third', title: 'Date'},
            {key: 'fourth', title: 'Price'},
            {key: 'fifth', title: 'Distance'},
        ],
    };

    render() {
        return (
            <BackGround>
                <View style={styles.scene}>
                    <ActionBar
                        containerStyle={styles.actionBarStyle}
                        title={'Browse Task'}
                        backgroundColor={Globals.COLOR.WHITE}
                        onLeftPress={() => Actions.drawerOpen()}
                        leftIconImage={MenuIcon}
                        leftIconImageStyle={styles.leftIconStyle}
                        rightIconImageStyle={styles.rightIconStyle}
                        titleContainerStyle={styles.leftTitleStyle}
                        titleStyle={{
                            fontSize: Platform.isPad ? Globals.TEXT_SIZE.SMALL : Globals.TEXT_SIZE.MEDIUM,
                            textAlign: 'center', color: Globals.COLOR.DARKBLUE
                        }}
                        leftIconContainerStyle={styles.leftIconStyle}
                    />

                    <TabView
                        navigationState={this.state}
                        renderScene={SceneMap({
                            first: BrowseTaskInPerson,
                            second: BrowseTaskRemote,
                            third: BrowseTaskDate,
                            fourth: BrowseTaskPrice,
                            fifth: BrowseTaskDistance,
                        })}
                        onIndexChange={index => this.setState({index})}
                        initialLayout={{width: Dimensions.get('window').width}}
                        renderTabBar={props =>
                            <TabBar
                                {...props}
                                indicatorStyle={{backgroundColor: Globals.COLOR.THEME_COLOR_BLUE}}
                                style={{
                                    backgroundColor: Globals.COLOR.WHITE,
                                    width: '100%',
                                    height: heightPercentageToDP(5)
                                }}
                                labelStyle={{
                                    color: Globals.COLOR.DARKBLUE, fontSize: Globals.TEXT_SIZE.EXTRA_SMALL_2,
                                    flex: 1, width: '100%'
                                }}
                            />
                        }

                    />
                </View>

            </BackGround>
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
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
        //paddingVertical: Platform.OS === 'android' ? 10 : 0,
        //marginBottom: Platform.OS === 'ios' && !Platform.isPad ? 15 : 0,
    },
});