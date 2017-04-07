import React from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class LaunchScreen extends React.Component {


  render () {
    return (
      <View>
        <ScrollView>
          <View >
            <TouchableOpacity  onPress={Actions.search}>
              <Text>Search for Something</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity  onPress={Actions.item}>
              <Text>Item Component</Text>
            </TouchableOpacity>

          </View>
          <View  >
              <TouchableOpacity  onPress={Actions.trackedItems}>
                <Text>Tracked Items Component</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
