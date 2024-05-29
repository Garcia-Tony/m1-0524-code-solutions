"use strict";
/* exported filterOutStrings */
function filterOutStrings(values) {
    const exceptStrings = [];
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== 'string')
            exceptStrings.push(values[i]);
    }
    return exceptStrings;
}
