/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Button, NetInfo, NativeModules} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Ping from 'react-native-ping';


const {RNReactNativePing} = NativeModules;
class ScreenA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contectionType: ''}
  }
  
  render() {
    NetInfo.getConnectionInfo().then( connectionInfo => {
      this.setState({connectionType: connectionInfo.type});
    });
    const {connectionType} = this.state;
    return(
      <View style={{flex: 1, backgroundColor:'skyblue'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Wifi: {connectionType === 'wifi'? 'On':'Off'}</Text>
          <Text>Cellular: {connectionType === 'cellular'? 'On':'Off'}</Text>
        </View>
        <View style={{height:70}}>
          <Button title="go to screenB" onPress={()=>this.props.navigation.navigate('ScreenB')}/>
        </View>
      </View>
    );
  }
}

class ScreenB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pingtime: 0, speedInfo:null};
  }
  ping = () => {
    RNReactNativePing.start('114.114.114.114').then(ms => {
      this.setState({pingtime:ms});
    }).catch(err => console.log(err));
    RNReactNativePing.getTrafficStats().then(result => {
      this.setState({speedInfo:result});
    })
  }
  componentDidMount() {
    setInterval(this.ping, 3000);
  }
  render() {
    const {pingtime, speedInfo} = this.state;
    return(
      <View style={{flex: 1, backgroundColor:'skyblue'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Ping Time(ms):{pingtime}</Text>
          <Text>Download Speed:{speedInfo?speedInfo.receivedNetworkSpeed:''}</Text>
          <Text>Upload Speed:{speedInfo?speedInfo.sendNetworkSpeed:''}</Text>
        </View>
        <View style={{height:70}}>
          <Button title="go to screenA" onPress={()=>this.props.navigation.navigate('ScreenA')}/>
        </View>
      </View>
    );
  }
}

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

