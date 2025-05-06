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