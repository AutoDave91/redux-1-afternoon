import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    first_name: '',
    last_name: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CAT = 'UPDATE_CAT';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_ING = 'UPDATE_ING';
export const UPDATE_INS = 'UPDATE_INS';
export const UPDATE_REP = 'UPDATE_REP';

function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return{
                ...state,
                name: action.payload
            }
        case UPDATE_CAT:
            return{
                ...state,
                category: action.payload
            }
        case UPDATE_FIRST_NAME:
            return{
                ...state,
                first_name: action.payload
            }
        case UPDATE_LAST_NAME:
            return{
                ...state, 
                last_name: action.payload
            }
        case UPDATE_ING:
            const newIngredients = [...state.ingredients, action.payload]
            return{
                ...state,
                ingredients: newIngredients
            }
        case UPDATE_INS:
            const newInstructions = [...state.instructions, action.payload]
            return{
                ...state,
                instructions: newInstructions
            }
        case UPDATE_REP:
            const{name, category, first_name, last_name, ingredients, instructions}= state;
            const recipe = {name, category, first_name, last_name, ingredients, instructions}
        
            const newRep = [...state.recipes, recipe]
            return{
                ...state,
                recipes: newRep
            }
        default: return state
    }
}

export default createStore(reducer)