### **Change Request: BLOG-02**

Title: Add "About Me" Page with Personal Branding  
Author: AIficionado (Junior Developer)  
Date: 2025-07-22  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The blog has a professional design for displaying posts but lacks a dedicated page for the author to introduce themselves. Without an "About" page, there is a missed opportunity to build trust, establish authority, and create a personal connection with the audience.  
1.2. Problem Statement  
The site feels impersonal and lacks character. Readers have no context for who the author is, what drives their writing, or what their core areas of expertise are. This makes the blog feel more like a content feed than a personal platform.  
1.3. Proposed Solution  
This change request proposes the creation of a dedicated "About Me" page. This page will add personality and credibility to the site by introducing the author through:

1. A compelling "My Why" statement that explains the author's motivation.  
2. A clear list of "Core Interests" to highlight areas of focus.  
3. A placeholder for a professional photograph to add a human element.  
4. A navigation link in the site header to make the page easily accessible.

### **2\. High-Level Description of Changes**

1. A new page will be created at the URL /about/.  
2. A new file, about.md, will be created in the root directory to contain the content for this page.  
3. The base layout, \_includes/base.njk, will be modified to include a navigation link to the new "About" page in the header.  
4. The stylesheet, css/style.css, will be updated with new styles to format the "About" page, including a two-column layout for a photo and text.

### **3\. Detailed Implementation Steps**

3.1. File: about.md (Create New File)  
Create a new file named about.md in the root directory of the project. Add the following content.  
\---  
title: About Me  
layout: base.njk  
\---

\<div class="about-page"\>  
  \<div class="about-photo"\>  
    \<img src="https://placehold.co/400x400/343a40/f8f9fa?text=Your\\nPhoto" alt="A professional headshot of the author."\>  
  \</div\>  
  \<div class="about-info"\>  
    \<h2\>My Why\</h2\>  
    \<p\>I'm driven to explore the deeper, often overlooked, human and societal implications of our technology. I believe in moving beyond the headlines to foster a more critical and responsible conversation about AI's true cost, its ethical dimensions, and its place in our world.\</p\>  
      
    \<h3\>Core Interests\</h3\>  
    \<ul class="interests-list"\>  
      \<li\>Ethical AI & Responsible Tech\</li\>  
      \<li\>The Human Cost of Innovation\</li\>  
      \<li\>European Technology & Geopolitics\</li\>  
      \<li\>The Intersection of AI and Society\</li\>  
      \<li\>Digital Security & Systems\</li\>  
    \</ul\>  
  \</div\>  
\</div\>

3.2. File: \_includes/base.njk (Modify)  
Update the header section to include a navigation menu with a link to the Home page and the new About page.  
**Replace this block:**  
\<header class="site-header"\>  
  \<div class="container"\>  
    \<h1\>\<a href="/"\>{{ title }}\</a\>\</h1\>  
  \</div\>  
\</header\>

**With this new block:**  
\<header class="site-header"\>  
  \<div class="container"\>  
    \<div class="site-branding"\>  
      \<h1\>\<a href="/"\>{{ title }}\</a\>\</h1\>  
    \</div\>  
    \<nav class="site-navigation"\>  
      \<ul\>  
        \<li\>\<a href="/"\>Home\</a\>\</li\>  
        \<li\>\<a href="/about/"\>About\</a\>\</li\>  
      \</ul\>  
    \</nav\>  
  \</div\>  
\</header\>

3.3. File: css/style.css (Modify)  
Append the following CSS rules to the end of the css/style.css file. These styles will format the new navigation and the "About" page layout.  
/\* \--- Header Navigation (Update) \--- \*/  
.site-header .container {  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
}

.site-navigation ul {  
    list-style: none;  
    margin: 0;  
    padding: 0;  
    display: flex;  
}

.site-navigation li {  
    margin-left: 20px;  
}

.site-navigation a {  
    color: \#343a40;  
    font-weight: 500;  
    font-size: 1rem;  
}

.site-navigation a:hover {  
    color: \#007bff;  
}

/\* \--- About Page \--- \*/  
.about-page {  
    display: grid;  
    grid-template-columns: 1fr 2fr;  
    gap: 2rem;  
    align-items: start;  
    background-color: \#ffffff;  
    padding: 2rem;  
    border-radius: 8px;  
    border: 1px solid \#e9ecef;  
}

.about-photo img {  
    width: 100%;  
    height: auto;  
    border-radius: 8px;  
}

.about-info h2 {  
    margin-top: 0;  
    font-size: 2rem;  
}

.about-info h3 {  
    margin-top: 2rem;  
    border-bottom: 2px solid \#e9ecef;  
    padding-bottom: 0.5rem;  
}

.interests-list {  
    list-style: none;  
    padding: 0;  
}

.interests-list li {  
    background-color: \#f8f9fa;  
    padding: 0.5rem 1rem;  
    border-radius: 5px;  
    margin-bottom: 0.5rem;  
}

/\* Responsive styles for About Page \*/  
@media (max-width: 768px) {  
    .about-page {  
        grid-template-columns: 1fr;  
        gap: 1.5rem;  
    }  
    .about-photo {  
        max-width: 250px;  
        margin: 0 auto;  
    }  
}

### **4\. Acceptance Criteria (Definition of Done)**

1. A new "About" link is visible in the site's header navigation on all pages.  
2. Clicking the "About" link successfully navigates the user to the /about/ page.  
3. The "About" page displays the author's photo placeholder, the "My Why" paragraph, and the list of "Core Interests".  
4. The layout of the "About" page is responsive, appearing as two columns on wider screens and stacking into a single column on mobile devices.  
5. The new styles do not negatively impact the existing appearance of the homepage or individual blog posts.

### **5\. Potential Risks & Mitigation**

* **Risk:** The placeholder image URL might break in the future.  
  * **Mitigation:** The service used (placehold.co) is reliable for placeholders. The user will eventually replace this with a real image, at which point the risk is eliminated. The alt text provides a good fallback.  
* **Risk:** The new navigation might not look right on all screen sizes.  
  * **Mitigation:** The CSS is simple and uses flexbox, which is robust. The lack of complex responsive rules for the navigation itself makes it low-risk, but it should be tested on a mobile view.