// ==========================================> INTERMIDIATE INTERVIEW QUESTIONS RELATED TO CSS <=========================================
// ---------------------------------------------- PART # 01 (Question # 01 - Question # 05) ---------------------------------------------
// ✅ Q1) How does specificity work in CSS, and how is it calculated?

// Answer: CSS specificity determines which rule applies when multiple rules could affect the same element. It’s a
//  hierarchy system that assigns "weight" to selectors. The browser uses specificity to resolve conflicts when multiple rules target
//  the same element.


// Specificity is calculated based on 4 categories (you can remember it as a 4-part number: (a, b, c, d)):

// a (Inline styles): Styles written directly in the HTML tag using style="". This has the highest specificity: (1,0,0,0)
// b (IDs): Each #id adds 1 to the second position: (0,1,0,0)
// c (Classes, pseudo-classes, attributes): Each .class, [type="text"], :hover, etc., adds 1: (0,0,1,0)
// d (Element names, pseudo-elements): Each div, h1, ::after, etc., adds 1: (0,0,0,1)

// Example:
// /* Specificity: (0,0,0,1) */
// p {
//     color: red;
//   }
  
//   /* Specificity: (0,0,1,0) */
//   .text {
//     color: blue;
//   }
  
//   /* Specificity: (0,1,0,0) */
//   #main {
//     color: green;
//   }

//   Here, #main wins due to higher specificity.


//  Follow-up Question:
//  What happens if two selectors have the same specificity? 👉 In that case, the one declared later in the CSS file wins, due to the
//  “last rule wins” principle.
  
//  Follow-up Question:
//  How can we override high specificity without using !important? 👉 Try to increase specificity naturally (e.g., adding another class
//  or parent selector), or use cascade order wisely.  


// ✅ Q2) How do inline, block, and inline-block elements differ in layout?
// Answer:
// -------------------------------------------------------------------------------------------------
// Type                 | Width & Height         | New Line | Margin/Padding    | Content
// -------------------------------------------------------------------------------------------------
// inline               | Can’t set width/height | No       | Only horizontal   | Flows with text
// block                | Can set width/height   | Yes      | Full support      | Takes full width
// inline-block         | Can set width/height   | No       | Full support      | Behaves like both

// Inline: Like <span>, flows within a line of text.
// Block: Like <div>, starts on a new line and stretches full width.
// Inline-block: Like a button — allows dimensions while staying inline.

// Follow-up: Why use inline-block over block or inline? 👉 When you want block-like layout but still want elements to flow side by side
// without using floats or Flexbox.


// ✅ Q3) What is CSS inheritance, and which properties are typically inherited?
// Answer: Inheritance in CSS means that child elements inherit certain styles from their parent automatically. It helps reduce 
// redundancy.


// Properties typically inherited:

//==> Text and font styles: color, font-family, font-size, line-height, letter-spacing
//==> Text alignment: text-align
//==> List styling: list-style, quotes
//==> Table properties like border-collapse, caption-side


// Non-inherited by default:
//==> layout, spacing, box model properties (e.g., margin, padding, border, etc.)
//==> You can force inheritance using inherit:

// p {
//     color: inherit;
//   }
  
// Follow-up: 
// Why aren’t layout-related properties inherited by default? 👉 Because it would make layout control very unpredictable and hard to 
// manage. Each box needs independent control for spacing.


// ✅ Q4) Explain the concept of z-index and how it affects the stacking order.
// Answer: z-index controls the stacking order of overlapping elements on the Z-axis (front to back).

// It only works on positioned elements (relative, absolute, fixed, or sticky).

// Higher z-index = appears on top

// Lower z-index = appears behind
// .box1 {
//     position: absolute;
//     z-index: 1;
//   }
//   .box2 {
//     position: absolute;
//     z-index: 10;
//   }
  
// Here, .box2 will appear above .box1.

// Important Note: z-index works within stacking contexts. A stacking context is formed by:

// ==> Elements with position + z-index
// ==> opacity less than 1
// ==> transform, filter, perspective, etc.

// Follow-up: What if z-index isn’t working? 👉 Check if the element is inside a different stacking context, or lacks a positioning rule.


// ✅ Q5) CSS Grid vs Flexbox?
// Answer:
// -------------------------------------------------------------------------------------------------
// Feature                          | Flexbox                                   | Grid
// -------------------------------------------------------------------------------------------------
// Axis                             | 1D (row or column)                        | 2D (row and column)
// Use Case                         | Aligning items in a line                  | Full layouts
// Content vs Layout                | Content-driven                            | Layout-driven
// Nesting                          | More nesting for complex layout           | Less nesting

// Flexbox is best for alignment and distribution in a single direction.
// Grid is best for complex page layouts (rows + columns).

// Example:
/* Flexbox */
// .container {
//     display: flex;
//   }
  
