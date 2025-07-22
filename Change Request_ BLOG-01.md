### **Change Request: BLOG-01**

Title: Visual and Structural Enhancement for Professional Blog Appearance  
Author: AIficionado (Junior Developer)  
Date: 2025-07-22  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The Eleventy-based blog is functionally serving content from markdown files. However, it completely lacks visual styling because the required css/style.css file is missing. The site currently renders as a plain, unformatted HTML document.  
1.2. Problem Statement  
The absence of a professional design makes the blog look unfinished and unengaging. This negatively impacts user experience, readability, and the overall credibility of the site. Key structural elements like a consistent header, footer, and a well-defined post layout are missing, leading to a poor presentation of the content.  
1.3. Proposed Solution  
To address these issues, this change request proposes a comprehensive visual and structural overhaul. This will be achieved by:

1. **Creating a professional CSS stylesheet** to define the site's visual identity.  
2. **Updating the base layout template** to include a global header, footer, and a structured content area.  
3. **Creating a dedicated layout for blog posts** to ensure all articles have a consistent and readable appearance.  
4. **Enhancing the homepage** to present the list of posts in a more organized and visually appealing manner.

### **2\. High-Level Description of Changes**

The implementation will focus on creating and modifying layout and style files. No changes will be made to the core logic of the Eleventy build process.

1. A new file, css/style.css, will be created. This file will contain all the styling rules for typography, colors, layout, and responsiveness.  
2. The main layout file, \_includes/base.njk, will be updated to include \<header\> and \<footer\> elements, providing a consistent frame for all pages.  
3. A new layout file, \_includes/post.njk, will be created to specifically style the content of individual blog posts.  
4. The homepage, index.md, will be updated to use a styled list for presenting the blog posts.  
5. All existing blog post markdown files will be updated to use the new post.njk layout.

### **3\. Detailed Implementation Steps**

To implement this feature, the following file changes are required.  
3.1. File: css/style.css (Create New File)  
Create a new directory named css in the project root if it doesn't exist. Inside it, create a new file named style.css and add the following content. This stylesheet provides a clean, modern, and responsive design.  
/\* \--- General & Typography \--- \*/  
body {  
    font-family: \-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  
    line-height: 1.7;  
    margin: 0;  
    padding: 0;  
    background-color: \#f8f9fa;  
    color: \#212529;  
    display: flex;  
    flex-direction: column;  
    min-height: 100vh;  
}

h1, h2, h3, h4, h5, h6 {  
    font-family: "Georgia", "Times New Roman", serif;  
    color: \#343a40;  
    line-height: 1.3;  
}

a {  
    color: \#007bff;  
    text-decoration: none;  
    transition: color 0.2s ease-in-out;  
}

a:hover {  
    color: \#0056b3;  
}

/\* \--- Layout & Container \--- \*/  
.container {  
    max-width: 800px;  
    margin: 0 auto;  
    padding: 0 20px;  
    width: 100%;  
}

main {  
    flex-grow: 1;  
    padding: 2rem 0;  
}

/\* \--- Header \--- \*/  
.site-header {  
    background-color: \#ffffff;  
    border-bottom: 1px solid \#dee2e6;  
    padding: 1rem 0;  
}

.site-header .container {  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
}

.site-header h1 {  
    margin: 0;  
    font-size: 1.5rem;  
}

.site-header h1 a {  
    color: \#212529;  
    font-weight: bold;  
}

/\* \--- Homepage Post List \--- \*/  
.post-list {  
    list-style: none;  
    padding: 0;  
    margin: 0;  
}

.post-list li {  
    background-color: \#ffffff;  
    padding: 1.5rem;  
    margin-bottom: 1rem;  
    border-radius: 8px;  
    border: 1px solid \#e9ecef;  
    transition: box-shadow 0.2s ease-in-out;  
}

.post-list li:hover {  
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);  
}

.post-list a {  
    font-size: 1.25rem;  
    font-weight: bold;  
    color: \#343a40;  
}

.post-list .post-date {  
    display: block;  
    font-size: 0.875rem;  
    color: \#6c757d;  
    margin-top: 0.5rem;  
}

/\* \--- Single Post Article \--- \*/  
.post {  
    background-color: \#ffffff;  
    padding: 2rem;  
    border-radius: 8px;  
    border: 1px solid \#e9ecef;  
}

.post h1 {  
    margin-top: 0;  
    font-size: 2.5rem;  
}

