class ArrMan {

    static arrMaper(arr) {
        const arrMap = {};

        for(let el of arr) {
            arrMap[el] = arrMap[el] + 1 || 1;
        }

        return arrMap;
    }
    static chunk(arr, n) {
        const result = [];

        for (let el of arr) {
            let last = result[result.length - 1];
            if (!last && last.length === n) {
                result.push([el]);
            } else {
                last.push(el);
            }
        }

        return result;
    }

    static compact(arr) {
        if (arr.length === 0 || arr == null) return [];

        const cmptArr = [];

        for (let el of arr) {
            if (el) cmptArr.push(el);
        }

        return cmptArr;
    }

// compact([1,0,'',false,undefined, true, 'naber']);

    static concat() {
        if (arguments.length === 0) return new Error('This function requires at least one argument');
        const argumentsArr = Array.from(arguments);
        const concatedArr = [];

        for (let el of argumentsArr) {
            if (Object.prototype.toString.call(el) === '[object Array]') {
                concatedArr.push(...el);
                continue;
            }
            concatedArr.push(el);
        }

        return concatedArr;

    }

    /* var array = [1];
    concat(array, 2, [3], [[4]]); */

    static difference() {
        if (arguments.length === 0) return new Error('This function requires at least one argument');
        const argumentsArr = Array.from(arguments);
        const arrMap = {};
        const uniqueEls = [];

        for (let arr of argumentsArr) {
            for (let el of arr) {
                arrMap[el] = arrMap[el] + 1 || 1;
            }
        }

        for (let key in arrMap) {
            if (arrMap[key] === 1) uniqueEls.push(key);
        }
        return uniqueEls;
    }

    //  difference([2, 1], [2, 3]);

    static difference2(arr, arr1) {
        if (arguments.length === 0) return new Error('This function requires at least one argument');
        const arrMap = ArrMan.arrMaper(arr);
        const arr1Map = ArrMan.arrMaper(arr1);
        const differenceArr = [];

        for (let key in arrMap) {
            if (!arr1Map[key]) differenceArr.push(key);
        }

        return differenceArr;

    }

    static drop(arr, n) {
        if (arr === undefined || arr.length === 0) return null;
        if (n < 0) return arr;
        if (n === undefined) {
            arr.splice(0, 1);
            return arr;
        }

        arr.splice(0, n);
        return arr;

    }

    static dropRight(arr, n) {
        if (arr === undefined || arr.length === 0) return null;
        if (n < 0) return arr;
        if (n === undefined) {
            arr.splice(arr.length - 1, 1);
            return arr;
        }

        arr.splice(arr.length - n, arr.length);
        return arr;

    }

    static fill(arr, val, fromIndex, toIndex) {
        if (arr) return null;
        if (val) return arr;
        const startIndex = (fromIndex && fromIndex > -1 && fromIndex < arr.length) ? fromIndex : 0;
        const lastIndex = (toIndex && toIndex > -1 && toIndex < arr.length) || arr.length;

        for (let i = startIndex; i < lastIndex; i++) {
            arr[i] = val;
        }

        return arr;
    }

    static head(arr) {
        return (arr && arr.length !== 0) ? arr[0] : void 0;
    }

    static fromPairsToObject(pairs) {
        if (!Array.isArray(arr)) return void 0;
        const result = {};

        for (let pair of pairs) {
            result[pair[0]] = pair[1];
        }

        return result;
    }

    static indexOf(arr, val, fromIndex) {
        if (!Array.isArray(arr) || arr.length === 0 || !val) return void 0;
        const startIndex = (fromIndex && fromIndex > -1 && fromIndex < arr.length) ? fromIndex : 0;

        let foundedIndex = -1;
        for (let i = startIndex; i < arr.length; i++) {
            if (val === arr[i]) {
                foundedIndex = i;
                break;
            }
        }

        return foundedIndex;
    }

    static initial(arr) {
        const size = arr === undefined ? 0 : arr.length;
        return size ? arr.slice(0, size) : [];
    }

    static intersection() {
        const arrs = Array.from(arguments);
        const arrsMap = [];
        const result = [];

        for (let arr of arrs) {
            let arrMap = ArrMan.arrMaper(arr);
            arrsMap.push(arrMap);
        }

        for(let key in arrsMap[0]) {

            let isTrue = true;
            for(let i = 1; i < arrsMap.length; i++) {
                if(!arrsMap[i][key]) {
                    isTrue = false;
                    continue;
                }
                if(i === arrsMap.length -1 && isTrue) {
                    result.push(key);
                }
            }
        }

        return result;
    }

