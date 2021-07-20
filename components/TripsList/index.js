  
import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import TripItem from "../TripItem";

import styles from './styles';
import trips from './trips';

const TripsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        renderItem={({item}) => <TripItem trip={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default TripsList;