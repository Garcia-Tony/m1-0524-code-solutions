"use strict";
/* exported filterOutNulls */
function filterOutNulls(values) {
    const exceptNull = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== null)
            exceptNull.push(values[i]);
    }
    return exceptNull;
}
