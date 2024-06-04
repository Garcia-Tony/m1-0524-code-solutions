/* exported take */
function take(array: any[], count: number): any[] {
  const arr: any[] = [];
  for (let i = 0; i < count && i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
