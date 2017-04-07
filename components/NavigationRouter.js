import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LaunchScreen from './LaunchScreen'
import Search from './Search'
import Item from './Item'
import TrackedItems from './TrackedItems'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
            <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
            <Scene key="search" component={Search} title='searchScreen'/>
            <Scene key="item" component={Item} title="singleItem" />
            <Scene key="trackedItems" component={TrackedItems} title="singleItem" />
      </Router>
    )
  }
}

export default NavigationRouter
