import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import dummyData from "../../utils/dummyData";
import BrowseTaskList from "../../components/BrowseTaskList";

export default class BrowseTaskInPerson extends React.Component {

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (

            <View style={styles.scene}>
                <BrowseTaskList dummyData={dummyData.InPersonData} fromComponent="taskInPerson"/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    }
});