import { getDetailFood } from '../../api';
export const GET_DETAIL_FOOD_OK = 'GET_DETAIL_FOOD_OK';
export const GET_DETAIL_FOOD_FAIL = 'GET_DETAIL_FOOD_FAIL';
export const requestGetDetailFood = (id_food) => dispatch => {

    getDetailFood(id_food).then(({ data }) => {
        dispatch(respGetDetailFoodOk(data));
    }).catch(e => {
        dispatch(respGetDetailFoodFail(e));
    });
};
const respGetDetailFoodOk = data => {
    return {
        type: GET_DETAIL_FOOD_OK,
        data,
    };
};
const respGetDetailFoodFail = data => {
    return {
        type: GET_DETAIL_FOOD_FAIL,
        data,
    };
};