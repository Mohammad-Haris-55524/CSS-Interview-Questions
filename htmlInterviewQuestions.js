// ============================================> BASIC INTERVIEW QUESTIONS RELATED TO HTML <=============================================

// 🔹 1. What is HTML and why is it used?
// Answer:
// HTML (HyperText Markup Language) is the standard language for creating the structure of web pages. It defines elements like headings, 
// paragraphs, images, links, and forms.

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

// _____________________________________________________________________________________________________________________________________

// 🔹 1B. What does HTML stand for? Why is it called a markup language? What does markup mean?
// Answer:
// HTML stands for HyperText Markup Language.

// HyperText refers to text that contains links (hyperlinks) to other content. It allows users to navigate between web pages or sections 
// of the same page.

// Markup Language means it's a system for annotating or "marking up" content to define its structure and meaning.
// Markup refers to the tags used to identify and organize parts of the content, like headings, paragraphs, lists, links, etc.

// For example:
//  <p>This is a paragraph.</p>
// Here, <p> is a markup tag that tells the browser to treat the content as a paragraph.

// ✅ HTML doesn’t describe how content looks (that’s CSS’s job) — it tells what each piece of content is. 


// Follow-up Question:
// Q: Is HTML a programming language?
// A: No, HTML is not a programming language. It's a markup language because it doesn’t perform logical operations or computations. 
// It structures content rather than manipulates data.

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

// 🔹 4. What are attributes in HTML?
// Answer:
// Attributes provide additional information about HTML elements. Common attributes: class, id, href, src, alt.

// Example:
// {/* <img src="cat.jpg" alt="A cute cat" /> */}

// Follow-up:
// Q: What’s the use of the alt attribute in images?
// A: It provides alternative text for accessibility and when the image fails to load.

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

// 🔹 6. What is the purpose of the <!DOCTYPE html> declaration? Why do we use it? What will happen if we remove it?
// Answer:
// It defines the document type and version of HTML being used (HTML5 in this case). It helps browsers render the page correctly.
// The <!DOCTYPE html> declaration is used to tell the browser that the page is written in HTML5 — the latest version of HTML.
// It must appear at the very top of the HTML document, before the <html> tag.
// It enables standards mode in browsers so that they render the page according to modern web standards.

// If you remove it:
// Browsers may switch to quirks mode, which tries to mimic old browser behavior and can cause inconsistent rendering across different 
// browsers.
// Layouts may break, especially with CSS positioning and box models.

// Example:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Page</title>
//   </head>
//   <body>
//     <p>Hello World!</p>
//   </body>
// </html>

// Follow-up:
// Q: Is <!DOCTYPE html> case-sensitive?
// A: No, it's not case-sensitive.
// Q: Is <!DOCTYPE> a tag or an element?
// A: It's neither a tag nor an HTML element. It’s a declaration that instructs the browser how to interpret the HTML.

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

// 🔹 9. How does the <meta> tag work in HTML?
// Answer:
// The <meta> tag provides metadata like charset, author, viewport, etc.

// Example:
// <meta charset="UTF-8" />
{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}


// Follow-up:
// Q: Why is the viewport meta tag important?
// A: It ensures responsive layout on different screen sizes.

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

// 🔹 11. What is the role of the <link> tag?
// Answer:
// It links external resources like CSS files.

// Example:
{/* <link rel="stylesheet" href="styles.css" /> */}


// Follow-up:
// Q: Is <link> self-closing?
// A: Yes, it is a void (self-closing) element.

// _____________________________________________________________________________________________________________________________________

// 🔹 12. What is the difference between relative and absolute URLs?
// Answer:

// Relative URL: Relative to the current path (/images/cat.jpg)
// Absolute URL: Full path including domain (https://example.com/images/cat.jpg)


// Follow-up:
// Q: Which one is better for internal links?
// A: Relative URLs are better for internal navigation.

// _____________________________________________________________________________________________________________________________________

// 🔹 13. What is accessibility in HTML and how do you improve it?
// Answer:
// Accessibility means making web content usable for everyone, including people with disabilities. Use semantic tags, alt text, and ARIA 
// attributes.

// Example:
{/* <button aria-label="Close">X</button> */}


// Follow-up:
// Q: What does aria-label do?
// A: It provides a label for screen readers.

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________________________

// 🔹 17. Define the list types in HTML. Differentiate between an Ordered List and an Unordered List.
// Answer:
// HTML provides three types of lists:

// Ordered List (<ol>) – Displays items in a specific sequence (1, 2, 3 or a, b, c).
// Unordered List (<ul>) – Displays items with bullet points.
// Description List (<dl>) – Used for key-value pairs like terms and definitions.

// Ordered vs Unordered:
// | Feature     | Ordered List `<ol>`        | Unordered List `<ul>`       |
// | ----------- | -------------------------- | --------------------------- |
// | Use case    | Steps, rankings, sequences | Grouped items without order |
// | Marker type | Numbers, letters           | Dots, circles, squares      |
// | Example tag | `<ol><li>Item</li></ol>`   | `<ul><li>Item</li></ul>`    |

// EXAMPLE: 
{/* <ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Code</li>
</ol>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul> */}

// Follow-up Question:
// Q: Can we change the numbering style of an ordered list?
// A: Yes, using the type attribute or with CSS:

{/* <ol type="A"> <!-- Outputs A, B, C -->
<ol type="i"> <!-- Outputs i, ii, iii --> */}

