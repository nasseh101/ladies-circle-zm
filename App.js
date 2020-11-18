import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import HomeScreen from './src/HomeScreen';
import MemberInfo from './src/MemberInfo';
import Circle from './src/Circle';

export default class App extends Component{

    render(){
        return(

            <Router >
                <Scene key="root">

                    <Scene hideNavBar key="homeScreen"
                           component={HomeScreen}
                           type={ActionConst.RESET}
                    />

                    <Scene hideNavBar key="circleList"
                           component={Circle}
                    />

                    <Scene hideNavBar key="memberInfo"
                           component={MemberInfo}
                    />
                </Scene>
            </Router>
        );
    }
}


