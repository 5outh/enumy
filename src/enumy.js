module.exports = function (arr) {
    var e = {},
        enumArr = arr;

    if (!(arr instanceof Array)) {
        // Use the arguments array if an array isn't passed in
        enumArr = arguments
    }

    for (var i = enumArr.length - 1; i >= 0; i--) {
        e[enumArr[i]] = enumArr[i];
    };
    
    return e;
};