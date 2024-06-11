/* exported omit */
function omit(source: any, keys: string[]): any {
  const omits: any = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      omits[key] = source[key];
    }
  }
  return omits;
}
