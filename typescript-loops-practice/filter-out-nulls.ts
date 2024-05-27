/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const exceptNull: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) exceptNull.push(values[i]);
  }
  return exceptNull;
}
