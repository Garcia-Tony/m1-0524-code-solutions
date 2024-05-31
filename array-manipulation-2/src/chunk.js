'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = [];
    for (let j = 0; j < size && i + j < array.length; j++) {
      chunk.push(array[i + j]);
    }
    chunks.push(chunk);
  }
  return chunks;
}
