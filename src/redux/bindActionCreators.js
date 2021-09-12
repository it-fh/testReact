export default function bindActionCreateors(actionCreateors,dispatch){
    function bindActionCreateor(actionCreateor,dispatch){
        return (...args)=>dispatch(actionCreateor(...args));
    }
    if(typeof actionCreateors === 'function'){
        return bindActionCreateor(actionCreateors,dispatch);
    }
    const boundActionCreateors = {};
    for(let key in actionCreateors){
        boundActionCreateors[key] = bindActionCreateor(actionCreateors[key],dispatch);
    }
    return  boundActionCreateors
}
