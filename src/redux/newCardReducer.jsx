const NEW_CARD = 'NEW_CARD';
 

let initialState = {
  items: [],
}
let newCardReducer = (state=initialState, action) => {
  switch(action.type) {      
    case NEW_CARD:  
      return {
        ...state,
        items: action.payload.results
      };

    default: 
      return state;
  }

}
export const newCardActionCreator = (cards) => ({type: NEW_CARD, payload: cards})

export default newCardReducer;