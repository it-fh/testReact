
import{combineReducers} from '../redux'
import counter1 from './counter1';
import counter2 from './counter2';

// export default function (state={},action){
//     let nextState = {};
//     nextState.counter1 = counter1(state.counter1,action);
//     nextState.counter2 = counter2(state.counter2,action);
//     return nextState;
// }
export default combineReducers({
    counter1,
    counter2
})