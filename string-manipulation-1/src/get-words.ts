/* exported getWords */
function getWords(string: any): any[] {
  if (string.length > 0) {
    return string.split(' ');
  } else {
    return [];
  }
}
