# ArrMan-A-library-for-Array-Manipulation
**This library is just for demonstration my coding skill and a utility that i use in my own projects.it is heavily inspired from Lodash Library, but entire implementation by me **

Using the library:

**DOCS:**

_Using Array **reduce**_
```js
ArrMan.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3
 
ArrMan.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
```

_Using Array **reduceRight**_
```js
var array = [[0, 1], [2, 3], [4, 5]];
 
ArrMan.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```

_Using Array **forEach**_
```js
ArrMan.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.
 
ArrMan.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
```

_Using Array **forEachRight**_
```js
ArrMan.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`
```

_Using Array **map**_
```js
function square(n) {
  return n * n;
}
 
ArrMan.map([4, 8], square);
// => [16, 64]
 
ArrMan.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
ArrMan.map(users, 'user');
// => ['barney', 'fred']
```

_Using Array **filter**_
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
ArrMan.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

ArrMan.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

ArrMan.filter(users, ['active', false]);
// => objects for ['fred']

ArrMan.filter(users, 'active');
// => objects for ['barney']
```

_Using Array **reject**_
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
 
ArrMan.reject(users, function(o) { return !o.active; });
// => objects for ['fred']

ArrMan.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']

ArrMan.reject(users, ['active', false]);
// => objects for ['fred']

ArrMan.reject(users, 'active');
// => objects for ['barney']
```

_Using Array **find**_
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
ArrMan.find(users, function(o) { return o.age < 40; });
// => object for 'barney'

ArrMan.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'

ArrMan.find(users, ['active', false]);
// => object for 'fred'

ArrMan.find(users, 'active');
// => object for 'barney'
```

_Using Array **every**_
```js
ArrMan.every([true, 1, null, 'yes'], Boolean);
// => false
 
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 

ArrMan.every(users, { 'user': 'barney', 'active': false });
// => false
 
ArrMan.every(users, ['active', false]);
// => true
 
ArrMan.every(users, 'active');
// => false
```

_Using Array **some**_
```js
_.some([null, 0, 'yes', false], Boolean);
// => true
 
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
 
ArrMan.some(users, { 'user': 'barney', 'active': false });
// => false
 
ArrMan.some(users, ['active', false]);
// => true
 
// The `ArrMan.property` iteratee shorthand.
ArrMan.some(users, 'active');
// => true
```

_Using Array **sample**_
```js
ArrMan.sample([1, 2, 3, 4]);
// => 2
```

_Using Array **sampleSize**_
```js
ArrMan.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
ArrMan.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```

_Using Array **shuffle**_
```js
ArrMan.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

_Using Array **shuffle**_
```js
ArrMan.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

_Using Array **reverse**_
```js
ArrMan.size([1, 2, 3]);
// => 3
 
ArrMan.size({ 'a': 1, 'b': 2 });
// => 2
 
ArrMan.size('pebbles');
// => 7
```

_Using Array **take**_
```js
ArrMan.take([1, 2, 3]);
// => [1]
 
ArrMan.take([1, 2, 3], 2);
// => [1, 2]
 
ArrMan.take([1, 2, 3], 5);
// => [1, 2, 3]
 
ArrMan.take([1, 2, 3], 0);
// => []
```

_Using Array **takeRight**_
```js
ArrMan.takeRight([1, 2, 3]);
// => [3]
 
ArrMan.takeRight([1, 2, 3], 2);
// => [2, 3]
 
ArrMan.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
ArrMan.takeRight([1, 2, 3], 0);
// => []
```

_Using Array **union**_
```js
ArrMan.union([2], [1, 2]);
// => [2, 1]
```

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
