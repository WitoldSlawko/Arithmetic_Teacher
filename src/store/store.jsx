import { createStore } from 'redux';
import reducer from '../reducers/reducers.jsx';

const store = createStore(reducer, { number: undefined } );

export default store;
