import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text>Ini Profil</Text>
        <Button onPress={this._signOutAsync} title="Logout" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
