/* exported getKeys */
function getKeys(object: any): any {
  const array: any = [];

  for (const key in object) {
    array.push(key);
  }
  return array;
}
