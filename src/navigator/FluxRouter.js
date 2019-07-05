import React, {Component} from 'react';
import {ActivityIndicator, BackHandler, View} from 'react-native';
import {Drawer, Reducer, Router, Scene, Stack} from 'react-native-router-flux';
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import BrowsTask from "../screens/BrowsTask";
import JobDetails from "../screens/JobDetails";
import NavigationDrawer from "../components/NavigationDrawer";
import MenuIcon from '../images/menuIcon.png';
import {widthPercentageToDP} from "../utils/responsive";
import ForgotPassword from "../screens/ForgotPassword";

var alerts = require('../constants/alertFunction');

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        if (action.type === 'Navigation/BACK' && state.index === 0) {
            BackHandler.exitApp()
        }
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

type Props = {};
export default class FluxRouter extends Component<Props> {

    _loadInitialState = async () => {

    };


    constructor(props) {
        super(props);
        this.state = {
            hasToken: false,
            isLoaded: false,
        };
    }


    componentDidMount() {

    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }


    render() {

        if (this.state.isLoaded) {
            return (
                <View style={{
                    flexGrow: 1,
                    backgroundColor: 'rgba(255,255,255, 0.2)',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator
                        style={{opacity: this.state.isLoaded ? 1.0 : 0.0}}
                        animating={true}
                        size="large" color="#FF00FF"
                    />
                </View>
            )
        }

        return (
            <Router key='mainRoot'
                    createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}>

                <Stack key="root" initial={true}>
                    <Scene key="login" component={Login} title="Login" hideNavBar initial={true}/>
                    <Scene key="register" component={SignUp} title="Register" hideNavBar/>
                    <Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" hideNavBar/>

                    <Drawer
                        hideNavBar
                        key='drawer'
                        contentComponent={NavigationDrawer}
                        drawerPosition='left'
                        drawerWidth={widthPercentageToDP('75%')}
                        drawerImage={MenuIcon}
                    >
                        <Scene key='root' hideNavBar panHandlers={null}>

                            <Scene initial key="browsTask" title="Browse Task" component={BrowsTask} hideNavBar/>
                            <Scene key="jobDetails" title="Job Details" component={JobDetails} hideNavBar/>
                        </Scene>
                    </Drawer>
                </Stack>

            </Router>
        );


    }

}
