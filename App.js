import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import TripsList from './components/TripsList';
import Header from './components/Header';
import 'react-native-gesture-handler';
import Post from './components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];

export default function App() {
  return (
    <View style={styles.container}>
   
      <TripsList />
      <Header /> 
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
