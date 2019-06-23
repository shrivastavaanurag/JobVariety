import React, {Component} from 'react';
import {StyleSheet, YellowBox} from 'react-native';
import JobDetails from "./src/screens/JobDetails";


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


  render() {

      /*if (this.state.isLoading) {
          return <SplashScreen/>;
      }*/

      return (
          <JobDetails/>
      );
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
