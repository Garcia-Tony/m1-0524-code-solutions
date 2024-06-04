/* exported toObject */
function toObject(keyValuePair: [string, number]): any {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];

  return object;
}
