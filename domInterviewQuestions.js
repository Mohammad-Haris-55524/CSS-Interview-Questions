// 1. What is the DOM in JavaScript?
// Answer:
// The DOM (Document Object Model) is a programming interface for web documents that represents the page so that programs can change the
//  document structure, style, and content. It's essentially a tree-like representation of the HTML document where each node is an object representing a part of the document.

// Key Points:
// The DOM is created by the browser when a web page is loaded
// It represents the document as nodes and objects
// JavaScript can manipulate the DOM to dynamically change content, structure, and styling
// The DOM is language-neutral and can be accessed by various programming languages

// Follow-up Questions:

// How is the DOM different from HTML source code?
// The HTML source is static text, while the DOM is a live, interactive representation that can be modified. The DOM reflects current 
// state including changes made by JavaScript.

// What's the relationship between DOM and JavaScript?
// JavaScript uses the DOM API to interact with and manipulate web pages. The DOM provides methods and properties that JavaScript can 
// call to change the page.

// Deep Dive:
// The DOM is actually part of the web APIs provided by browsers, not technically part of JavaScript itself. It serves as the bridge 
// between your JavaScript code and the web page.


// 2. What are DOM nodes and what types of nodes exist?
// Answer:
// In the DOM, every part of the document is represented as a node in a tree structure. There are several types of nodes:
// Document Node: The root node that represents the entire document (document object)
// Element Nodes: Represent HTML elements (like <div>, <p>, etc.)
// Attribute Nodes: Represent attributes of elements (like class, id)
// Text Nodes: Contain the actual text content within elements
// Comment Nodes: Represent HTML comments
// DocumentType Node: Represents the <!DOCTYPE> declaration

// Example:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM Example</title>
//   </head>
//   <body>
//     <!-- This is a comment -->
//     <h1 class="title">Hello World</h1>
//   </body>
// </html>

// In this example:
// <!DOCTYPE html> is a DocumentType node
// <html> is an element node (and the root element)
// class="title" is an attribute node
// "Hello World" is a text node
// The comment is a comment node

// Follow-up Questions:

// How would you check what type a node is?
// You can use the nodeType property which returns a number (1 for element, 3 for text, etc.) or check the constructor (node.constructor.name).

// What's the difference between children and childNodes?
// children returns only element nodes, while childNodes returns all node types including text and comment nodes.


// 3. How do you select elements in the DOM?
// Answer:
// There are several methods to select elements:

// Single Element Selectors:
// document.getElementById('id'): Selects by ID
// document.querySelector('css-selector'): Selects first match of CSS selector

// Multiple Element Selectors:
// document.getElementsByClassName('class'): Selects by class name
// document.getElementsByTagName('tag'): Selects by tag name
// document.querySelectorAll('css-selector'): Selects all matches of CSS selector

// Best Practices:
// Use querySelector/querySelectorAll for complex selections as they're more flexible
// Cache selected elements in variables if you need to use them multiple times
// Be specific with selectors to improve performance

// Example:
// Single element
const header = document.getElementById('header');
const firstButton = document.querySelector('.btn');

// Multiple elements
const buttons = document.getElementsByClassName('btn');
const allButtons = document.querySelectorAll('button.btn-primary');

// Follow-up Questions:

// What's the difference between getElementsByClassName and querySelectorAll?
// getElementsByClassName returns a live HTMLCollection while querySelectorAll returns a static NodeList. Live collections update automatically when the DOM changes.

// How would you select all list items in the second unordered list on a page?
// document.querySelectorAll('ul:nth-of-type(2) li')


// 4. How do you create and add new elements to the DOM?
// Answer:
// To create and add new elements:
const newDiv = document.createElement('div');

// Add Content/Attributes:
newDiv.textContent = 'Hello World';
newDiv.className = 'box';
newDiv.setAttribute('id', 'new-box');

// Add to DOM:
// parent.appendChild(newElement): Adds as last child
// parent.insertBefore(newElement, referenceElement): Inserts before reference
// parent.prepend(newElement): Adds as first child
// parent.append(newElement): Adds as last child (can take multiple nodes)

// Performance Consideration:
// For multiple additions, use DocumentFragment to minimize reflows:
// const fragment = document.createDocumentFragment();
// for(let i = 0; i < 100; i++) {
//   const item = document.createElement('li');
//   item.textContent = `Item ${i}`;
//   fragment.appendChild(item);
// }
// list.appendChild(fragment);


// Follow-up Questions:

// What's the difference between append and appendChild?
// append() can take multiple nodes and strings, while appendChild() only takes one node. append() doesn't return anything while 
// appendChild() returns the appended node.

// How would you create and add an element with all its attributes in one operation?
// You could use insertAdjacentHTML() or set the innerHTML of a parent, though this has security implications with untrusted content.

// 5. How do you handle events in the DOM?
// Answer:
// There are three main ways to handle events:

// HTML Event Attributes (not recommended):
<button onclick="handleClick()">Click me</button>

// DOM Property:
const btn = document.querySelector('button');
btn.onclick = function() { console.log('Clicked!'); };

// addEventListener() (recommended):
btn.addEventListener('click', function(e) {
  console.log('Clicked!', e.target);
});

// Event Flow:
// Events propagate in three phases:
// Capturing phase (top to target)
// Target phase
// Bubbling phase (target to top)

// You can control propagation with:
// event.stopPropagation(): Stops the event from propagating further
// event.stopImmediatePropagation(): Stops other listeners on same element from being called
// event.preventDefault(): Prevents default browser behavior

// Best Practices:
// Use addEventListener for flexibility (multiple handlers, better control)
// Consider event delegation for dynamic content or many similar elements
// Remove event listeners when no longer needed to prevent memory leaks

// Follow-up Questions:

// What is event delegation and why is it useful?
// Event delegation is adding a single event listener to a parent element to handle events for multiple children. It's efficient for dynamic content and reduces memory usage.

// How would you add an event that only triggers once?
// Use addEventListener with the { once: true } option or remove the listener in the handler function.

