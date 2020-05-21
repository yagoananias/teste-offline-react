import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginComponent from './LoginComponent'
import SignUpComponent from './SignUpComponent'
import SwiperComponent from './SwiperComponent'

const StackNavigator = createStackNavigator({
  SwiperScreen: {
    screen: SwiperComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  LoginScreen: {
    screen: LoginComponent,
    navigationOptions: {
      headerShown: false
    }
  },SignUpScreen: {
    screen: SignUpComponent,
    navigationOptions: {
      headerShown: false
    }
  }
})

export default createAppContainer(StackNavigator)