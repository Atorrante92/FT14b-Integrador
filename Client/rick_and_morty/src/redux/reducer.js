import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './action-types';

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload, 
        allCharacters: action.payload 
      }

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload
      }

    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload);
      return {
        ...state,
        myFavorites: action.payload === 'allCharacters' ? [...state.allCharacters] : allCharactersFiltered
      }
    
    case ORDER:
      const allCharatersFavCopy = [...state.allCharacters];
      // if(action.payload === 'A') {
      //   allCharatersFavCopy.sort(function(a, b) {
      //     return a.id - b.id;
      //   });
      // } else if(action.payload === 'D') {
      //   allCharatersFavCopy.sort(function(a, b) {
      //     return b.id - a.id;
      //   });
      // }
      // return {
      //   ...state,
      //   myFavorites: allCharatersFavCopy
      // }
      return {
        ...state,
        myFavorites: action.payload === 'A' ? allCharatersFavCopy.sort((a, b) => a.id - b.id) : allCharatersFavCopy.sort((a, b) => b.id - a.id)
      }

    default:
      return { ...state }
  }
};

export default reducer;