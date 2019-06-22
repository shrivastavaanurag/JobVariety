import {Alert, AlertIOS} from "react-native";

module.exports = function (title, message) {
    AlertIOS.alert(
        title,
        message,
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {cancelable: false}
    )
};

module.exports = function (title, message, action) {
    Alert.alert(
        title,
        message,
        [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => action},
        ],
        {cancelable: false}
    )
};



