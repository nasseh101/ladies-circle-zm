import React, { Component } from 'react';
import { Header, Title,  Button, Left, Right, Body, Icon, Input, Item, View, Drawer} from 'native-base';
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MenuSideBar from './MenuSideBar';


import { TouchableOpacity } from 'react-native';

export default class HeaderComponent extends Component{


    state = { searchOff : true};

    componentWillUpdate(){

    }

    componentWillMount(){

    }

    //switch between search and title
    renderSearch(){
        if(this.state.searchOff){
            return(

                <Animatable.View animation = '' duration={300} >
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={()=> {
                                    this.props.openDrawer()
                                }}
                            >
                                <Icon name='menu'/>
                            </Button>
                        </Left>

                        <Body>
                        <Title>LCZ {this.props.headerTitle}</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => {
                                this.setState({searchOff : false});
                            }
                            }
                            >
                                <Icon name='search'/>
                            </Button>
                        </Right>
                    </Header>
                </Animatable.View>
            );

        }else{
            return(
                <Animatable.View animation='pulse' duration={500}>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name = 'search'/>
                            <Input placeholder = 'Search'
                                   onChangeText={(text) =>{
                                       this.props.changeSearchText(text);
                                   }}
                                   value={this.props.searchText}
                            />
                            <TouchableOpacity onPress={() => {
                                this.setState({searchOff : true});
                                this.props.changeSearchText('');}
                            }
                            >
                                <Icon name='close'/>
                            </TouchableOpacity>
                        </Item>

                    </Header>
                </Animatable.View>

            );
        }
    }

    render(){
        return (

            <View>
                {this.renderSearch()}
            </View>

        );
    }
}