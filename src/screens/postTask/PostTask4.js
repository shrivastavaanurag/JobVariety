import * as React from 'react';
import {BackHandler, Image, StyleSheet, View} from 'react-native';
import BackGround from "../../components/BackGround";
import success from '../../images/job_successful.png';
import TextViewMedium from "../../components/customTextViews/TextViewMedium";
import Globals from "../../constants/Globals";
import {widthPercentageToDP} from "../../utils/responsive";
import {Actions} from "react-native-router-flux";

export default class PostTask4 extends React.Component {

    onNextClick = () => {
        // Actions.postTask2();
    };
    handleBackPress = () => {
        Actions.popTo('postTask1');
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        return (

            <BackGround>
                <View style={styles.scene}>
                    <Image style={{width: widthPercentageToDP(40), height: widthPercentageToDP(40)}} source={success}/>
                    <TextViewMedium value="Job Successfully Posted" FontSize={Globals.TEXT_SIZE.LARGE_2}
                                    FontColor={Globals.COLOR.DARKBLUE} FontTextAlign={'center'}/>
                </View>
            </BackGround>

        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
});