/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { YellowBox } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ScreenA from './src/screen1';
import ScreenB from './src/screen2';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
YellowBox.ignoreWarnings(["Can't perform a React state"]);
YellowBox.ignoreWarnings(['Remote debugger is in a background']);
const App = createStackNavigator(
  {
    ScreenA: {screen: ScreenA},
    ScreenB: {screen: ScreenB},
  },
  {
    initialRouteName:'ScreenA',
    headerMode:'none',
  }
);

export default createAppContainer(App);

