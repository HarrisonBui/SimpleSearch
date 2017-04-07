import React from 'react'
import { ScrollView, Text, Image, View, ListView, StyleSheet, Button, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

// Styles
import Row from './Row'
import SearchBar from 'react-native-material-design-searchbar'


export default class TrackedItems extends React.Component {

  render () {
    return (
      <View>
        <TouchableOpacity style={stylesbtn.button} onPress={Actions.launchScreen}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <SearchBar
          onSearchChange={() => console.log('On Focus')}
          height={25}
          onFocus={() => console.log('On Focus')}
          onBlur={() => console.log('On Blur')}
          placeholder={'Find what you are looking for!'}
          autoCorrect={false}
          padding={5}
          returnKeyType={'search'}
        />
      </View>
    )
  }
}

// renderHeader={() => <Header />}   search bar
// renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}   Letter seperator like phone book