// _____________________________________________________________________________________________________________________________________

// 🔹 18. What is the difference between HTML and CSS?
// Answer:
// | Feature    | HTML                         | CSS                                       |
// | ---------- | ---------------------------- | ----------------------------------------- |
// | Stands for | HyperText Markup Language    | Cascading Style Sheets                    |
// | Purpose    | Structures the content       | Styles the content                        |
// | Role       | Builds the skeleton          | Adds design (colors, layout, fonts, etc.) |
// | Example    | `<p>This is a paragraph</p>` | `p { color: blue; font-size: 18px; }`     |


// They work together:
// HTML defines what the content is (e.g., heading, image).
// CSS defines how it looks (e.g., color, spacing, positioning).

// Follow-up Question:
// Q: Can CSS be added inside HTML?
// A: Yes, in three ways:
// Inline: <p style="color:red;">
// Internal: In <style> tags in the <head>
// External: Linking a .css file using <link></link>


// ----------------------------------------------- DETAIL LEARNING ABOUT <META> TAG IN HTML -------------------------------------------- 
// ✅ What is the <meta> tag in HTML?
// The <meta> tag is used in the <head> section of an HTML document to provide metadata—information about the web page. This data is not 
// displayed to users but is essential for browsers, search engines, and social media platforms.

// 🎯 Purposes of the <meta> Tag:
// | Purpose                     | Description                                                          |
// | --------------------------- | -------------------------------------------------------------------- |
// | Character encoding          | Tells the browser how to read the text                               |
// | Responsive design           | Controls viewport settings for mobile devices                        |
// | SEO                         | Helps search engines understand the page                             |
// | Author & copyright info     | Metadata about the author or owner of the content                    |
// | Social sharing (Open Graph) | Controls how the page appears when shared on platforms like Facebook |
// | Refresh/redirect            | Automatically reloads or redirects a page                            |


// 🧠 Types of <meta> Tags with Explanation and Examples:
// 1. Charset Declaration (Essential for Text Encoding)
// <meta charset="UTF-8" />

// What it does: Tells the browser to use UTF-8 character encoding, which supports most characters in the world.
// Why important: Prevents issues with special characters like “ñ”, “ü”, etc.


// 2. Viewport Settings (For Responsive Design)
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />

// What it does: Ensures proper scaling on mobile devices.
// Why important: Without it, your page may look zoomed out or broken on phones.


// 3. SEO Metadata (Search Engine Optimization)
// <meta name="description" content="This is a portfolio website of Zara Hassan, a frontend developer." />
// <meta name="keywords" content="portfolio, HTML, CSS, JavaScript, frontend developer" />
// <meta name="robots" content="index, follow" />  

// description: Shows up in Google search snippets.
// keywords: (not widely used anymore by Google, but still okay to include)
// robots: Tells search engines whether to index the page.


// 4. Author Information
// <meta name="author" content="Zara Hassan" /> 

// Helps with page attribution.


// 5. Auto Refresh or Redirect
{/* <meta http-equiv="refresh" content="5;url=https://example.com" /> */}

// Refreshes or redirects after 5 seconds.


// 6. Social Media Sharing (Open Graph for Facebook, Twitter Cards)
// Facebook (Open Graph):
{/* <meta property="og:title" content="Zara Hassan Portfolio" />
<meta property="og:description" content="Check out my latest web development projects." />
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
<meta property="og:url" content="https://zaraportfolio.com" /> */}

// Twitter Cards:
{/* <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Zara Hassan Portfolio" />
<meta name="twitter:description" content="Frontend Developer & UI Enthusiast" />
<meta name="twitter:image" content="https://example.com/twitter-image.jpg" /> */}


// 🧾 Full Example:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta name="description" content="Zara Hassan - Frontend Developer Portfolio" />
//   <meta name="keywords" content="HTML, CSS, JavaScript, React, Frontend Developer" />
//   <meta name="author" content="Zara Hassan" />
//   <meta property="og:title" content="Zara Hassan Portfolio" />
//   <meta property="og:description" content="My professional web projects." />
//   <meta property="og:image" content="https://example.com/image.jpg" />
//   <meta property="og:url" content="https://zaraportfolio.com" />
//   <meta name="twitter:card" content="summary_large_image" />
// </head>
// <body>
//   <h1>Welcome to My Portfolio</h1>
// </body>
// </html>




// 🔄 Follow-up Questions (With Smart Answers)
// ❓Q1: Is the <meta charset="UTF-8"> required?
// ANSWER: It’s not mandatory, but highly recommended. Without it, some characters may not display correctly, especially in languages like 
// Urdu or Arabic.


// ❓Q2: What's the difference between name and property attributes in <meta>?
// ANSWER:
// name is used for standard metadata like description, viewport, keywords.
// property is used for Open Graph data for social platforms like Facebook.


// ❓Q3: Is the keywords meta tag still used by Google?
// ANSWER: No, Google ignores it for ranking, but other search engines might still consider it. It doesn’t hurt to include it.


// ❓Q4: Can you include multiple <meta> tags?
// ANSWER: Absolutely. You can (and should) include multiple meta tags for different purposes like SEO, responsiveness, and social media.


// ❓Q5: Where should <meta> tags be placed?
// ANSWER: Always in the <head> section before the browser starts rendering content. Ideally at the top.























