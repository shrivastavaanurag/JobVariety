import React, {Component} from 'react';
import {Platform, StyleSheet, YellowBox} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import FluxRouter from "./src/navigator/FluxRouter";


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentWillMount() {
        console.disableYellowBox = true;
        YellowBox.ignoreWarnings(['Class RCTCxxModule']);
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            setTimeout(() => {
                SplashScreen.hide();
            }, 2000);
        }
    }



  render() {

      /*if (this.state.isLoading) {
          return <SplashScreen/>;
      }*/

      return <FluxRouter/>;

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
