import axios from 'axios';
import {newCardActionCreator} from '../newCardReducer';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const URL = 'https://rickandmortyapi.com/api/character?page='

export const getCard = (page = getRandomIntInclusive(1, 34)) => {
  return async(dispatch) => {
   await axios.get(`${URL + page}`)

    .then((response) => dispatch(newCardActionCreator(response.data)))
    .catch(() => console.log('Error'))
  }
}