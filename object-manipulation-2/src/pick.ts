/* exported pick */
function pick(source: any, keys: string[]): any {
  const picks: any = {};
  for (const index in keys) {
    const key = keys[index];
    if (key in source && source[key] !== undefined) {
      picks[key] = source[key];
    }
  }

  return picks;
}
