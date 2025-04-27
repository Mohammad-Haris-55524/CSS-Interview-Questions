// =============================================> BASIC INTERVIEW QUESTIONS RELATED TO CSS <=============================================
// ---------------------------------------------- PART # 01 (Question # 01 - Question # 05) ---------------------------------------------
// ✅ Q1: What is the CSS Box Model, and what are its components?
// Answer: Sir, in CSS, every HTML element is considered as a box. The CSS Box Model describes how these boxes are structured and how they take space on the page.
// It has 4 main parts:

// Content – The actual text or image inside the box.
// Padding – Space inside the box, between the content and border.
// Border – A line that wraps around the padding and content.
// Margin – Space outside the border, used to create space between elements.

// Example:

// div {
//     width: 200px;
//     padding: 10px;
//     border: 2px solid black;
//     margin: 20px;
//   }
// In this example, 200px is the width of content, 10px padding adds space inside the box, 2px border wraps it, and 20px margin separates it from other elements.


// 💬 Follow-up: What happens to total width when padding and border are added?

// Answer: Sir, by default, the final width becomes larger because the browser adds the padding and border to the actual width.
// So actual width = width + padding + border.

// But if we use:
// box-sizing: border-box;
// Then padding and border are included in the width, which helps keep layout consistent.



// ✅ Q2: What is the difference between margin and padding?
// Answer: Sir, the difference is simple:

// Margin is the space outside the element, separating it from other elements.
// Padding is the space inside the element, between the content and its border.

// Example:
// .card {
//     margin: 20px;
//     padding: 10px;
//   }
// This means the card will have 20px space outside (margin), and 10px space inside (padding).

// 💬 Follow-up: Can margin be negative?
// Answer: Yes sir, margin can be negative. It will pull the element closer to other elements or even overlap them. But it should be used carefully to avoid layout issues.

// 💬 Follow-up: What is margin collapsing?
// Answer: When two vertical margins meet, like between two paragraphs, the bigger margin wins instead of adding them. That’s called margin collapsing.


  
// ✅ Q3: Difference between visibility: hidden, display: none, and opacity: 0?
// Answer: Sir, all three make elements invisible, but they work differently:

// display: none – Completely removes the element from the layout.
// visibility: hidden – Hides the element, but it still takes space.
// opacity: 0 – Makes the element fully transparent, but it’s still there and interactive.

// 💬 Follow-up: Can we interact with an element that has opacity: 0?
// Answer: Yes sir, the element is still there. You can still click or focus on it. To make it fully inactive, we can also use pointer-events: none.

// 💬 Follow-up: Which one is better for animation?
// Answer: opacity is best for animation because it allows smooth transitions. display: none cannot be animated directly.



// ✅ Q4: How does Flexbox work, and what are its drawbacks?
// Answer: Sir, Flexbox is a layout system that helps align items in one direction — either row or column.

// We just write:
// display: flex;

// Then we can use:
// justify-content to align items horizontally.
// align-items to align vertically.
// flex-direction to switch between row and column.

// Example:
// .container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
// It is useful for navigation bars, cards, or centering content.
// Drawback: Flexbox is one-dimensional. For complex grid layouts (both rows and columns), CSS Grid is better.


// 💬 Follow-up: What’s the difference between justify-content and align-items?
// Answer:
// justify-content controls alignment along the main axis (left to right by default).
// align-items controls alignment along the cross axis (top to bottom).


// ✅ Q5: What is CSS Grid and when should we use it?
// Answer: Sir, CSS Grid is a layout system designed for 2D layouts — that means both rows and columns.

// We define a grid using:
// display: grid;
// grid-template-columns: repeat(3, 1fr);

// This creates 3 equal columns.

// It is best for:
// Dashboards
// Image galleries
// Complex layouts with both row and column control


// 💬 Follow-up: What’s the difference between Grid and Flexbox?
// Answer:
// Grid works in 2D (rows and columns together).
// Flexbox works in 1D (row or column only).
// If layout is simple, use Flexbox. For complex layouts, use Grid.


// 💬 Follow-up: What is 1fr in Grid?
// Answer: 1fr means "1 fraction of available space". If I write repeat(3, 1fr), it divides space into 3 equal parts.



