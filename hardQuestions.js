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
  


