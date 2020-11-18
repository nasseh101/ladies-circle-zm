import React, { Component } from 'react';
import { View, Root, Container, Content, Card, CardItem, Button, Text, StyleProvider, Drawer, Header, Left, Body, Title, Icon, Right} from 'native-base';
import getTheme from '../native-base-theme/components';
import {Image} from 'react-native';
import commonColor from "../native-base-theme/variables/commonColor";
import { Font , AppLoading} from 'expo';
import firebase from 'firebase';
import MenuSideBar from './components/MenuSideBar';



export default class HomeScreen extends Component{
    state = { loading : true, searchText : '', selectedMember : ''};

    async componentWillMount(){

        const config = {
            apiKey: "AIzaSyC37kWPIXjFMbXytySuU7Oq0nn2krD_m8U",
            authDomain: "ladies-circle-app.firebaseapp.com",
            databaseURL: "https://ladies-circle-app.firebaseio.com",
            projectId: "ladies-circle-app",
            storageBucket: "ladies-circle-app.appspot.com",
            messagingSenderId: "819653517751"
        };
        firebase.initializeApp(config);



        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });

        this.setState({ loading: false });

    }

    closeDrawer(){
        this.drawer._root.close()
    };
    openDrawer(){
        this.drawer._root.open()
    };

    toggleDrawer(){
        this.openDrawer();
    }

    changeSearchText(newValue){
        this.setState({
            searchText: newValue
        });
    }

    changeSelectedMember(member){
        this.setState({
            selectedMember : member
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading />
                </Root>
            );
        }

        const { subTextStyle, nameStyle, titleStyle, imageStyle } = styles;

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<MenuSideBar closeDrawer = {this.closeDrawer.bind(this)} />}
                onClose={() => this.closeDrawer()} >

                <StyleProvider style = {getTheme(commonColor)}>
                    <Container>

                        <Header>
                            <Left>
                                <Button
                                    transparent
                                    onPress={()=> {
                                        this.openDrawer()
                                    }}
                                >
                                    <Icon name='menu'/>
                                </Button>
                            </Left>

                            <Body>
                            <Title>LCZ Directory</Title>
                            </Body>

                            <Right/>

                        </Header>

                        <Content padder>
                            <View>
                                <Card>

                                    <CardItem>
                                        <Image style={imageStyle} source={{ uri : 'https://i.ibb.co/NndvPML/Whats-App-Image-2018-11-16-at-11-04-19-PM.jpg'}}/>
                                    </CardItem>

                                    {/*Message twaambo about what needs to be done here*/}
                                    <CardItem footer bordered>
                                        <Text>Twaambo Chirwa - President</Text>
                                    </CardItem>

                                    <CardItem bordered>
                                        <Body>
                                        <Text note>
                                            "May we be inspired this year by our theme for 2018/19, 'Firming our foundations - Friendship and Service'. Friendship and service is why
                                            Ladies Circle exists. Our logo for the year is the proud, bold and deeply rooted African Baobab tree. Why, because the large, bold, resilient
                                            Baobab tree thrives in  all weather and conditions providing fruit and life to all who come under its shade and stands proud and has stood unapologetic
                                            against the African sky for centuries. Circle has for the last 35years in Zambia been a place where women gathering under this wonderful association have
                                            found friendship, safety, encouragement, personal and professional growth, means to help others and so so much more.Circle with pride Ladies, giving yourself
                                            in friendship and extending in service."
                                        </Text>
                                        </Body>
                                    </CardItem>

                                    <CardItem header bordered>
                                        <Text style={titleStyle}>First National Board</Text>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>

                                        <Text style={nameStyle}>Bwalya Mulonga</Text>
                                        <Text style={subTextStyle} note>President (1994 - 1996)</Text>

                                        <Text style={nameStyle}>Sylvia Mwansa</Text>
                                        <Text style={subTextStyle} note>Vice President (1994 - 1996)</Text>

                                        <Text style={nameStyle}>Mulenga Tembo</Text>
                                        <Text style={subTextStyle} note>Secretary (1994 - 1996)</Text>

                                        <Text style={nameStyle}>Maggie Shiku</Text>
                                        <Text style={subTextStyle} note>Treasurer (1994 - 1996)</Text>

                                        <Text style={nameStyle}>Cathy Poulter</Text>
                                        <Text style={subTextStyle} note>Projects (1994 - 1996)</Text>

                                        <Text style={nameStyle}>Emmy Lee</Text>
                                        <Text style={subTextStyle} note>Stores (1994 - 1996)</Text>

                                        </Body>
                                    </CardItem>

                                    <CardItem header bordered>
                                        <Text style={titleStyle}>Past Presidents</Text>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>

                                        <Text style={nameStyle}>Bwalya Mulonga</Text>
                                        <Text note>Lusaka Ladies Circle No. 1</Text>
                                        <Text style={subTextStyle} note>(1994 - 1996)</Text>

                                        <Text style={nameStyle}>Sylvia Mwansa</Text>
                                        <Text note>Lusaka Ladies Circle No. 1</Text>
                                        <Text style={subTextStyle} note>(1996 - 1997)</Text>

                                        <Text style={nameStyle}>Mulenga Tembo</Text>
                                        <Text note>Copperbelt Ladies Circle No. 3</Text>
                                        <Text style={subTextStyle} note>(1997 - 1998)</Text>

                                        <Text style={nameStyle}>Rachel Zulu (late)</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(1998 - 1999)</Text>

                                        <Text style={nameStyle}>Emmy Jere</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(1999 - 2000)</Text>

                                        <Text style={nameStyle}>Florence Kaunda</Text>
                                        <Text note>Copperbelt Ladies Circle No. 3</Text>
                                        <Text style={subTextStyle} note>(2000 - 2001)</Text>

                                        <Text style={nameStyle}>Julie Mweemba</Text>
                                        <Text note>Lusaka Ladies Circle No. 4</Text>
                                        <Text style={subTextStyle} note>(2001 - 2002)</Text>


                                        <Text style={nameStyle}>Josephine Masumbu</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(2002 - 2003)</Text>


                                        <Text style={nameStyle}>Rhoda Mulila</Text>
                                        <Text note>Copperbelt Ladies Circle No. 3</Text>
                                        <Text style={subTextStyle} note>(2003 - 2004)</Text>


                                        <Text style={nameStyle}>Dorcas Phiri</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(2004 - 2005)</Text>

                                        <Text style={nameStyle}>Chilufya Mwanakatwe</Text>
                                        <Text note>Lusaka Ladies Circle No. 1</Text>
                                        <Text style={subTextStyle} note>(2005 - 2006)</Text>

                                        <Text style={nameStyle}>Priscilla Choonga</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(2006 - 2007)</Text>


                                        <Text style={nameStyle}>Mulenga Chatta</Text>
                                        <Text note>Lusaka Ladies Circle No. 1</Text>
                                        <Text style={subTextStyle} note>(2007 - 2008)</Text>


                                        <Text style={nameStyle}>Margaret Mtamira</Text>
                                        <Text note>Lusaka Ladies Circle No. 4</Text>
                                        <Text style={subTextStyle} note>(2008 - 2009)</Text>

                                        <Text style={nameStyle}>Mazyanga Liwewe</Text>
                                        <Text note>Lusaka Ladies Circle No. 4</Text>
                                        <Text style={subTextStyle} note>(2009 - 2010)</Text>

                                        <Text style={nameStyle}>Constance Njovu</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(2010 - 2011)</Text>

                                        <Text style={nameStyle}>Faith Kauseni</Text>
                                        <Text note>Copperbelt Ladies Circle No. 3</Text>
                                        <Text style={subTextStyle} note>(2011 - 2012)</Text>

                                        <Text style={nameStyle}>Veronica Mwiche</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(2012 - 2013)</Text>

                                        <Text style={nameStyle}>Charity Banage</Text>
                                        <Text note>Lusaka Ladies Circle No. 1</Text>
                                        <Text style={subTextStyle} note>(2013 - 2015)</Text>

                                        <Text style={nameStyle}>Sharon Telebwe</Text>
                                        <Text note>Copperbelt Ladies Circle No. 5</Text>
                                        <Text style={subTextStyle} note>(2015 - 2016)</Text>

                                        <Text style={nameStyle}>Chinyama Tembo</Text>
                                        <Text note>Lusaka Ladies Circle No. 2</Text>
                                        <Text style={subTextStyle} note>(2016 - 2017)</Text>

                                        <Text style={nameStyle}>Jenipher Mhlanga</Text>
                                        <Text note>Lusaka Ladies Circle No. 4</Text>
                                        <Text style={subTextStyle} note>(2017 - 2018)</Text>
                                        </Body>
                                    </CardItem>

                                </Card>
                            </View>
                        </Content>
                    </Container>
                </StyleProvider>
            </Drawer>
        );
    }
}

const styles = {
    titleStyle: {

    },
    imageStyle:{
        flex:1,
        height: 250
    },
    nameStyle : {
        fontSize: 15
    },
    subTextStyle : {
        marginBottom:10
    }
};
