import { getListSeafood } from '../../api';
export const GET_LIST_SEAFOOD_OK = 'GET_LIST_SEAFOOD_OK';
export const GET_LIST_SEAFOOD_FAIL = 'GET_LIST_SEAFOOD_FAIL';
export const requestGetListSeafood = () => dispatch => {

    getListSeafood().then(({ data }) => {
        dispatch(respGetListSeafoodOk(data));
    }).catch(e => {
        dispatch(respGetListSeafoodFail(e));
    });
};
const respGetListSeafoodOk = data => {
    return {
        type: GET_LIST_SEAFOOD_OK,
        data,
    };
};
const respGetListSeafoodFail = data => {
    return {
        type: GET_LIST_SEAFOOD_FAIL,
        data,
    };
};