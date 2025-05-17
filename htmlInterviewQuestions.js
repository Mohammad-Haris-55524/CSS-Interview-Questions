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
// Semantic tags clearly describe their meaning to both the browser and the developer. Examples include <article>, <section>, <header>,
//  and <footer>.

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


// _____________________________________________________________________________________________________________________________________

// 🔹 19. Are HTML tags and elements the same thing?
// Answer:
// Not exactly. They are related but not the same.
// A tag is just the markup keyword inside angle brackets:
// <p> or </p> are tags.

// An element includes:
// Opening tag,
// Content,
// Closing tag.

// Example:
{/* <p>This is a paragraph.</p> */}
{/* <p> is the tag

This is a paragraph. is the content
The entire thing is the element

Note: Some elements are self-closing and don’t have content.

Follow-up Question:
Q: Are elements always visible on the screen?
A: No. Some elements like <meta>, <title>, or <script> work behind the scenes and don’t produce visible output.*/}


// _____________________________________________________________________________________________________________________________________

// 🔹 20. What are void elements in HTML?
// Answer:
// Void elements (also called self-closing elements) are HTML elements that do not have any content or a closing tag. They’re used to 
// insert items that don’t need text inside them.

// Examples:
{/* <img src="image.jpg" alt="photo" />
<br />
<hr />
<input type="text" />
<meta charset="UTF-8" />
<link rel="stylesheet" href="style.css" /> */}

// They only use the opening tag.
// Some developers add a trailing slash (<br />), but in HTML5 it’s optional.

// Follow-up Question:
// Q: What happens if we add a closing tag to a void element?
// A: It won’t break the page, but it's invalid in HTML5 and can cause rendering or validation issues.


// _____________________________________________________________________________________________________________________________________

// ✅ 21) What are Relative and Absolute Links in HTML? Also, how to open a link in a new tab?
// 🔷 Absolute Link:
// An absolute link provides the full path (URL) to a resource, including protocol (http/https) and domain name.
// <a href="https://www.google.com">Visit Google</a>

// It links to external websites.
// Works from any location.

// 🔷 Relative Link:
// A relative link points to a file within your own project or website, based on the current file’s location.
// <a href="about.html">About Us</a>

// It links to internal files or pages.
// The browser builds the full URL based on the current location.

// 🔷 Open Link in a New Tab:
// Use the target="_blank" attribute
// <a href="https://www.google.com" target="_blank">Open in New Tab</a>

// You can also add rel="noopener noreferrer" for security reasons to prevent the new page from accessing the previous one via window.opener.
// <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Secure New Tab</a>


// Follow-up Questions:

// Q: What’s the risk of using target="_blank" without rel="noopener noreferrer"?
// A: The new tab can potentially access the original page via window.opener, allowing phishing attacks. Adding rel="noopener" prevents 
// this.

// Q: Can I use a relative link to navigate to an image or file?
// A: Yes. For example:
// <a href="images/photo.jpg">View Photo</a>

// _____________________________________________________________________________________________________________________________________

// ✅ 22) How to navigate on the page in HTML?
// You can navigate within the same page using anchor links and id attributes.

// 🔷 Step-by-step:
// 1) Give a section an id:
// <section id="contact">Contact Us</section>

// 2) Create a link to that section:
// <a href="#contact">Go to Contact Section</a>
// When the user clicks, the page scrolls to the element with id="contact".

// 🔷 Navigation Across Pages:
// <a href="services.html">Services Page</a>

// 🔷 Navigation with Smooth Scrolling (CSS):
// html {
//   scroll-behavior: smooth;
// }


// Follow-up Questions:

// Q: Can we use JavaScript for navigation too?
// A: Yes, you can use window.location.href = "about.html" to navigate or scrollIntoView() for smooth scrolling within a page.

// Q: What happens if I use an anchor with no matching ID?
// A: It won’t scroll anywhere — it just jumps to the top of the page.

// _____________________________________________________________________________________________________________________________________


// ✅ 23) What is the latest HTML version? What new features/tags were introduced?
// 🔷 Latest Version:
// The latest official version is HTML5, released in 2014 but continuously improved.

