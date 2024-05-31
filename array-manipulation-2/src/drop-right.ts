/* exported dropRight */
function dropRight(array: any[], count: number): any {
  const arr: any[] = [];
  for (let i = 0; i < array.length - count; i++) {
    arr.push(array[i]);
  }
  return arr;
}
