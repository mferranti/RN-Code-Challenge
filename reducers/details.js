export const FETCH_DETAIL_LOAD = 'fetch-drink/LOAD';
export const FETCH_DETAIL_SUCCESS = 'fetch-drink/LOAD_SUCCESS';
export const FETCH_DETAIL_FAILS = 'fetch-drink/LOAD_FAIL';

const parseDetails = (drink) =>
  [...Array(16).keys()].splice(1)
    .map(i => ({
      measure: drink[`strMeasure${i}`],
      ingredient: drink[`strIngredient${i}`],
    }))
    .filter(i => (
      i.measure && i.measure.trim() !== '' ||
        i.ingredient && i.ingredient.trim() !== '')
    );
// measure and ingredient null values could be '', ' ' or null.

const initialState = {};

export default function detailsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DETAIL_SUCCESS: {
      const drink = action.payload.data.drinks[0];
      const { strDrinkThumb, strInstructions, idDrink } = drink;
      return {
        ...state,
        [idDrink]: {
          strDrinkThumb,
          strInstructions,
          ingredients: parseDetails(drink), 
        },
      };
    }
    default:
      return state;
  }
}

export function fetchDetail(id) {
  return {
    type: FETCH_DETAIL_LOAD,
    payload: {
      request: {
        url: `/lookup.php?i=${id}`,
      }
    }
  };
}
