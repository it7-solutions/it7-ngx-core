(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['it7-ngx'] = global['it7-ngx'] || {}, global['it7-ngx']['it7-core'] = {})));
}(this, (function (exports) { 'use strict';

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

exports.It7Dictionary = It7Dictionary;
exports.It7Utils = It7Utils;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=it7-ngx-it7-core.umd.js.map
