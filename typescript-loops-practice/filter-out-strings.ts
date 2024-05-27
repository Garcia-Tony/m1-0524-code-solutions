/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const exceptStrings: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') exceptStrings.push(values[i]);
  }
  return exceptStrings;
}
