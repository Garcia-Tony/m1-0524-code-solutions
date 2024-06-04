/* exported tail */
function tail(array: any): any[] {
  const arr: any[] = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
