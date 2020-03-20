

import { ADD_FOOD, DELETE_FOOD, ASYNC } from './actionTypes';

export const addFood = (food) => {

    return {
        type: ADD_FOOD,
        data: food
    }

}




export const deleteFood = (id) => {

    return {

        type: DELETE_FOOD,
        id: id,
    }


}

export const thunk = () => {

    return (dispatch) => {

        fetch("https://jsonplaceholder.typicode.com/users").
            then((response) => response.json()).
            then((response2) => console.log(response2[0].name))


    }


}