//   /* Grid */
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//   }


// Follow-up:
// Can we use both together? 👉 Yes! Use Grid for page layout and Flexbox inside components for finer alignment.



// 🔷 What is :root in CSS?
// :root is a CSS pseudo-class selector that targets the highest-level parent element in the HTML document — basically the <html> tag.
// You can think of it as “the top-level container for your whole web page”.

// 🔶 Why do we use :root?
// We mostly use :root to define CSS variables (also called custom properties) so that we can reuse values like colors, font sizes, 
// spacing, etc., throughout our CSS.

// ✅ Example:
// :root {
//     --primary-color: #1E3EBC;
//     --secondary-color: #419CF8;
//     --font-size-small: 14px;
//   }
  
//   button {
//     background-color: var(--primary-color);
//     color: white;
//     font-size: var(--font-size-small);
//   }
  
// In this example:

// We defined variables inside :root.
// Now we can reuse these variables (--primary-color, etc.) anywhere in our CSS.
// This makes our code cleaner, more consistent, and easier to update.


// 🧠 What might the interviewer ask?
// ❓ Basic questions:
// What is :root in CSS and where is it used?

// What’s the difference between :root and html?
// Answer: Both target the same element, but :root has higher specificity.

// Why do we define variables in :root and not elsewhere?
// Because variables in :root are globally accessible across the entire stylesheet.



// 🔁 Follow-up Questions You Might Get:
// | Question                                                          | What they’re checking |
// |----------                                                         |------------------------|
// | How do you override a variable declared in `:root`?               | Knowledge of **CSS variable scope** |
// | Can we use variables inside media queries?                        | Yes! This checks understanding of responsive design |
// | What's the advantage of using CSS variables vs hardcoding values? | Code maintainability and reusability |
// | Can `:root` variables be changed with JavaScript?                 | Yes, and it’s often used for **themes** (e.g., dark/light mode) 




// ✅ Q6) What are the key principles of CSS performance optimization?

// Answer
// Avoid deeply nested selectors – Browsers parse selectors right to left.
// Minimize use of universal (*) and overly complex selectors
// Use class selectors instead of tags/IDs – more maintainable and performant
// Minify and compress CSS
// Use shorthand properties
// Load critical CSS inline for above-the-fold content
// Avoid unnecessary CSS (unused styles)
// Prefer GPU-accelerated animations (like transform, opacity)


// Follow-up: Why is transform preferred for animations?
// 👉 It avoids triggering layout or paint operations, making it smoother and faster (hardware-accelerated).




// ✅ Q7) What is the purpose of a media query, and how do they help in responsive design?

// Answer:
// Media queries allow you to apply CSS rules based on screen size, orientation, or device characteristics.
// They are key for responsive design, helping your site adapt across devices.

// Example:
// @media (max-width: 768px) {
//     .container {
//       flex-direction: column;
//     }
//   }

//   Types of Media Queries:
//   1) max-width, min-width
//   2) orientation
//   3) resolution
  
//   Follow-up: What's mobile-first design?
//   👉 Start with styles for small screens and enhance for larger screens using min-width. It’s more future-proof and improves 
//   performance.
  

// ✅ Q8) Explain how @keyframes works when creating animations and transitions.
// Answer:
// @keyframes defines steps in an animation sequence.

// @keyframes slideIn {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(0);
//     }
//   }
  
//   .box {
//     animation: slideIn 0.5s ease-in-out;
//   }

//   Keyframes control intermediate steps of an animation.
//   You can use percentages (0%, 100%) or from/to.
  

//   Follow-up: Difference between animation and transition?
//   transition: Used for simple animations between two states (hover, click).
//   animation: Used for complex or looping animations with multiple steps.
  


// ✅ Q9) What are viewport meta tags, and how do they affect webpage scaling?
// Answer:
// Viewport meta tags control how your page is scaled and displayed on different devices.

// Example:
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */

/* width=device-width: Matches screen’s width
   initial-scale=1.0: Prevents auto zoom

Follow-up: What happens if we don’t use it?
👉 On mobile devices, the page may zoom out to fit the desktop layout, breaking responsiveness. */



// ✅ Q10) How do CSS preprocessors like SASS and LESS improve CSS development?
// Answer:

// They add programming-like features to CSS, such as:
// Variables ($primary-color)
// Nesting
// Mixins (reusable snippets)
// Functions
// Partials & imports


// ==> Benefits:
// Better code reuse
// Cleaner, modular code
// Easier maintenance
// DRY principle

// Example (SASS):

// $primary-color: #3498db;
// .button {
//   background: $primary-color;
//   &:hover {
//     background: darken($primary-color, 10%);
//   }
// }

// Follow-up: How do you compile SASS to CSS?
// 👉 Use tools like Node-SASS, Dart-SASS, or build tools like Webpack, Vite, etc.
