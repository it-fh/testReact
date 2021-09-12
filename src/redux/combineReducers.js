
export default function combineReducers(reducers){
    let reducerKeys = Object.keys(reducers);
    return function(state = {},action){
        let hasChanged = false;
        const nextState = {};
        for(let i = 0;i<reducerKeys.length;i++){
            const key = reducerKeys[i];
            const previousStateForKey = state[key];
            const reducer = reducers[key];
            let nextStateForKey = reducer(previousStateForKey,action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey!==previousStateForKey;
            console.log(nextStateForKey,previousStateForKey);
            console.log(hasChanged);
        }
        return hasChanged?nextState:state;  
    }
}