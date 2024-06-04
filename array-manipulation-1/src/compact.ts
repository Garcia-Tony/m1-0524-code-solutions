/* exported compact */
function compact(array: any): any[] {
  const arr: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) arr.push(array[i]);
  }
  return arr;
}
