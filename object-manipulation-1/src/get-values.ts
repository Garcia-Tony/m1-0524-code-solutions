/* exported getValues */
function getValues(object: object): any {
  const array: any = [];

  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
