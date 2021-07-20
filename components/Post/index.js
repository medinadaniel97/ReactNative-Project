import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';



const Post = (props) => {

  const post = props.post;


  return (
    <View style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri:post.image}}
      />

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={9}>
        {post.type}. {post.about}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.price}>  ${post.newPrice} </Text>
        / person
      </Text>

    </View>
  );
};

export default Post;