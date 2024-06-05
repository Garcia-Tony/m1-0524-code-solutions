/* exported omit */
function omit(source: any, keys: string[]): any {
  const omits: any = {};
  for (const i in keys) {
    const key = keys[i];
    if (!(key in source && source[key] !== undefined)) {
      omits[key] = source[key];
    }
  }

  return omits;
}
