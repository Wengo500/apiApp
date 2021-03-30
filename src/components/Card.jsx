import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width

export default function Card({card}) {
  return (
      <View style={styles.card}>
        <Image 
          source={{uri: card.image}}
          style={{
            width: screenWidth / 2.1,
            height: screenWidth / 3}}
        /> 
        <Text style={styles.text}>{`${card.name}`}</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    margin: 2,
    backgroundColor: ' rgba(248, 248, 248, 0.5)',
    width: screenWidth / 2.1,
    height: screenWidth / 3
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    backgroundColor: 'black',
  }
});