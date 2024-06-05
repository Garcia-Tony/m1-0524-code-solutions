/* exported truncate */
function truncate(length: any, string: any): unknown {
  let short: any = '';

  for (let i = 0; i < length; i++) {
    short += string[i];
  }
  if (string.length < length) {
    return string + '...';
  } else {
    return short + '...';
  }
}
