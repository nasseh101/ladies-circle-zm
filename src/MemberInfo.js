import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Header, Container, Content, FooterTab, Button, Text, StyleProvider, Icon,Left, Body, Title, Right, Card, CardItem} from 'native-base';
import { Image, View, Linking } from 'react-native';
import getTheme from '../native-base-theme/components';
import commonColor from "../native-base-theme/variables/commonColor";
import Communications from 'react-native-communications';

export default class MemberInfo extends Component{
    renderPosition(){
        if(this.props.member.position !== ''){
            return(
                <Text note style={{fontWeight : 'bold', color:'#1b9b3c'}}>{this.props.member.position}</Text>
            );
        }
    }

    renderImage(){
        const { imageStyle } = styles;
        if(this.props.member.picture !== ''){
            return(
                <Image source={{ uri : this.props.member.picture}} style={imageStyle}/>
            );
        }else{
            return(
                <Image source={{ uri : this.props.member.picture}} style={imageStyle}/>
            );
        }
    }


    formatSpouse(){
        if(this.props.member.spouse === ''){
            return(
                <Text note>
                    Spouse : N/A
                </Text>
            );
        }else{
            return(
                <Text note>
                    {this.props.member.spouse}'s Wife
                </Text>
            );
        }
    }

    render(){
        const { imageStyle, viewStyle, nameStyle, cardContactStyle} = styles;
        return(
            <StyleProvider  style = {getTheme(commonColor)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => {
                                Actions.pop();
                            }}>
                                <Icon name='arrow-back'/>
                            </Button>
                        </Left>

                        <Body>
                        <Title>{this.props.member.name}</Title>
                        </Body>

                        <Right/>

                    </Header>

                    <Content padder>
                        <Card transparent>
                            <CardItem bordered>
                                <Left>
                                    {this.renderImage()}
                                </Left>
                                <Body>
                                <Text style={{paddingBottom: 10}}>{this.props.member.name}</Text>

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent:'space-between'
                                }}>
                                    {this.renderPosition()}
                                    <Text note>{this.props.member.address}</Text>
                                    <Text note>{this.props.member.dob}</Text>
                                    {this.formatSpouse()}
                                </View>

                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Text note>{this.props.member.bio}</Text>
                            </CardItem>

                            <CardItem style={cardContactStyle}>
                                <Button iconLeft onPress={() => {
                                    Linking.openURL('tel:'+ this.props.member.phone);
                                }}>
                                    <Icon name='call'/>
                                    <Text>Call </Text>
                                </Button >
                                <Button iconLeft onPress={() => {
                                    Communications.text(this.props.member.phone);
                                }}>
                                    <Icon name='text'/>
                                    <Text>Text</Text>
                                </Button>
                                <Button iconLeft onPress={() => {
                                    Linking.openURL('mailto:'+ this.props.member.email);
                                }}>
                                    <Icon name='mail'/>
                                    <Text>Email</Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Content>

                </Container>
            </StyleProvider>

        );
    }
}

const styles = {
    viewStyle : {

    },
    imageStyle : {
        alignSelf : 'center',
        width : 140,
        height : 140,
        borderRadius: 70
    },

    nameStyle : {
        paddingTop : 10,
        fontSize : 20,
        alignSelf: 'center'
    },
    cardContactStyle : {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
};
