/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class It7Dictionary {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class It7Utils {
    /**
     * Удаляет из массива "array" элементы, которые "comparator" сочтет подходящими для удаления
     * @param {?} array
     * @param {?} comparator
     * @return {?}
     */
    static removeFromArray(array, comparator) {
        let /** @type {?} */ i = array.length;
        while (i--) {
            if (comparator(array[i], i)) {
                array.splice(i, 1);
            }
        }
        // let indexes: number[] = [];
        // array.forEach((arrayElement, index) => {
        //     if (comparator(arrayElement, index)) {
        //         indexes.unshift(index);
        //     }
        // });
        // indexes.forEach(i => array.splice(i, 1));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { It7Dictionary, It7Utils };
//# sourceMappingURL=it7-ngx-it7-core.js.map
