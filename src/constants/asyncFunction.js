import {AsyncStorage} from "react-native";

module.exports = function (item, selectedValue) {
    try {
        AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
        console.error('AsyncStorage error: ' + error.message);
    }
};