'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < chunk.length; i++) {
    for (let i = 0; i < size; i++) {
      chunks.push(array[i]);
    }
    chunks.push(array[i]);
  }
  return chunks;
}
