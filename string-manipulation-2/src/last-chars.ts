/* exported lastChars */
function lastChars(length: number, string: string): any {
  let char: any = '';
  for (let i = string.length - length; i < string.length; i++) {
    char += string[i];
  }
  if (string.length < length) {
    return string;
  } else {
    return char
  }
}
