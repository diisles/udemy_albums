// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Exponent from 'exponent';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );


// Render it to the device using Exponent
Exponent.registerRootComponent(App);


// Used to Render to device when Not using Exponent.  AppRegistry.registerComponent('albums', () => App);
