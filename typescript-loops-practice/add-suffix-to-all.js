"use strict";
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
    const suffixs = [];
    for (let i = 0; i < words.length; i++) {
        suffixs.push(words[i] + suffix);
    }
    return suffixs;
}
