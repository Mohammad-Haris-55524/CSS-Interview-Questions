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



// 10. How does the browser render the DOM and what are reflows and repaints?
// Answer:
// The browser rendering process involves several steps:
// Parse HTML → Construct DOM tree
// Parse CSS → Construct CSSOM tree
// Combine DOM and CSSOM → Render tree
// Layout (Reflow) → Calculate positions and dimensions
// Paint → Fill in pixels
// Composite → Layer management

// Reflow (Layout):
// Occurs when changes affect layout (size, position, content)
// Triggers recalculating geometry of elements
// Expensive operation that can cause performance issues

// Repaint:
// Occurs when visual changes don't affect layout (color, visibility)
// Less expensive than reflow but still impacts performance

// Common Causes of Reflow:
// Adding/removing elements
// Changing element dimensions or position
// Changing font or text content
// Resizing window
// Accessing layout properties (offsetWidth, getComputedStyle)

// Optimization Techniques:
// Batch DOM changes (use DocumentFragment)
// Avoid layout thrashing (don't interleave reads and writes)
// Use position: absolute/fixed for animations
// Hide elements during complex changes (display: none)
// Debounce window resize handlers

// Follow-up Questions:

// What's the difference between display: none and visibility: hidden in terms of rendering?
// display: none removes the element from layout (triggers reflow), while visibility: hidden just makes it invisible (only repaint).

// How would you measure layout performance?
// Use Chrome DevTools Performance panel to identify layout thrashing and excessive reflows. The Rendering panel can show paint 
// rectangles and layout shift regions.


// 11. What are data attributes and how do you use them?
// Answer:
// Data attributes (data-*) are custom attributes that allow you to store extra information in HTML elements without using non-standard 
// attributes or DOM properties.

// Syntax:
<div id="user" data-user-id="1234" data-role="admin">...</div>

// Accessing in JavaScript:
// 1) Using dataset property:
const user = document.getElementById('user');
const userId = user.dataset.userId; // "1234"
const role = user.dataset.role; // "admin"

// 2) Using getAttribute:
// const userId = user.getAttribute('data-user-id');

// Key Features:
// Always prefixed with data-
// Can be accessed via dataset property (camelCase conversion)
// Values are always strings (convert if needed)

// Useful for:
// Storing element-specific data
// JavaScript configuration
// Communication between CSS and JS

// Best Practices:
// Use for supplemental information, not essential content
// Keep values simple (complex data should be in JavaScript)
// Follow naming conventions (kebab-case in HTML, camelCase in JS)


// Follow-up Questions:

// How would you store and retrieve a JSON object in a data attribute?
// Store as JSON string: data-config='{"key":"value"}' and parse with JSON.parse(element.dataset.config).

// Can you use data attributes in CSS?
// Yes, with the attr() function or as selectors: [data-role="admin"] { color: red; }.


// 12. How do you handle dynamic content in the DOM?
// Answer:
// Dynamic content refers to elements added to the DOM after initial page load, typically via JavaScript. Here are approaches to 
// handle it:
// Event Delegation (as discussed earlier)
// MutationObserver API:
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(mutation.addedNodes.length) {
      // Handle new nodes
    }
  });
});
observer.observe(document.body, { childList: true, subtree: true });

// Manual Tracking:
// Keep references to dynamically added elements
// Add event listeners when creating elements

// Framework Approaches:
// React's virtual DOM
// Angular's change detection
// Vue's reactivity system

// Best Practices:
// Prefer event delegation for most cases
// Use MutationObserver for complex scenarios
// Clean up observers and event listeners when done
// Consider using a framework for complex dynamic UIs

// Follow-up Questions:

// When would you use MutationObserver vs event delegation?
// Use MutationObserver when you need to know when elements are added/removed regardless of events. Use event delegation when you only 
// care about interactions with the elements.

// How would you handle state for dynamic components?
// For vanilla JS, you might use a state object and render functions. In frameworks, use their state management systems (React state, 
// Vue data, etc).


// 13. What is the difference between window, document, and screen in JavaScript?
// Answer:
// These are all important global objects but serve different purposes:

// window:
// Global object in browser JavaScript
// Represents the browser window/tab

// Contains:
// Document (window.document)
// Global variables and functions
// Browser-related APIs (location, history, localStorage)
// Timer functions (setTimeout)

// document:
// Represents the loaded web page (DOM)
// Entry point to page content
// Provides methods to access and modify DOM
// Part of window (window.document)

