import { createStore } from 'redux';
import listReducer from './reducer';

const initialState = {
    listReducer: ['Angular', 'Ionic', 'WordPress', 'Woocommerce', 'React']
};
const store = createStore(listReducer, initialState);
// store.dispatch(updateList(10));

export default store; 