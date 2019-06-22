import {RFPercentage} from "react-native-responsive-fontsize";

import {Platform} from 'react-native';

export default {

    BASE_URL: 'test.com',


    // LOCAL_FILE_PATH: RNFS.DocumentDirectoryPath + '/JobVariety_',


    END_POINT_URL: {},

    COLOR: {
        BLACK: '#000000',
        WHITE: '#ffffff',
        GREY: '#707070',
        LIGHTGRAY: '#d1d1d1',
        READ_NOTIF_COLOR: '#a9a9a9',
        GREY_ULTRA_LITE: '#F5F5F5',
        DARKBLUE: '#0F3274',
        LIGHTBLUE: '#6EA8DA',
        DARKGRAY: '#999',
        GREEN_THEME: '#41dc98',
        DARK_GREEN_THEME: '#247c55',
        LITE_GREEN_THEME: '#88bbaa',
        ORANGE: '#D8A200'
    },

    TEXT_VALUES: {
        SEND: 'SEND',
        SAVE: 'SAVE',
        LOGIN: 'LOGIN',
        USERNAME: 'USERNAME',
        PASSWORD: 'PASSWORD',
    },

    TEXT_SIZE: {
        EXTRA_LARGE: RFPercentage(3.5),
        LARGE: RFPercentage(3),
        MEDIUM: RFPercentage(2.5),
        SMALL: RFPercentage(2),
        EXTRA_SMALL: RFPercentage(1.5),

        EXTRA_LARGE_2: Platform.isPad ? RFPercentage(3) : RFPercentage(3.5),
        LARGE_2: Platform.isPad ? RFPercentage(2.5) : RFPercentage(3),
        MEDIUM_2: Platform.isPad ? RFPercentage(2) : RFPercentage(2.5),
        SMALL_2: Platform.isPad ? RFPercentage(1.5) : RFPercentage(2),
        EXTRA_SMALL_2: Platform.isPad ? RFPercentage(1) : RFPercentage(1.5),
    },


    HEADINGS: {},

    MESSAGE: {},

    ERRORS: {}

};