.post .post-meta {  
    font-size: 0.9rem;  
    color: \#6c757d;  
    margin-bottom: 2rem;  
    display: block;  
}

.post-content p {  
    margin-bottom: 1.5rem;  
}

.post-content blockquote {  
    border-left: 4px solid \#007bff;  
    padding-left: 1rem;  
    margin: 2rem 0;  
    color: \#6c757d;  
    font-style: italic;  
}

/\* \--- Footer \--- \*/  
.site-footer {  
    background-color: \#343a40;  
    color: \#f8f9fa;  
    text-align: center;  
    padding: 2rem 0;  
    margin-top: auto;  
    font-size: 0.9rem;  
}

.site-footer p {  
    margin: 0;  
}

3.2. File: \_includes/base.njk (Modify)  
Replace the entire content of this file with the new structure below. This adds the header, footer, and a main container for the content.  
\<\!DOCTYPE html\>  
\<html lang="de"\>  
\<head\>  
  \<meta charset="UTF-8"\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
  \<title\>{{ title }}\</title\>  
  \<link rel="stylesheet" href="/css/style.css"\>  
\</head\>  
\<body\>  
  \<header class="site-header"\>  
    \<div class="container"\>  
      \<h1\>\<a href="/"\>{{ title }}\</a\>\</h1\>  
    \</div\>  
  \</header\>

  \<main\>  
    \<div class="container"\>  
      {{ content | safe }}  
    \</div\>  
  \</main\>

  \<footer class="site-footer"\>  
    \<div class="container"\>  
      \<p\>© 2025 Mein automatisierter Blog. All rights reserved.\</p\>  
    \</div\>  
  \</footer\>  
\</body\>  
\</html\>

3.3. File: \_includes/post.njk (Create New File)  
Create a new file in the \_includes directory named post.njk. This will serve as the specific layout for all blog posts.  
\---  
layout: base.njk  
\---  
\<article class="post"\>  
  \<h1\>{{ title }}\</h1\>  
  \<span class="post-meta"\>Veröffentlicht am {{ page.date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}\</span\>  
  \<div class="post-content"\>  
    {{ content | safe }}  
  \</div\>  
\</article\>

3.4. File: index.md (Modify)  
Update the homepage to use the new CSS classes for the post list.  
\---  
title: Mein automatisierter Blog  
layout: base.njk  
\---  
\# Neueste Beiträge

\<ul class="post-list"\>  
{%- for post in collections.post | reverse \-%}  
  \<li\>  
    \<a href="{{ post.url }}"\>{{ post.data.title }}\</a\>  
    \<span class="post-date"\>{{ post.date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}\</span\>  
  \</li\>  
{%- endfor \-%}  
\</ul\>

3.5. Update Layout for All Posts  
Go through each markdown file in the posts/ directory (e.g., posts/mistral-ai-europes-answer-to-openai.md) and change the layout in the front matter.  
Change this:  
layout: base.njk  
To this:  
layout: post.njk  
3.6. File: .gitignore (Modify)  
For good repository hygiene, add .DS\_Store to your .gitignore file to prevent these macOS-specific files from being tracked.  
\# Abhängigkeiten  
node\_modules

\# Build-Output  
\_site

\# macOS  
.DS\_Store

### **4\. Acceptance Criteria (Definition of Done)**

The implementation is considered complete and successful when:

1. The website displays with the new fonts, colors, and spacing defined in css/style.css.  
2. All pages show a consistent header with the site title and a consistent footer.  
3. The homepage (index.md) correctly lists all blog posts in a styled list, with each item showing the post title and publication date.  
4. Clicking on a post title from the homepage navigates to the full article page.  
5. Each individual blog post page is rendered using the post.njk layout, displaying the title, publication date, and formatted content within a styled container.  
6. The website is responsive and maintains a readable and professional appearance on both desktop and mobile screen sizes.

### **5\. Potential Risks & Mitigation**

* **Risk:** The developer might forget to update the layout front matter in all existing post files.  
  * **Mitigation:** The instructions in step 3.5 are explicit. A quick check of the rendered site after the build will immediately reveal if any posts are using the old, unstyled layout.  
* **Risk:** Date formatting might fail if a post is missing a date in its front matter.  
  * **Mitigation:** Eleventy automatically provides a date from the file system if it's not in the front matter, making this a low risk. The provided Nunjucks code is robust enough to handle standard Eleventy date objects.