import React, { Component } from 'react';
import { Root, Container, Content, StyleProvider, Drawer} from 'native-base';
import MemberList from './components/MemberList';
import HeaderComponent from './components/HeaderComponent';
import getTheme from '../native-base-theme/components';
import commonColor from "../native-base-theme/variables/commonColor";
import { Font , AppLoading} from 'expo';
import firebase from 'firebase';
import MenuSideBar from './components/MenuSideBar';



export default class Circle extends Component{
    state = { loading : true, searchText : '', selectedMember : ''};

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

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<MenuSideBar closeDrawer = {this.closeDrawer.bind(this)}/>}
                onClose={() => this.closeDrawer()} >

                <StyleProvider style = {getTheme(commonColor)}>
                    <Container>

                        <HeaderComponent searchText = {this.state.searchText} changeSearchText = {this.changeSearchText.bind(this)} openDrawer={this.toggleDrawer.bind(this)} headerTitle={this.props.circle}/>

                        <Content padder>

                            <MemberList searchText = {this.state.searchText} changeSelectedMember = {this.changeSelectedMember.bind(this)} circle={this.props.circle}/>

                        </Content>

                    </Container>
                </StyleProvider>
            </Drawer>
        );
    }
}


