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


// 6. What is the difference between innerHTML, innerText, and textContent?
// Answer:
// These properties all deal with element content but behave differently:
// innerHTML:
// Gets/sets the HTML content including tags
// Can be used to insert new HTML elements
// Security risk if used with untrusted content (XSS vulnerability)
// element.innerHTML = '<strong>Hello</strong> World';

// innerText:
// Gets/sets the rendered text content (what's visible)
// Respects styling (won't return hidden text)
// Triggers reflow (performance impact)

// textContent:
// Gets/sets all text content including hidden text
// Doesn't parse HTML (safer than innerHTML)
// Better performance than innerText

// Comparison Example:
<div id="example">
  <span style="display: none">Hidden</span>Visible
</div>


// innerHTML: "<span style="display: none">Hidden</span>Visible"
// innerText: "Visible"
// textContent: "HiddenVisible"

// Follow-up Questions:

// When would you use innerHTML vs createElement?
// Use innerHTML for simple static HTML, but createElement when you need to carefully construct elements or when dealing with user input 
// (to prevent XSS).

// What's the security concern with innerHTML?
// If you insert user-provided content with innerHTML, malicious scripts in that content could execute. Always sanitize input or use 
// textContent for untrusted content.


// 7. How do you traverse the DOM?
// Answer:
// DOM traversal means moving between nodes in the DOM tree. Here are common methods:

// Moving Up (Ancestors):
// parentNode: Immediate parent
// parentElement: Immediate parent element
// closest('selector'): Nearest ancestor matching selector

// Moving Down (Descendants):
// childNodes: All child nodes (including text nodes)
// children: Only child elements
// firstChild/lastChild: First/last child node
// firstElementChild/lastElementChild: First/last child element
// querySelector/querySelectorAll: Find descendants matching selector

// Moving Sideways (Siblings):
// nextSibling/previousSibling: Next/previous node
// nextElementSibling/previousElementSibling: Next/previous element

// Example:
// Start with an element
const item = document.querySelector('.item');

// Get parent
const list = item.parentElement;

// Get next sibling element
const nextItem = item.nextElementSibling;

// Find closest ancestor with class 'container'
const container = item.closest('.container');


// Follow-up Questions:

// What's the difference between parentNode and parentElement?
// parentNode returns any type of parent node, while parentElement returns only element nodes. They're usually the same except for document nodes.

// How would you find all the images within a specific div?
// divElement.querySelectorAll('img') or divElement.getElementsByTagName('img')


// 8. What is the difference between attribute and property in DOM?
// Answer:
// Attributes and properties are related but distinct concepts:

// Attributes:
// Defined in HTML (visible in markup)
// Accessed in JavaScript using:
// getAttribute('name')
// setAttribute('name', 'value')
// hasAttribute('name')
// removeAttribute('name')

// Always strings
// Represent initial values

// Properties:
// Exist on DOM objects (JavaScript)
// Can be of any type (boolean, number, object, etc.)
// Represent current values which can change

// Key Differences:
// Value Synchronization:
// Some attributes sync with properties (id, class, etc.)
// Some don't (value of an input - attribute is initial value, property is current)

// Naming Differences:
// class attribute vs className property
// for attribute vs htmlFor property

// Example:
<input type="checkbox" id="toggle" checked></input>

const input = document.getElementById('toggle');

// Attribute (string)
console.log(input.getAttribute('checked')); // ""

// Property (boolean)
console.log(input.checked); // true or false


// Follow-up Questions:

// When would you use attributes vs properties?
// Use attributes for initial setup in HTML or when you specifically need the attribute value. Use properties for dynamic changes and current state.

// How would you set a custom data attribute?
// Use setAttribute('data-custom', 'value') or the dataset property: element.dataset.custom = 'value'


// 9. What is event delegation and why is it useful?
// Answer:
// Event delegation is a technique where instead of adding event listeners to individual elements, you add a single event listener to a
// parent element to handle events that occur on its descendants.

// How it works:
// Add event listener to a parent element
// When event occurs, check event.target to see which child triggered it
// Handle the event based on the target element

// Example:
document.getElementById('list').addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});

// Benefits:
// Performance: Fewer event listeners → less memory usage
// Dynamic Content: Works for elements added later (no need to rebind)
// Simplified Code: Single handler for many elements

// Common Use Cases:
// Lists or tables with many similar items
// Dynamic content that's added/removed frequently
// Groups of elements that share similar behavior


// Follow-up Questions:

// How would you handle events on elements within your target element?
// Use closest() to find the nearest ancestor matching your selector:
const button = e.target.closest('button');
if(button) { /* handle button click */ }

// What are the limitations of event delegation?
// Events that don't bubble (like focus/blur) can't be delegated. Also, too much delegation can make code harder to maintain if not 
// organized well.