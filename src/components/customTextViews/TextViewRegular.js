import React, {Component} from 'react';

import {Text} from 'react-native';

import PropTypes from 'prop-types';

export default class TextViewRegular extends Component {

    render() {

        return (
            <Text numberOfLines={this.props.noOfLines}
                  style={
                      {
                          fontFamily: 'Quicksand-Regular',
                          flex: this.props.TextFlex,
                          fontSize: this.props.FontSize,
                          color: this.props.FontColor,
                          textAlignVertical: this.props.FontTextAlignVertical,
                          textAlign: this.props.FontTextAlign,
                          paddingVertical: this.props.FontPaddingVertical,
                          paddingHorizontal: this.props.FontPaddingHorizontal,
                      }
                  }>{this.props.value}</Text>
        );
    }
}

TextViewRegular.propTypes =
    {
        TextFlex: PropTypes.number,
        noOfLines: PropTypes.number,
        value: PropTypes.string,
        FontColor: PropTypes.string,
        FontSize: PropTypes.number,
        FontTextAlign: PropTypes.string,
        FontTextAlignVertical: PropTypes.string,
        FontPaddingVertical: PropTypes.number,
        FontPaddingHorizontal: PropTypes.number,

    };

TextViewRegular.defaultProps =
    {
        value: "Default Name",
        noOfLines: undefined,
        FontColor: "#000000",
        FontSize: 15,
        FontTextAlign: 'center',
        FontTextAlignVertical: 'center',
        FontPaddingVertical: 10,
        FontPaddingHorizontal: 10,
    };