// ---------------------------------------------- PART # 02 (Question # 05 - Question # 10) ---------------------------------------------
// ✅ Q6: What are CSS combinators?
// Answer: Sir, combinators define the relationship between two selectors.
                                                                    // OR
// In CSS, combinators are characters or symbols used to separate selectors and define relationships between them. They help us target 
// specific elements based on their position or relationship to other elements in the HTML document.

// There are four main types of combinators:

// 1. Descendant combinator (space): div p - selects all p elements that are descendants of div elements.
// 2. Child combinator (>): div > p - selects all p elements that are direct children of div elements.
// 3. Adjacent sibling combinator (+): h2 + p - selects the first p element that immediately follows an h2 element OR 
// Matches the next sibling only.
// 4. General sibling combinator (~): h2 ~ p - selects all p elements that follow an h2 element OR Matches all siblings after..

// Example:

// /* Descendant combinator */
// .container p {
    //   color: blue;
    // }
    
    // /* Child combinator */
// .container > p {
    //   font-weight: bold;
    // }
    
// /* Adjacent sibling combinator */
// h2 + p {
    //   margin-top: 0;
// }
        
// /* General sibling combinator */
// h2 ~ p {
    //   color: green;
// }


// Follow-up questions:

// 💬 Follow-up: What’s the difference between div p and div > p?
// Answer: div p selects all <p> elements inside the <div>, even nested ones.
// div > p selects only the direct children.

// 1. What is the difference between the descendant combinator and the child combinator?
// The descendant combinator (`) selects all elements that are descendants of the specified element, regardless of their nesting level.
//  The child combinator (>`) selects only direct children of the specified element.

// 2. How would you use the adjacent sibling combinator to style a paragraph that follows a heading?
// You would use the adjacent sibling combinator (+) like this: h2 + p { styles here }. This would select the first paragraph element 
// that immediately follows an h2 heading element.

// 3. Can you explain the difference between the adjacent sibling combinator and the general sibling combinator?

// The adjacent sibling combinator (+) selects only the first element that immediately follows the specified element. The general 
// sibling combinator (~) selects all elements that follow the specified element, regardless of their position.

// 4. How would you use combinators to style a specific element based on its position in the HTML document?

// You would use a combination of combinators and selectors to target the specific element. 
// For example, .container > h2 + p { styles here } would select the first paragraph element that immediately follows an h2 element,
// which is a direct child of an element with the class container.



// ✅ Q7: Difference between inline styles and external stylesheets?
// Answer: Sir,

// Inline styles are written directly in the element, like:
// <h1 style="color:red;">

// External styles are written in a separate .css file and linked with <link>.
// We use inline styles only for testing or small changes, but in real projects, external stylesheets are better 
// for reusability and clean code.


// 💬 Follow-up: Can inline styles override external CSS?
// Answer: Yes sir, inline styles have higher specificity, so they override external or internal styles unless 
// !important is used.



// ✅ Q8: What is Mobile-First Design and how does it relate to responsive CSS?
// Answer: Sir, Mobile-First Design means we first design for smaller screens, then add styles for bigger screens using media queries.

// It improves performance on mobile and follows responsive design principles.

// Example:
/* Mobile first */
// .card {
//     font-size: 14px;
//   }
  
//   /* Desktop later */
//   @media (min-width: 768px) {
//     .card {
//       font-size: 18px;
//     }
//   }


// 💬 Follow-up: What’s the difference between min-width and max-width?
// Answer:
// min-width is used in mobile-first design. It applies styles when the screen is larger than the value.
// max-width is used in desktop-first. It applies styles when screen is smaller.



// ✅ Q9: What are CSS pseudo-classes?
// Answer: Sir, pseudo-classes let us style elements based on their state or position without needing extra classes.

// Examples:
// :hover → when mouse is over.
// :first-child → styles the first child of a parent.
// :nth-child(2) → targets second child.

// Example:
// button:hover {
//     background-color: blue;
//   }

  
// 💬 Follow-up: What’s the difference between :nth-child() and :nth-of-type()?
// Answer:
// :nth-child(2) selects the second child regardless of tag.
// :nth-of-type(2) selects the second specific tag among siblings.


