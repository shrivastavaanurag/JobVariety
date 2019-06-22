import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import SignUp from "./src/screens/SignUp";


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {isLoading: true}
    }


  render() {

      /*if (this.state.isLoading) {
          return <SplashScreen/>;
      }*/

      return (
          <SignUp/>
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
