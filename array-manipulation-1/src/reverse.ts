/* exported reverse */
function reverse(array: any): any[] {
  const arr: any[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
