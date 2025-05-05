// Q1) How does the CSS calc() function work, and what are some practical use cases?
// Answer:

// The calc() function in CSS allows you to perform mathematical calculations directly in CSS to determine property values. It supports +, -, *, and / operations and is especially useful when you need dynamic sizing based on a mix of different units (e.g., % + px).

// Syntax:
// width: calc(100% - 50px);
// This example means the width will always be 100% of the parent minus 50 pixels, no matter the screen size.

// Supported Operations:
// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)

// Rules:
// There must be spaces around the operators: calc(100% - 20px) ✅, but calc(100%-20px) ❌.
// Works with units like px, em, rem, %, vw, vh, etc.

// Practical Use Cases:
// 1) Responsive Layouts:
// width: calc(100% - 300px); /* sidebar is 300px */

// 2) Centering Elements:
// left: calc(50% - 100px); /* center an element that's 200px wide */

// 3) Fluid Typography with fixed padding:
// padding: calc(1rem + 2vw);

// 4) Complex Grid Calculations:
// grid-template-columns: calc(33.33% - 10px) calc(33.33% - 10px) calc(33.33% - 10px);


// Follow-up Questions:

// ✅ Q: Can calc() be used inside media queries?
// A: Yes, calc() can be used inside media queries to calculate breakpoints.
// Example:
// @media (max-width: calc(768px - 1em)) { ... }

// ✅ Q: Can you use variables inside calc()?
// A: Absolutely! It works great with CSS variables:
// :root {
//     --sidebar-width: 250px;
//   }
//   main {
//     width: calc(100% - var(--sidebar-width));
//   }
  



// Q2) How do pseudo-classes and pseudo-elements work in CSS? Give examples of each.
// Answer:

// ✅ Pseudo-classes define a special state of an element.
// These are used to style elements based on user interaction or position in the DOM.

// Examples:
// a:hover {
//     color: red;
//   }
//   li:first-child {
//     font-weight: bold;
//   }
//   input:focus {
//     border-color: blue;
//   }

//   Common pseudo-classes:
//   :hover, :focus, :active  
//   :nth-child(), :first-child, :last-child
//   :not(), :checked, :disabled
  

// ✅ Pseudo-elements allow you to style specific parts of an element.
// Examples:
// p::first-line {
//     font-weight: bold;
//   }
//   h1::before {
//     content: "🔥";
//   }
//   h1::after {
//     content: "✅";
//   }
  
// Common pseudo-elements:

// ::before, ::after

// ::first-letter, ::first-line, ::selection

// Always use :: (double colon) for modern CSS.

// Follow-up Questions:

// ✅ Q: What's the difference between :nth-child() and :nth-of-type()?
// A:

// :nth-child(n) targets the n-th child regardless of type.

// :nth-of-type(n) targets the n-th element of a specific type.
// Example:  
{/* <p></p>
<span></span>
<p></p> */}

// p:nth-child(2) → No match (2nd child is a span)

// p:nth-of-type(2) → Matches 2nd <p>

// ✅ Q: Can we apply both pseudo-class and pseudo-element together?
// A: Yes.
// a:hover::after {
//     content: " 🔗";
//   }
  


// Q3) Transitions vs Animations in CSS
// Answer:
// | Feature          | **CSS Transitions**                 | **CSS Animations**                      |
// | ---------------- | ----------------------------------- | --------------------------------------- |
// | **Triggered by** | A change in property (hover, focus) | Can start automatically or be triggered |
// | **Control**      | Limited to start → end states       | Allows multiple keyframes/stages        |
// | **Keyframes**    | Not required                        | Required (`@keyframes`)                 |
// | **Repeat**       | Can't loop                          | Can loop (`infinite`, `alternate`)      |
// | **Complexity**   | Simple interactions                 | Complex sequences                       |

// ✅ Transition Example:

// button {
//     transition: background-color 0.3s ease;
//   }
//   button:hover {
//     background-color: red;
//   }
  
// ✅ Animation Example:
// @keyframes slideIn {
//     from {
//       transform: translateX(-100%);
//     }
//     to {
//       transform: translateX(0);
//     }
//   }
//   .box {
//     animation: slideIn 1s ease-out forwards;
//   }
  


// Follow-up Questions:

// ✅ Q: Can we combine transitions and animations?
// A: Yes, for different effects. For example, an animation on load and transition on hover.

// ✅ Q: How to stop or pause an animation?
// A: Use animation-play-state: paused; to pause it.



// Q4) What is the clamp() function in CSS?

// Answer:

// The clamp() function provides a way to set responsive values by specifying:
// a minimum
// a preferred (scalable) value
// a maximum

// ✅ Syntax:
// font-size: clamp(1rem, 2vw, 2rem);

// This means:
// Minimum font size = 1rem
// Preferred = 2vw (responsive to viewport)
// Maximum = 2rem
// It will grow/shrink with screen size but stay between 1rem and 2rem.

// Use Cases:
// Fluid typography
// Responsive paddings/margins
// Adaptive layout widths

// ✅ Example with padding:
// padding: clamp(10px, 2vw, 30px);



// Follow-up Questions:

// ✅ Q: Why is clamp() better than media queries for font-size?
// A: It simplifies responsiveness by removing the need for breakpoints. It provides a fluid range within boundaries.

// ✅ Q: Can we use calc() inside clamp()?
// A: Yes:
// font-size: clamp(1rem, calc(1rem + 1vw), 2rem);



// Q5) How are custom properties (CSS variables) created and used in stylesheets?
// Answer:

// CSS variables (also known as custom properties) allow you to store values in reusable variables, enhancing maintainability and theme 
// control.

// ✅ Define a Variable:
// :root {
//     --primary-color: #3498db;
//     --padding: 1rem;
//   }
// :root means global scope (entire document).

// ✅ Use the Variable:
// button {
//     background-color: var(--primary-color);
//     padding: var(--padding);
//   }
  
// ✅ Override Locally:
// .dark-theme {
//     --primary-color: #222;
//   }
  
// This enables dynamic theming!

// Benefits:
// Better code readability
// Easier theming
// Live updates with JavaScript


// Follow-up Questions:

// ✅ Q: Can we use fallback values in var()?
// A: Yes:
// color: var(--heading-color, black); /* fallback if undefined */

// ✅ Q: Can variables be updated dynamically?
// A: Yes, using JavaScript:
// document.documentElement.style.setProperty('--primary-color', 'red');

// ✅ Q: Are variables scoped?
// A: Yes, variables can be scoped to a selector, and will inherit from parent if not defined.




