/* exported drop */
function drop(array: any[], count: number): any[] {
  const arr: any[] = [];
  for (let i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
