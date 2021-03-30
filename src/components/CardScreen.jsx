import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';


export default function CardScreen({route}) {
  const {param} =  route.params;

  return  <View style={styles.container}>
            <ImageBackground source={{uri: param.image}} style={styles.image}/>       
          </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(200, 200, 230, 1)',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
