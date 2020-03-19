

import { ADD_FOOD, DELETE_FOOD } from './actionTypes'


const initialState = {

    foodList: [
        { id: "1", name: "popcorn" },
        { id: "2", name: "snacks" },
        { id: "3", name: "junk" },
    ]

}



const foodReducer = (state = initialState.foodList, action) => {

    console.log(action)


    switch (action.type) {

        case ADD_FOOD:

            let id = Math.random()

            let newFood = {

                id: id,
                name: action.data
            }

            return [...state, newFood];

        case DELETE_FOOD:


            let newState = state.filter((x) => {

                return x.id != action.id

            })
            return newState
        default:
            return state

    }

    return state;





}


export default foodReducer;