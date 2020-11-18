import React, { Component } from "react";
import { Image } from "react-native";
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, Container, List, ListItem, Content, Left, Right,  Body, Thumbnail} from "native-base";


export default class MenuSideBar extends Component {
    checkScene(){
        if (Actions.currentScene === 'homeScreen'){
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <Content>
                    <Image
                        source={{
                            uri:
                                "https://image.ibb.co/kjsKwx/image.png"
                        }}
                        style={{
                            height: 150,
                            width: "100%",
                            alignSelf: "stretch",
                            position: "absolute"
                        }}
                    />

                    <Image
                        square
                        style={{
                            marginTop: 18,
                            height: 80,
                            width: 80,
                            position: "absolute",
                            alignSelf: "center",
                            top: 20
                        }}
                        source={{
                            uri:
                                "https://image.ibb.co/fwOKSS/icon.png"
                        }}
                    />
                    <List contentContainerStyle={{ marginTop: 120 }}>

                        <ListItem
                            style={{ marginTop: 150 }}
                            icon
                            button
                            onPress={() => {
                                Actions.popTo('homeScreen');
                            }}>

                            <Left>
                                <Icon
                                    name='ios-home'
                                    style={{marginLeft:9,fontSize:25}}
                                />
                            </Left>
                            <Body style={{marginLeft:9}}>
                            <Text style={styles.textStyle}>Home</Text>
                            </Body>

                            <Right/>


                        </ListItem>

                        <ListItem
                            avatar
                            button
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Board"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/fwOKSS/icon.png'}}/>
                            </Left>
                            <Body>
                            <Text style={styles.textStyle}>Board</Text>
                            </Body>



                        </ListItem>


                        <ListItem
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 1"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/cZfdBx/1.png'}}/>
                            </Left>

                            <Body>
                            <Text style={styles.textStyle}>Circle 1</Text>
                            </Body>

                        </ListItem>

                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 2"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/bWAdBx/2.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 2</Text></Body>


                        </ListItem>

                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 3"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/bHGJBx/3.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 3</Text></Body>

                        </ListItem>

                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 4"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/dMV0PH/4.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 4</Text></Body>


                        </ListItem>

                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 5"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/eP00PH/5.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 5</Text></Body>

                        </ListItem>


                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 6"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/fRV0PH/6.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 6</Text></Body>


                        </ListItem>

                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 7"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/jRT9Jc/7.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 7</Text></Body>


                        </ListItem>

                        <ListItem
                            contentContainerStyle={{ marginTop: 120 }}
                            button
                            avatar
                            onPress={() => {
                                this.props.closeDrawer();

                                Actions.circleList({circle : "Circle 8"});


                            }}
                        >
                            <Left>
                                <Thumbnail small source={{ uri : 'https://image.ibb.co/cVZS4H/8.png'}}/>
                            </Left>

                            <Body><Text style={styles.textStyle}>Circle 8</Text></Body>


                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = {
    textStyle : {
        fontSize : 17,
        fontWeight: 'bold'
    }
};