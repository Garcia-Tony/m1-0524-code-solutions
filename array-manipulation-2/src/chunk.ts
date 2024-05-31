/* exported chunk */
function chunk(array: any[], size: number): any {
  const chunks: any[] = [];
  for (let i = 0; i < chunk.length; i++) {
    for (let i = 0; i < size; i++) {
      chunks.push(array[i]);
    }
    chunks.push(array[i]);
  }
  return chunks;
}
