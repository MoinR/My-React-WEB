import { combineReducers } from 'redux';
import LIST from './actions';

export const listReducer = (state = [], action) => {
    if (action.type === LIST) {
        // console.log([...state, action.payload]);
        console.log(state);
        console.log(`Pay load `);
        console.log(action.payload);
        return [...state, action.payload];
    };
    return state;
}

const reducer = combineReducers({
    listReducer,
});

export default reducer; 
