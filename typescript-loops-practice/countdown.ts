/* exported countdown */
function countdown(num: number): number[] {
  const numbers: number[] = [];
  for (let i = num; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers;
}
