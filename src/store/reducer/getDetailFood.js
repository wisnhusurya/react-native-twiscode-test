import * as types from '../action/getDetailFood';
const initialState = {
  respGetDetailFoodOk: null,
  respGetDetailFoodFail: null,
};
const getDetailFood = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAIL_FOOD_OK:
       console.log('Reducer OK: ', action.data);
      return {
        ...state,
        respGetDetailFoodOk: action.data,
      };
    case types.GET_DETAIL_FOOD_FAIL:
       console.log('Reducer FAIL: ', action.data);
      return {
        ...state,
        respGetDetailFoodFail: action.data,
      };
    default:
      return state;
  }
};
export default getDetailFood;
