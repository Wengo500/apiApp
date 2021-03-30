import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, TouchableOpacity, ScrollView  } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

import Card from './Card';
import {getCard} from '../redux/thunk/getCardAction'

export default function Main({navigation}) {

  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.items)

  useEffect(() => {
    dispatch(getCard())
  }, [])
  
  const renderCards = () => cards.map((card, id) => 
    <TouchableOpacity
      key={id} 
      onPress={() => {navigation.navigate('Card page', {param: card})}}
    >
      <Card card={card}/>
    </TouchableOpacity>
  )
  
  return  <ScrollView>
            <View style={styles.container}>
              {renderCards()}
            </View>
          </ScrollView>
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(200, 200, 230, 1)',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
