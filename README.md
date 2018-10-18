# ArrMan-A-library-for-Array-Manipulation
This project is just for demonstration my coding skill

Using the library:

**DOCS:**

_Using Array **Chunk**_
```js
ArrMan.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
ArrMan.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

_Using Array **Compact**_
```js
ArrMan.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

_Using Array **Concat**_
```js
const array = [1];
ArrMan.concat(array, 2, [3], [[4]]);
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```

_Using Array **difference**_
```js
const array = [1];
ArrMan.difference([2, 1], [2, 3]);
// => [1]
```

_Using Array **Drop**_
```js
ArrMan.drop([1, 2, 3]);
// => [2, 3]
 
ArrMan.drop([1, 2, 3], 2);
// => [3]
 
ArrMan.drop([1, 2, 3], 5);
// => []
 
ArrMan.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

_Using Array **DropRight**_
```js
ArrMan.dropRight([1, 2, 3]);
// => [1, 2]
 
ArrMan.dropRight([1, 2, 3], 2);
// => [1]
 
ArrMan.dropRight([1, 2, 3], 5);
// => []
 
ArrMan.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

_Using Array **Fill**_
```js
var array = [1, 2, 3];
 
ArrMan.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
ArrMan.fill(Array(3), 2);
// => [2, 2, 2]
 
ArrMan.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```

_Using Array **fromPairsToObject**_
```js
ArrMan.fromPairsToObject([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```

_Using Array **Head**_
```js
ArrMan.head([1, 2, 3]);
// => 1
 
ArrMan.head([]);
// => undefined
```

_Using Array **IndexOf**_
```js
ArrMan.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
ArrMan.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

_Using Array **Initial**_
```js
ArrMan.initial([1, 2, 3]);
// => [1, 2]
```

_Using Array **Intersection**_
```js
ArrMan.intersection([2, 1], [2, 3]);
// => [2]
```

_Using Array **Join**_
```js
ArrMan.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

_Using Array **Last**_
```js
ArrMan.last([1, 2, 3]);
// => 3
```

_Using Array **LastIndexOf**_
```js
ArrMan.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
ArrMan.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```

_Using Array **Pull**_
```js
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
ArrMan.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

_Using Array **PullInTheSameArray**_
```js
// Note that it returns array itself, instead of creating new one.
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
ArrMan.pullInTheSameArr(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

_Using Array **PullAll**_
```js
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
ArrMan.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```