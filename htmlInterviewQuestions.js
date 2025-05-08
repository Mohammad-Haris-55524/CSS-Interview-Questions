// ============================================> BASIC INTERVIEW QUESTIONS RELATED TO HTML <=============================================

// 🔹 1. What is HTML and why is it used?
// Answer:
// HTML (HyperText Markup Language) is the standard language for creating the structure of web pages. It defines elements like headings, paragraphs, images, links, and forms.

// Example:
// <!DOCTYPE html>
// <html>
//   <head><title>My Page</title></head>
//   <body>
//     <h1>Hello World</h1>
//     <p>This is a paragraph.</p>
//   </body>
// </html>

// Follow-up:
// Q: What is the difference between HTML and CSS?
// A: HTML defines the structure of the webpage, while CSS defines the styling and layout.



// 🔹 2. What are semantic tags in HTML?
// Answer:
// Semantic tags clearly describe their meaning to both the browser and the developer. Examples include <article>, <section>, <header>, and <footer>.

// Example:
// <article>
//   <h2>Blog Title</h2>
//   <p>This is a blog post.</p>
// </article>

// Follow-up:
// Q: Why use semantic tags?
// A: They improve accessibility, SEO, and code readability.



// 🔹 3. What is the difference between <div> and <span>?
// Answer:

// <div> is a block-level element.
// <span> is an inline element.

// Example:
{/* <div>This is a block</div>
<span>This is inline</span> */}

// Follow-up:
// Q: Can you style both using CSS?
// A: Yes, both can be styled with CSS using class or id selectors.



// 🔹 4. What are attributes in HTML?
// Answer:
// Attributes provide additional information about HTML elements. Common attributes: class, id, href, src, alt.

// Example:
// {/* <img src="cat.jpg" alt="A cute cat" /> */}


// Follow-up:
// Q: What’s the use of the alt attribute in images?
// A: It provides alternative text for accessibility and when the image fails to load.



// 🔹 5. What is the difference between id and class?
// Answer:

// id is unique for one element.
// class can be shared by multiple elements.

// Example:
{/* <div id="header">Header</div>
<p class="text">Paragraph</p> */}


// Follow-up:
// Q: Can you use multiple classes on one element?
// A: Yes. Example: <div class="box large red"></div>



// 🔹 6. What is the purpose of the <!DOCTYPE html> declaration?
// Answer:
// It defines the document type and version of HTML being used (HTML5 in this case). It helps browsers render the page correctly.

// Example:
// <!DOCTYPE html>
// <html>...</html>


// Follow-up:
// Q: Is <!DOCTYPE html> case-sensitive?
// A: No, it's not case-sensitive.



// 🔹 7. How are forms handled in HTML?
// Answer:
// Forms are used to collect user input. They include elements like <input>, <textarea>, <select>, and <button>.

// Example:
{/* <form action="/submit" method="post">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form> */}


// Follow-up:
// Q: What’s the difference between GET and POST methods?
// A: GET appends data to the URL; POST sends it in the request body (more secure).


// 🔹 8. What is the difference between <script> and <noscript>?
// Answer:

// <script> is used to include JavaScript.
// <noscript> is shown when JavaScript is disabled.

// Example:
{/* <script>
  alert("Hello!");
</script>
<noscript>Your browser does not support JavaScript.</noscript> */}


// Follow-up:
// Q: Why is <noscript> important?
// A: It ensures fallback content is available for users without JavaScript.



// 🔹 9. How does the <meta> tag work in HTML?
// Answer:
// The <meta> tag provides metadata like charset, author, viewport, etc.

// Example:
// <meta charset="UTF-8" />
{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}


// Follow-up:
// Q: Why is the viewport meta tag important?
// A: It ensures responsive layout on different screen sizes.



// 🔹 10. What is the difference between inline, block, and inline-block elements?
// Answer:

// Block: Takes full width, starts on new line (div, p)
// Inline: Takes only required width, doesn’t start a new line (span, a)
// Inline-block: Behaves like inline but supports block properties (width, height)

// Example:
{/* <span style="display: block;">Block</span>
<span style="display: inline;">Inline</span>
<span style="display: inline-block; width: 100px;">Inline-block</span> */}


// Follow-up:
// Q: Can you change the display of an element using CSS?
// A: Yes, with the display property.



// 🔹 11. What is the role of the <link> tag?
// Answer:
// It links external resources like CSS files.

// Example:
{/* <link rel="stylesheet" href="styles.css" /> */}


// Follow-up:
// Q: Is <link> self-closing?
// A: Yes, it is a void (self-closing) element.



// 🔹 12. What is the difference between relative and absolute URLs?
// Answer:

// Relative URL: Relative to the current path (/images/cat.jpg)
// Absolute URL: Full path including domain (https://example.com/images/cat.jpg)


// Follow-up:
// Q: Which one is better for internal links?
// A: Relative URLs are better for internal navigation.



// 🔹 13. What is accessibility in HTML and how do you improve it?
// Answer:
// Accessibility means making web content usable for everyone, including people with disabilities. Use semantic tags, alt text, and ARIA 
// attributes.

// Example:
{/* <button aria-label="Close">X</button> */}


// Follow-up:
// Q: What does aria-label do?
// A: It provides a label for screen readers.



// 🔹 14. How do you embed media in HTML?
// Answer:
// You can use <img>, <audio>, <video>, or <iframe>.

// Example (video):
{/* <video controls>
  <source src="movie.mp4" type="video/mp4" />
</video> */}


// Follow-up:
// Q: What does the controls attribute do?
// A: It adds play, pause, volume controls to the video/audio player.



// 🔹 15. What is the difference between <strong> and <b>?
// Answer:
// <strong> indicates importance (semantic).
// <b> is just for bold styling (non-semantic).


// Follow-up:
// Q: Which one should you prefer and why?
// A: Prefer <strong> for accessibility and semantic meaning.



// 🔹 16. Are all semantic tags are block line ?
// No, not all semantic HTML tags are block-level elements.
// However, most semantic tags like <header>, <section>, <article>, <nav>, and <footer> are block-level.

// But semantic inline elements also exist, such as:
// ✅ Semantic Block-level Tags (most common):
// | Tag         | Description                      |
// | ----------- | -------------------------------- |
// | `<header>`  | Introductory content             |
// | `<nav>`     | Navigation links                 |
// | `<section>` | Thematic grouping of content     |
// | `<article>` | Independent content (e.g., blog) |
// | `<aside>`   | Sidebar or tangential content    |
// | `<footer>`  | Footer content                   |
// | `<main>`    | Main page content                |
// | `<figure>`  | Media content with caption       |


// ✅ Semantic Inline Tags:
// | Tag      | Description                     |
// | -------- | ------------------------------- |
// | `<time>` | Represents date or time         |
// | `<mark>` | Highlights or marks text        |
// | `<abbr>` | Abbreviation or acronym         |
// | `<cite>` | Citation or reference           |
// | `<dfn>`  | Defines a term                  |
// | `<code>` | Code snippet                    |
// | `<kbd>`  | Keyboard input                  |
// | `<samp>` | Sample output                   |
// | `<var>`  | Variable in programming context |


// 🔹 Follow-up Question:
// Q: How can you check whether an element is block or inline?
// Answer:

// Use browser DevTools → inspect the element → check the display style.
// By default, block elements take full width and break to the next line; inline elements do not.