// 🔷 New Features Introduced in HTML5:
// 🧱 New Semantic Elements (Better Structure):

// | Tag         | Purpose                      |
// | ----------- | ---------------------------- |
// | `<header>`  | Page or section heading      |
// | `<footer>`  | Footer content               |
// | `<nav>`     | Navigation menus             |
// | `<article>` | Self-contained content       |
// | `<section>` | Thematic grouping of content |
// | `<aside>`   | Sidebar or related content   |
// | `<main>`    | Main content area            |


// 🎬 Multimedia Support:
{/* <video src="movie.mp4" controls></video>
<audio src="song.mp3" controls></audio> */}

// 🧪 New Form Input Types:
{/* <input type="email" />
<input type="date" />
<input type="range" />
<input type="color" /> */}


// 🗃️ Other APIs & Features:
// Canvas API – for drawing graphics.
// Geolocation API
// LocalStorage & SessionStorage
// Drag and Drop API

// Follow-up Questions:

// Q: Why are semantic tags important?
// A: They improve accessibility, SEO, and make the code easier to understand. Search engines and screen readers rely on these tags to understand content structure.

// Q: Is HTML5 backward compatible?
// A: Yes, most older tags still work. Browsers ignore unknown tags gracefully.


// _____________________________________________________________________________________________________________________________________

// ✅ 24) What is the purpose of the <iframe> tag?
// 🔷 Definition:
// The <iframe> (Inline Frame) tag is used to embed another HTML document or web page inside the current page.

// 🔷 Example:
{/* <iframe src="https://www.wikipedia.org" width="600" height="400"></iframe> */}


// 🔷 Use Cases:
// Embedding YouTube videos
// Showing external content (maps, documents, charts)
// Embedding ads or analytics dashboards
// Showing other websites or microsites

// 🔷 Security Consideration:
// Always be careful while embedding unknown sources — they can pose security or performance issues.

// 🔷 Control Options (Attributes):
// | Attribute         | Purpose                  |
// | ----------------- | ------------------------ |
// | `src`             | URL of the page to embed |
// | `width`/`height`  | Size of the iframe       |
// | `allowfullscreen` | Allows full-screen video |
// | `loading="lazy"`  | Loads iframe when needed |
// | `sandbox`         | Restricts capabilities   |

// Q: Can we use iframe to load another part of our own website?
// A: Yes, you can load internal pages, but it’s not recommended for navigation. Better to use routing/navigation.

// Q: What does the sandbox attribute do?
// A: It isolates the iframe from the parent page — disables forms, scripts, and plugins unless you explicitly allow them.

// Example:
{/* <iframe src="https://example.com" sandbox></iframe> */}



// ✅ 25). What is the difference between HTML and XHTML?

// 🔷 HTML (HyperText Markup Language):
// It is not case-sensitive (<Div> is valid).
// Tags can be not properly closed in older HTML.
// Follows SGML (Standard Generalized Markup Language) rules, more relaxed.
// Browsers are forgiving of syntax errors.

// 🔷 XHTML (Extensible HyperText Markup Language):
// It is case-sensitive: All tags must be lowercase.
// All tags must be closed (even empty tags).
// Attributes must be quoted and properly formatted.
// XHTML is stricter, based on XML rules.

// 🔷 Example Comparison:
// ✅ Valid in HTML:
{/* <img src="logo.png"> */}

// ❌ Invalid in XHTML (must be self-closed with lowercase and quoted attribute):
{/* <img src="logo.png" /> */}

// 🔍 Summary Table:
// | Feature        | HTML               | XHTML                           |
// | -------------- | ------------------ | ------------------------------- |
// | Syntax rules   | Lenient            | Strict (XML-based)              |
// | Tag case       | Not case-sensitive | Must be lowercase               |
// | Closing tags   | Optional sometimes | Mandatory for all tags          |
// | Error handling | Forgiving          | Strict (won’t render if errors) |


// Follow-up Questions:

// Q: Why use XHTML if it's stricter?
// A: XHTML forces cleaner, well-structured code, and it’s better for integration with XML-based systems like RSS, SVG, or MathML.

