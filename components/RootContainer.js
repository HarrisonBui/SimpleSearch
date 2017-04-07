import { View, StatusBar } from 'react-native'
import NavigationRouter from './NavigationRouter'


class RootContainer extends Component {

  render () {
    return (
      <View>
        <StatusBar barStyle='dark-content' />
        <NavigationRouter />
      </View>
    )
  }
}

export default RootContainer;
