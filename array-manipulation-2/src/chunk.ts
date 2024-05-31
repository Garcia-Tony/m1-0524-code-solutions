/* exported chunk */
function chunk(array: any[], size: number): any {
  const chunks: any[] = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk: any[] = [];
    for (let j = 0; j < size && i + j < array.length; j++) {
      chunk.push(array[i + j]);
    }
    chunks.push(chunk);
  }

  return chunks;
}