// Q: Is XHTML still used today?
// A: It’s not commonly used for websites now. HTML5 is preferred due to its flexibility and modern features.


// ✅ 26). What is the difference between HTML and HTML5?
// 🔷 HTML:
// Older versions like HTML 4.01.
// Lacked support for multimedia (video/audio).
// Limited semantic tags.
// Needed Flash or external plugins for multimedia.

// 🔷 HTML5 (Latest version):
// Supports audio/video playback natively (no plugins).
// Introduced semantic tags (<header>, <footer>, <article>, etc.)
// Supports local storage (no cookies required).
// Enhanced form controls (<input type="date">, <email>, <range>, etc.)
// Introduced Canvas API, Geolocation API, WebSockets, and more.

// 🔍 Summary Table:
// | Feature            | HTML             | HTML5                               |
// | ------------------ | ---------------- | ----------------------------------- |
// | Multimedia support | Needs plugins    | Built-in `<audio>`, `<video>`       |
// | Form types         | Limited          | Advanced types like `email`, `date` |
// | Semantic tags      | Minimal          | Many semantic tags                  |
// | APIs               | None or external | Built-in APIs (Canvas, Geo, etc.)   |
// | Mobile support     | Limited          | Designed with mobile in mind        |


// Follow-up Questions:

// Q: What is Canvas in HTML5?
// A: <canvas> is an HTML5 element that allows dynamic drawing of graphics via JavaScript — great for games, charts, and animations.

// Q: Does HTML5 work in old browsers?
// A: Most modern browsers support HTML5. Older browsers (like IE8 or below) have limited or no support.


// ✅ 27). What is the role of the <head> tag in HTML?
// 🔷 Purpose:
// The <head> tag contains meta-information about the document that’s not directly visible to users but is essential for:
// Browser behavior
// SEO
// External file linking
// Page metadata

// 🔷 What it can contain:
// | Tag/Element | Purpose                                    |
// | ----------- | ------------------------------------------ |
// | `<title>`   | Sets page title (shows in tab)             |
// | `<meta>`    | Defines metadata (charset, viewport, etc.) |
// | `<link>`    | Link to stylesheets or favicons            |
// | `<style>`   | Internal CSS                               |
// | `<script>`  | Link or write JS                           |

// 🔷 Example:
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>My Portfolio</title>
//   <link rel="stylesheet" href="styles.css" />
// </head>

// Follow-up Questions:

// Q: Why is <meta charset="UTF-8"> important?
// A: It tells the browser which character encoding to use, ensuring symbols and special characters render properly.

// Q: What does <meta name="viewport" ...> do?
// A: It ensures your site is responsive on all devices — crucial for mobile-first design.


// ✅ 28). What is the role of the method attribute in HTML forms?
// 🔷 Purpose:
// The method attribute defines how form data is sent to the server.

// 🔷 Two Common Values:
// | Method | Description                                                                                     |
// | ------ | ----------------------------------------------------------------------------------------------- |
// | `GET`  | Sends form data as **URL parameters**. Used for search, filter, or read-only actions.           |
// | `POST` | Sends data **inside the HTTP request body**. Used for actions like login, form submission, etc. |

// 🔷 Example:
{/* <form method="GET" action="/search">
  <input type="text" name="query" />
  <button type="submit">Search</button>
</form> */}

{/* <form method="POST" action="/submit">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form> */}

// 🔍 Key Differences:
// | Feature         | GET                     | POST                           |
// | --------------- | ----------------------- | ------------------------------ |
// | Data Visibility | Visible in URL          | Hidden in body                 |
// | Length Limit    | Limited                 | No limit (practically)         |
// | Use Case        | Search, read operations | Submit, write operations       |
// | Bookmarkable    | Yes                     | No                             |
// | Secure?         | Less secure             | More secure for sensitive data |


// Follow-up Questions:

// Q: Why should login forms use POST?
// A: Because GET exposes data in the URL, which can be logged or cached. POST hides it in the request body, making it safer.

// Q: What happens if I omit the method attribute?
// A: The browser defaults to GET.



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























