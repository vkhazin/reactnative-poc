/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Button, NetInfo} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


class ScreenA extends React.Component {
  
  render() {
    var connectionType;
    NetInfo.getConnectionInfo().then( connectionInfo => {
      console.log(connectionInfo.type);
      console.log(connectionInfo.effectiveType);
      connectionType = connectionInfo.type;
      console.log(connectionType);
    });
    return(
      <View style={{flex: 1, backgroundColor:'skyblue'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Wifi: {connectionType === ? 'On':'Off'}</Text>
        </View>
        <View style={{height:70}}>
          <Button title="go to screenB" />
        </View>
      </View>
    );
  }
}

class ScreenB extends React.Component {
  render() {
    return(
      <View>
        <Button title="go to screenB"/>
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
    initialRouteName:'ScreenA'
  }
);

export default createAppContainer(App);

