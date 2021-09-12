import * as types from '../action-types';
let initState = {
    number: 0
};
export default function counter2(state = initState, action) {
    switch (action.type) {
        case types.ADD2:
            return {
                number: state.number + 1
            };
        case types.MINUS2:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}