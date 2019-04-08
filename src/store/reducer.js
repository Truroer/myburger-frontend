import * as actionsType from "./actions";
const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0
  },
  totalPrice: 4
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.val]: state.ingredients[action.val] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.val]
      };
    case actionsType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.val]: state.ingredients[action.val] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.val]
      };
    default:
      return state;
  }
};

export default reducer;
