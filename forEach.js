let vowels = ['a', 'e', 'i', 'o', 'u'];

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(num) {
        newArr.push(num*2);
    });
    return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(num) {
        if (num % 2 === 0) {
            newArr.push(num);
        }
    });
    return newArr;
}


function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(str) {
        newArr.push(str.charAt(0) + str.charAt(str.length - 1));
    });
    return newArr;
}

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(obj) {
        obj[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let lowerStr = str.toLowerCase();
    let obj = new Object();
    let strArray = Array.from(lowerStr);
    strArray.forEach(function(charr) {
        if (vowels.includes(charr)) {
            if (charr in obj) {
                obj[charr]++;
            } else {
                obj[charr] = 1;
            }
        }
    });
    return obj;
}

function doubleValuesWithMap(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function(val, i) {
        return val * i;
    });
}

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return val["first"] + " " + val["last"];
    });
}

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return key in val;
    });
}

function find(arr, val) {
    return arr.filter(function(value) {
        return value === val;
    })[0];
}

function findInObj(arr, key, searchVal) {
    return arr.filter(function(val) {
        return val[key] === searchVal;
    })[0];
}

function removeVowels(str) {
    let lowerStr = str.toLowerCase();
    let strArray = lowerStr.split("");
    console.log(strArray);
    return strArray.filter(function(charr) {
        return !vowels.includes(charr);
        console.log(charr);
    }).join("");
}

function doubleOddNumbers(arr) {
    let filtered = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    return filtered.map(function(num) {
        return num * 2;
    });
}

