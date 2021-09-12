import * as types from '../action-types';
let initState = {
    number: 0
};
export default function counter1(state = initState, action) {
    switch (action.type) {
        case types.ADD1:
            return {
                number: state.number + 1
            };
        case types.MINUS1:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}