export const FETCH_COCKTAILS_LOAD = 'fetch-cocktails/LOAD';
export const FETCH_COCKTAILS_SUCCESS = 'fetch-cocktails/LOAD_SUCCESS';
export const FETCH_COCKTAILS_FAIL = 'fetch-cocktails/LOAD_FAIL';

const initialState = {
  loading: false,
  items: [],
};

export default function cocktailsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COCKTAILS_LOAD:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_COCKTAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data.drinks,
      };
    case FETCH_COCKTAILS_FAIL:
    default:
      return state;
  }
}

export function fetchCocktails() {
  return {
    type: FETCH_COCKTAILS_LOAD,
    payload: {
      request: {
        url: '/filter.php?g=Cocktail_glass',
      }
    }
  };
}
