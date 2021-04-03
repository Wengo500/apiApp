import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';


export default function CardScreen({route}) {
  const {param} =  route.params;
  return  <View style={styles.container}>
            <Image source={{uri: param.image}} style={styles.image}/>
            <View style={styles.statusWrapper}>
              <View style={[styles.statusIndicator, 
                {backgroundColor: `${param.status === 'unknown'? 
                'grey':
                (param.status === 'Alive'? '#7cec00':'red')}`}
                ]}
              />
              <Text style={styles.text}>{param.status} - {param.species}</Text>
            </View>
            <Text style={styles.text}>Origin: {param.origin.name}</Text>
            <Text style={styles.text}>Last known location:</Text>
            <Text style={styles.text}>{param.location.name}</Text>
            

          </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3e44',
  },
  image: {
    flex: 0.8,
    marginBottom: 10,
  },
  statusIndicator: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 10,
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 25,
    color: 'white',
  }
});
