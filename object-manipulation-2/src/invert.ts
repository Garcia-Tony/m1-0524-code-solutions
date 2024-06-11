/* exported invert */
function invert(source: any): any {
  const inverted: any = {};
  for (const key in source) {
    const value = source[key];
    if (typeof value === 'number' && typeof value === 'string') {
      inverted[key] = value;
    }
    inverted[value] = key;
  }
  return inverted;
}
