# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to debug and understand our code
- What is a "model"?
  a representation of a web pages content in the form of objects, allowing developers to manipulate the content, structure, and styles of a web page
- Which "document" is being referred to in the phrase Document Object Model?
  HTML document
- What is the word "object" referring to in the phrase Document Object Model?
  structure of a document
- What is a DOM Tree?
  It's referencing the tree-like structure of HTML elements.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector), getElementById(id)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector)
- Why might you want to assign the return value of a DOM query to a variable?
  To find the elements we are looking for. and accessing the element again does not require another search
- What `console` method allows you to inspect the properties of a DOM element object?
  console.log(dir)
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Allows the browser to load faster
- What does `document.querySelector()` take as its argument and what does it return?
  the argument is a string of a CSS selector and it returns the element that matches.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  the argument is a string of a CSS selector and it returns a static, or NodeList

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
