  
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    
    
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff'
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 26,
    color: '#fff'
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;