# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
They are used to simplify working with Promises, making asynchronous code easier to write and read.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
Promises use . then() and . catch() for handling asynchronous operations and chaining, while async/await provides a more readable, synchronous-like syntax for managing asynchronous code with try/catch for error handling.

- When do you use `async`?
You should use async in JavaScript when you need to work with asynchronous code and want to make the code easier to read

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
The await keyword is used to indicate that the JavaScript Runtime should "wait" or "pause" until the asynchronous function completes. So you should use await when you intend to create a pause. You don't use await when you want to execute the promises. Nothing happens, the function will just wait.

- How do you handle errors with `await`?
With try…catch

- What do `try`, `catch` and `throw` do? When do you use them?
The try block contains the code that you want to monitor for errors. The catch block is used to handle the error that was thrown in the try block. The throw statement is used to create and signal an error intentionally. You use try and catch when you're executing a code that might fail and you use throw when you need to signal an error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
The promise will still execute. The rejection will not be caught.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
It's tough between promise.then and async/await, promise.then seems straightforward to me but I know async/await is way easier to code. As i am learning i believe the async/await is best because it is much more simpler.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
