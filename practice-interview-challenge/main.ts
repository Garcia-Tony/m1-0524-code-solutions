function getRangeReport (start: number, end: number): any {
let total = 0;
const odds = [];
const evens = [];
const range = [];


for (let i = start; i <= end; i++) {
  range.push(i);
  total += i;

  if (i % 2 === 0) {
    evens.push(i);
  } else {
    odds.push(i);
  }

}
 const average = (start + end)/ 2;

const result = {
total: total,
odds: odds,
evens: evens,
range: range,
average: average
}

return result;
}
