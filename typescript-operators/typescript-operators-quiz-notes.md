# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The logical AND returns true if both operands are true, and false otherwise. The logical OR returns true if at least one of the operands is true, and false otherwise. Logical AND can be used outside of an if statement by returning a value based on truthiness while Logical OR can be used outside of an if statement by returning a the first value based on falsy-ness.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation is a programming concept where the evaluation of a logical expression is stopped as soon as the outcome is determined. In logical AND an expression A and B will return B if A is true. In Logical OR an expression A and B will return B if A is false.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish operator checks for null or undefined. The difference between nullish and OR is that nullish checks for null or undefined while OR checks for falsy.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  Ternary Operator is a better easier way to write conditional expressions in JS. The difference is that there is less code in the ternary operator than in an if/else statement but essentially give the same results.

- What is the `?.` (optional chaining) operator? When would you use it?
  Optional Chaining allows you to access nested properties of an object. When you're trying to access properties that are likely undefined, attempting to define it.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The (spread) syntax is used to access an array or object and be able to be placed in a new different array or object as well as be able to add onto that new array or object.

- What data types can be spread into an array? Into an object?
  You can spread array data to an array but not object data, and you can spread object data into an object but not array data.

- How does spread syntax differ from rest syntax?
  Rest syntax is used to collect elements, while spread syntax adds and spreads elements into an new array or object.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
