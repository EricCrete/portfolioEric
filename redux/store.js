// redux/store.js
import { createStore } from 'redux';
import temoignagesReducer from './temoignagesReducer';

const store = createStore(temoignagesReducer);

export default store;