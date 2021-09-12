import isPlainObject from './utils/isPlainObject'
import actionTypes from './utils/actionTypes';
export default function createStore(reducer,preloadedState){
    if(typeof reducer !=='function'){
        throw new Error('reducer必须是一个函数');
    }
    let currentReducer = reducer; //当前的处理器
    let currentState = preloadedState; //当前转态
    let currentListeners = [];// 定义数组保存当前的监听函数
    function getState(){
        return currentState;
    }
    function dispatch(action){
        if(!isPlainObject(action)){
            throw new  Error('action 必需是一个纯对象')
        }
        if(typeof action.type ==='undefined'){
            throw new Error('action的type属性不能是undefined');
        }
        currentState = currentReducer(currentState,action);
        for (let i = 0; i < currentListeners.length; i++) {
            const listener = currentListeners[i];
            listener();
            
        }
        return action;
    }
    function subscribe(listener){
        let subscribed = true;
        currentListeners.push(listener);
        return function unsubscribe(){
            if(!subscribed) return ;
            const index = currentListeners.indexOf(listener);
            currentListeners.splice(index,1);
            subscribed = false;
        }
    }
    dispatch({type:actionTypes.INIT}) 

    return {
        getState,
        dispatch,
        subscribe
    }
}