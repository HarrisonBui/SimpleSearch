import React from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'
import {Item} from './Item'
import Searcher from 'react-native-search-box';
import ModalDropdown from 'react-native-modal-dropdown'

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view'

let styles2 = StyleSheet.create({
  scrollView: {
    backgroundColor: '#778899',

  },
  horizontalScrollView: {

  }
});


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: '', results: undefined, searchType: undefined};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('hande submit');
    let url = 'https://craigslist-simple-search.herokuapp.com/craigslist' + '?search=' + this.state.search;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    let that = this;
    xhr.onload = function() {
      that.setState({results: xhr.response});
    };

    xhr.onerror = function() {
      console.log("Booo");
    };

    xhr.send();
  }

  // <input type=checkbox
  render () {

    if (this.state.results) {
      return (
        <View>
        </View>)
    }
  }
}


          // <ModalDropdown options={['option 1', 'option 2']}/>
