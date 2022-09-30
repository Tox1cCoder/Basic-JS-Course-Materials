console.log('Tự viết ra hàm find, filter, some, every, reduce, map, forEach');

var courses1 = ['Javascript', 'PHP', 'Ruby', 'Dart', 'C#', 'C++'];

var courses2 = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0,
        isFinish: false,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
        isFinish: false,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 200,
        isFinish: true,
    },
    {
        id: 4,
        name: 'C#',
        coin: 200,
        isFinish: true,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 200,
        isFinish: false,
    },
    {
        id: 6,
        name: 'Dart',
        coin: 300,
        isFinish: false,
    },
    {
        id: 7,
        name: 'PHP',
        coin: 0,

        isFinish: true,
    },
];

console.log('----------------find2()---------------');

Array.prototype.find2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var resultFind2 = callback(this[i], parseInt(i));
            if (resultFind2) {
                resultFind2 = this[i];
                return resultFind2;
            }
        }
    }
};

var opfind2 = courses2.find2((course, index) => {
    console.log(index);
    return course.id === 5;
});

console.log(opfind2);

console.log('----------------filter2()---------------');

Array.prototype.filter2 = function (callback) {
    var outputFilter2 = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var resultFilter2 = callback(this[i], parseInt(i), this);
            if (resultFilter2) {
                outputFilter2.push(this[i]);
            }
        }
    }
    return outputFilter2;
};

var opfilter2 = courses2.filter2((course, index, array) => {
    console.log(index);
    return course.coin > 0;
});

console.log(opfilter2);

console.log('----------------Some2()---------------');

Array.prototype.some2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], parseInt(i), this)) {
                return true;
            }
        }
    }
    return false;
};

var opSome2 = courses2.some((course, index, array) => {
    return course.isFinish;
});

console.log('Some: ' + opSome2);

console.log('----------------every2()---------------');

Array.prototype.every2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (!callback(this[i], parseInt(i), this)) {
                return false;
            }
        }
    }
    return true;
};

var opEvery2 = courses2.every2((course, index, array) => {
    console.log(index);
    return course.coin < 500;
});

console.log(opEvery2);

console.log('----------------reduce2()---------------');

Array.prototype.reduce2 = function (callback, inittialValue) {
    var i = 0;
    if (arguments.length < 2) {
        i = 1;
        inittialValue = this[0];
    }
    for (; i < this.length; i++) {
        inittialValue = callback(inittialValue, this[i], i, this);
    }
    return inittialValue;
};

var number = [100, 200, 220, 200, 480];
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var opReduce2 = depthArray.reduce2((output, course, index, array) => {
    return output.concat(course);
}, []);

console.log(opReduce2);

console.log('----------------map2()---------------');

Array.prototype.map2 = function (callback) {
    var outputMap2 = [];
    for (var i = 0; i < this.length; i++) {
        var resultMap2 = callback(this[i], i, this);
        outputMap2.push(resultMap2);
    }
    return outputMap2;
};

var opMap2 = courses2.map2((course, index, array) => {
    return {
        id: course.id,
        name: `Khóa học ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        array: courses2,
    };
});

console.log(opMap2);
