let {Map,is} = require('immutable');
let map1 = Map({a:{aa:1},b:2,c:3});
let map2 = map1.set('b',50);
let map3 = map1.set('b',50);
console.log(map1===map2); //false
console.log(map1.get('b')); //2
console.log(map2.get('b')); //50
console.log(map1.get('a')===map2.get('a')); //true

// is 可以实现深比较 ，性能比deepClone高很多
console.log(is(map1,map2)); //false
console.log(is(map2,map3)); //true

