import React, {Component} from 'react';
import {Text, View, Button, NetInfo, NativeModules} from 'react-native';


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

  export default ScreenA;