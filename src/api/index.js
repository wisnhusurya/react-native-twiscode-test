import axios from 'axios'
import {
    BASE_URL,
    LIST_SEAFOOD,
    DETAIL_FOOD,

} from '../constants'

export const getListSeafood = () => axios.get(`${BASE_URL}${LIST_SEAFOOD}`)
export const getDetailFood = (id_food) => axios.get(`${BASE_URL}${DETAIL_FOOD}${id_food}`)