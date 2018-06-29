var It7Dictionary = /** @class */ (function () {
    function It7Dictionary() {
    }
    return It7Dictionary;
}());
var It7Utils = /** @class */ (function () {
    function It7Utils() {
    }
    It7Utils.removeFromArray = function (array, comparator) {
        var i = array.length;
        while (i--) {
            if (comparator(array[i], i)) {
                array.splice(i, 1);
            }
        }
    };
    return It7Utils;
}());

export { It7Dictionary, It7Utils };
//# sourceMappingURL=it7-ngx-it7-core.js.map
