# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  A property of an event object that refers to the element that triggered the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of event delegation, it allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector.
- What DOM element property tells you what type of element it is?
  nodeType Property
- What does the `element.closest()` method take as its argument and what does it return?
  It takes a css selector as an argument and returns the closest ancestor of the element that matches.
- How can you remove an element from the DOM?
  element.remove();
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By using Event Delegation

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