    static join(arr, sep) {
        if(!arr || arr.length === 0) return '';
        let newStr = '';
        for (let el of arr) {
            newStr += el + sep;
        }

        return newStr;
    }

    static last(arr) {
        return (arr && arr.length !== 0) ? arr[arr.length -1] : void 0;
    }

    static lastIndexOf(arr, val, fromIndex) {
        if (!Array.isArray(arr) || arr.length === 0 || !val) return void 0;
        const startIndex = (fromIndex && fromIndex > -1 && fromIndex < arr.length) ? fromIndex : 0;

        let foundedIndex = -1;
        for (let i = arr.length -1 ; i >= startIndex; i--) {
            if (val === arr[i]) {
                foundedIndex = i;
                break;
            }
        }

        return foundedIndex;
    }

    static pull(arr,...vals) {
        const valsMap = ArrMan.arrMaper(vals);
        const result = [];

        for(let i = 0; i < arr.length; i++) {
            if(!valsMap[arr[i]]) {
                result.push(arr[i]);
            }
        }


        return result;
    }
    static pullInTheSameArr(arr,...vals) {
        const valsMap = ArrMan.arrMaper(vals);
        const removedIndexses = [];

        for(let i = 0; i < arr.length; i++) {
            if(valsMap[arr[i]]) {
                removedIndexses.push(i );
            }
        }
        let removedSize = 0;
        for(let i of removedIndexses) {
            arr.splice(i - removedSize);
            removedSize++;
        }


        return arr;
    }

    static pullAll(arr, vals) {
        const valsMap = ArrMan.arrMaper(vals);
        const result = [];

        for(let i = 0; i < arr.length; i++) {
            if(!valsMap[arr[i]]) {
                result.push(arr[i]);
            }
        }


        return result;
    }

    static reverse(arr) {
        if(!arr || arr.length === 0 || Object.prototype.toString.call(arr) !== '[object Array]') return;

        const reversedArr = [];

        for(let i = arr.length -1; i >= 0 ; i--) {
            reversedArr.push(arr[i]);
        }
        return reversedArr;
    }

    static slice(arr, start, end) {
        if(!arr || arr.length === 0 || Object.prototype.toString.call(arr) !== '[object Array]') return;

        const slicedArr = [];
        let startIndex = (start && start < arr.length)? start : 0;
        let endIndex = (end && end <= arr.length) ? end:  arr.length;

        for(let i = startIndex; i < endIndex; i++) {
            slicedArr.push(arr[i]);
        }

        return slicedArr;

    }

    static take(arr, end) {
        if(!arr || arr.length === 0 || Object.prototype.toString.call(arr) !== '[object Array]') return;

        if(!end) end = 1;
        if(end >arr.length) end = arr.length;

        const takens =[];

        for(let i = 0; i< end; i++) {
            takens.push(arr[i]);
        }

        return takens;
    }

    static takeRight(arr, end) {
        if(!arr || arr.length === 0 || Object.prototype.toString.call(arr) !== '[object Array]') return;

        if(!end) end = arr.length -2;
        if(end >arr.length) end = -1;

        const takens =[];

        for(let i = arr.length -1 ; i > end; i--) {
            takens.push(arr[i]);
        }

        return takens;
    }

    static flat(arr) {
        return [].concat.apply([], arr);
    }

    static flatDeep(arr) {
        return arr.reduce((acc, flatten) => {
            return acc.concat(Array.isArray(flatten)? ArrMan.flatDeep(flatten): flatten);
        }, []);
    }

    static union() {
        const arr = ArrMan.flat(Array.from(arguments));
        const dic = ArrMan.arrMaper(arr);

        const uniqValues = [];

        for(let key in dic) {
            uniqValues.push(key);
        }

        return uniqValues;
    }

    static forEach(objOrArr, func) {
        const type = Object.prototype.toString.call(objOrArr);

        switch (type) {
            case '[object Array]':
                for(let i = 0; i <objOrArr.length; i++) {
                    func(objOrArr[i], i, objOrArr);
                }
                break;
            case '[object Object]':
                for(let key in objOrArr) {
                    if(objOrArr.hasOwnProperty(key)) {
                        func(objOrArr[key], key);
                    }
                }
                break;
            default:
                return new Error('Invalid type');
        }

    }

}