import React, {Component} from 'react';

import {Text} from 'react-native';

import PropTypes from 'prop-types';

export default class TextViewBold extends Component {

    render() {

        return (
            <Text numberOfLines={this.props.noOfLines}
                  style={
                      {
                          backgroundColor: this.props.BackGroundColor,
                          fontFamily: 'Roboto-Bold',
                          flex: this.props.TextFlex,
                          fontSize: this.props.FontSize,
                          color: this.props.FontColor,
                          textAlign: this.props.FontTextAlign,
                          paddingVertical: this.props.FontPaddingVertical,
                          paddingHorizontal: this.props.FontPaddingHorizontal,
                      }
                  }>{this.props.value}</Text>
        );
    }
}

TextViewBold.propTypes =
    {
        BackGroundColor: PropTypes.string,
        TextFlex: PropTypes.number,
        noOfLines: PropTypes.number,
        value: PropTypes.string,
        FontColor: PropTypes.string,
        FontSize: PropTypes.number,
        FontTextAlign: PropTypes.string,
        FontPaddingVertical: PropTypes.number,
        FontPaddingHorizontal: PropTypes.number,

    };

TextViewBold.defaultProps =
    {
        BackGroundColor: 'transparent',
        value: "Default Name",
        FontColor: "#000000",
        FontSize: 15,
        noOfLines: undefined,
        FontTextAlign: 'center',
        FontPaddingVertical: 10,
        FontPaddingHorizontal: 10,
    };
