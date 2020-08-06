import * as types from '../action/getListSeafood';
const initialState = {
  respGetListSeafoodOk: null,
  respGetListSeafoodFail: null,
};
const getListSeafood = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_SEAFOOD_OK:
       console.log('Reducer OK: ', action.data);
      return {
        ...state,
        respGetListSeafoodOk: action.data,
      };
    case types.GET_LIST_SEAFOOD_FAIL:
       console.log('Reducer FAIL: ', action.data);
      return {
        ...state,
        respGetListSeafoodFail: action.data,
      };
    default:
      return state;
  }
};
export default getListSeafood;