// screen:
// Represents the user's screen/display

// Contains information about:
// Screen size (width, height)
// Color depth
// Pixel density
// Rarely used in most web apps

// Key Differences:
// Scope: window > document (window contains document)

// Purpose:
// window - browser environment
// document - page content
// screen - physical display


// Follow-up Questions:

// How would you get the viewport size vs screen size?
// Viewport: window.innerWidth/innerHeight
// Screen: screen.width/screen.height

// What's the difference between document and document.documentElement?
// document is the root of the DOM, while document.documentElement refers to the <html> element.


// 14. How do you optimize DOM manipulation for performance?
// Answer:
// DOM manipulation is often the performance bottleneck in web apps. Here are optimization strategies:

// Minimize DOM Access:
// Cache references to DOM elements
// Avoid repeated queries in loops

// Batch DOM Changes:
// Use DocumentFragment for multiple additions
// Make changes off-DOM then append (cloneNode)
// Hide elements during complex changes (display: none)

// Reduce Reflows:
// Avoid interleaving reads and writes
// Use absolute/fixed positioning for animations
// Avoid table layouts (trigger more reflows)

// Efficient Selectors:
// Use IDs for fastest selection
// Be specific with CSS selectors
// Avoid universal selectors (*)

// Event Optimization:
// Use event delegation
// Debounce scroll/resize handlers
// Remove unused event listeners

// Modern Techniques:
// Use requestAnimationFrame for visual changes
// Consider virtual DOM libraries for complex UIs
// Use CSS transforms/opacity for animations (GPU accelerated)

// Example of Batching:
// Bad - multiple reflows
for(let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  document.body.appendChild(div);
}

// Good - single reflow
const fragment = document.createDocumentFragment();
for(let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  fragment.appendChild(div);
}
document.body.appendChild(fragment);


// Follow-up Questions:

// What is layout thrashing and how do you avoid it?
// Layout thrashing occurs when you interleave reads and writes to layout properties, forcing the browser to recalculate layout repeatedly. Avoid by batching reads first, then writes.

// How would you animate an element efficiently?
// Use CSS transforms/opacity with transform: translateX/Y/Z and requestAnimationFrame for JavaScript animations, as these are GPU accelerated.


// 15. What are some security concerns when working with the DOM?
// Answer:
// DOM manipulation can introduce security vulnerabilities if not handled carefully:

// Cross-Site Scripting (XSS):
// Occurs when untrusted input is inserted into the DOM
// Can execute malicious scripts in user's context

// Prevention:
// Use textContent instead of innerHTML for user input
// Sanitize input with DOMPurify or similar
// Use CSP (Content Security Policy) headers
// Cross-Site Request Forgery (CSRF):
// Tricks user into performing unwanted actions

// Prevention:
// Use anti-CSRF tokens
// SameSite cookies
// Event Listener Hijacking:
// Malicious code can override event handlers

// Prevention:
// Use non-guessable event names for custom events
// Be cautious with third-party scripts
// Third-party Script Risks:
// External scripts can access same DOM

// Prevention:

// Use subresource integrity
// Sandbox iframes when possible
// Insecure Direct Object References:
// Exposing sensitive data in DOM attributes

// Prevention:

// Don't store sensitive data in client-side DOM
// Use server-side checks for authorization

// Best Practices:
// Always sanitize user input before DOM insertion
// Use CSP to restrict script sources
// Keep libraries updated
// Validate and escape data from servers
// Be cautious with dynamic code evaluation (eval, new Function)

// Follow-up Questions:

// How would you safely render user-generated HTML content?
// Use a dedicated sanitizer library like DOMPurify that removes dangerous elements/attributes while preserving safe markup.

// What's the purpose of Content Security Policy (CSP) headers?
// CSP restricts which resources can be loaded/executed, helping prevent XSS by whitelisting trusted sources for scripts, styles, etc.

// Final Tips for Your Interview
// Understand Fundamentals Deeply: Don't just memorize - understand why things work the way they do.

// Relate to Real Projects: Be prepared to share how you've used these concepts in actual projects.
// Explain Trade-offs: Show you understand there are multiple approaches by discussing pros and cons.
// Browser Differences: Be aware of cross-browser considerations (though less critical today).
// Performance Awareness: Interviewers love candidates who think about performance implications.
// Security Mindset: Always consider security aspects in your answers.
// Practice Coding: Be ready to write DOM manipulation code during the interview.