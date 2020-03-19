

import { ADD_FOOD, DELETE_FOOD } from './actionTypes';

export const addFood = (food) => {

    return {
        type: ADD_FOOD,
        data: food
    }

}




export const deleteFood = (id) => {

    return {

        type: DELETE_FOOD,
        id:id,
    }


}

