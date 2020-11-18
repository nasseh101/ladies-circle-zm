import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomeScreen from './src/HomeScreen';
import MemberInfo from './src/MemberInfo';

export default  RouterComponent =  () => {
    return(
        <Router>
            <Scene hideNavBar key="root">

                <Scene key="main">
                    <Scene key="homeScreen"
                           component={HomeScreen}
                           initial
                    />


                    <Scene key="memberInfo"
                           component={MemberInfo}
                           title="member?"
                    />
                </Scene>
            </Scene>
        </Router>
    );
}