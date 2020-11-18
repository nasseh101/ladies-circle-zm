import React, { Component, PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text , View, Thumbnail, ListItem, Left, Body, Spinner} from 'native-base';
import { FlatList, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable';


class MyListItem extends React.PureComponent {
    renderPosition(){
        if(this.props.item.position !== ''){
            return(
                <Text note style={{fontWeight : 'bold', color:'#1b9b3c'}}>{this.props.item.position}</Text>
            );
        }
    }

    renderThumbnail(){
        if(this.props.item.picture !== ''){
            return(
                <Thumbnail source={{ uri : this.props.item.picture}}/>
            );
        }else{
            return(
                <Thumbnail source={{ uri : 'https://image.ibb.co/fwOKSS/icon.png'}}/>
            );
        }
    }

    render() {
        return (

            <Animatable.View animation='fadeInUp' duration={400}>

                <ListItem button avatar onPress={() => {
                    Actions.memberInfo({member : this.props.item});
                }}>
                    <Left>
                        {this.renderThumbnail()}
                    </Left>
                    <Body>
                    <Text>{this.props.item.name}</Text>
                    {this.renderPosition()}
                    <Text note numberOfLines={2}>{this.props.item.bio}</Text>

                    </Body>
                </ListItem>

            </Animatable.View>


        )
    }
}

export default class MemberList extends Component{


    state = { isLoading : true, members : []};

    componentWillMount(){
        this.fetchData();
    };

    fetchData(){
        if(this.state.isLoading){
            firebase.database().ref('/circles/' + this.props.circle +'/members').once('value').then(snapshot => {

                this.setState({
                    isLoading : false,
                    members : snapshot.val()
                });

            }).catch(e => {
                console.log("firebase error", e);
                return null;
            });
        }
    };

    flatten(array) {
        return array.reduce((flat, toFlatten) => (
            flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
        ), [])
    }

    getValuesForKey(key, item) {
        const keys = key.split('.');
        let results = [item];
        keys.forEach(_key => {
            let tmp = [];
            results.forEach(result => {
                if (result) {
                    if (result instanceof Array) {
                        const index = parseInt(_key, 10);
                        if (!isNaN(index)) {
                            return tmp.push(result[index])
                        }
                        result.forEach(res => {
                            tmp.push(res[_key])
                        })
                    } else if (result && typeof result.get === 'function') {
                        tmp.push(result.get(_key))
                    } else {
                        tmp.push(result[_key])
                    }
                }
            });

            results = tmp
        });

        // Support arrays and Immutable lists.
        results = results.map(r => (r && r.push && r.toArray) ? r.toArray() : r);
        results = this.flatten(results);

        return results.filter(r => typeof r === 'string' || typeof r === 'number')
    }

    searchStrings(strings, term, {caseSensitive, fuzzy, sortResults} = {}) {
        strings = strings.map(e => e.toString());

        try {
            if (fuzzy) {
                if (typeof strings.toJS === 'function') {
                    strings = strings.toJS()
                }
                const fuse = new Fuse(
                    strings.map(s => { return {id: s} }),
                    { keys: ['id'], id: 'id', caseSensitive, shouldSort: sortResults }
                );
                return fuse.search(term).length
            }
            return strings.some(value => {
                try {
                    if (!caseSensitive) {
                        value = value.toLowerCase()
                    }
                    if (value && value.search(term) !== -1) {
                        return true
                    }
                    return false
                } catch (e) {
                    return false
                }
            })
        } catch (e) {
            return false
        }
    }

    createFilter(term,keys, options = {}){
        return (item) => {
            if (term === '') { return true }

            if (!options.caseSensitive) {
                term = term.toLowerCase()
            }

            const terms = term.split(' ');

            if (!keys) {
                return terms.every(term => this.searchStrings([item], term, options))
            }

            if (typeof keys === 'string') {
                keys = [keys]
            }

            return terms.every(term => {
                // allow search in specific fields with the syntax `field:search`
                let currentKeys;
                if (term.indexOf(':') !== -1) {
                    const searchedField = term.split(':')[0];
                    term = term.split(':')[1];
                    currentKeys = keys.filter(key => key.toLowerCase().indexOf(searchedField) > -1)
                } else {
                    currentKeys = keys
                }

                return currentKeys.some(key => {
                    const values = this.getValuesForKey(key, item);
                    return this.searchStrings(values, term, options)
                })
            })
        }
    }


    _renderItem = ({item}) => (
        <MyListItem
            item={item}
        />
    );


    displayContent(){
        if(this.state.isLoading) {
            return (
                <View style={{paddingTop:220}}>
                    <Spinner color='green'/>
                </View>
            );
        }else{
            const members = _.values(this.state.members);
            const filteredMembers = members.filter(this.createFilter(this.props.searchText, ['name']));
            return(
                <Animatable.View animation='bounceInUp' duration={1500}>

                    <FlatList
                        data={filteredMembers}
                        renderItem = {this._renderItem}
                        keyExtractor={(item, index) => index.toString()}

                    />
                </Animatable.View>
            );
        }
    }

    render() {
        return this.displayContent();

    }
}