import React, {useCallback, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {RefreshControl, StyleSheet, View, TouchableOpacity, ScrollView  } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

import Card from './Card';
import {getCard} from '../redux/thunk/getCardAction';


export default function Main({navigation}) {

  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.items)
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getCard())
    setRefreshing(false);
  }, []);

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
  
  return  <ScrollView 
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />}
          >
            <View style={styles.container}>
              {renderCards()}
            </View>
          </ScrollView>
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3c3e44',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
