import {ToastAndroid} from "react-native";

module.exports = function (message) {
    ToastAndroid.show(
        message,
        ToastAndroid.SHORT
    )
};