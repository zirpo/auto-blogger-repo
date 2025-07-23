### **Change Request: BLOG-06**

Title: Implement Brand Identity and Design Flourishes  
Author: AIficionado (Junior Developer)  
Date: 2025-07-23  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The website is structurally sound and functional, but it lacks a distinct visual identity. It uses generic web-safe fonts and a standard blue color for links, which doesn't convey a unique brand personality. The site also lacks a favicon, a key element for browser tab identification.  
1.2. Problem Statement  
To elevate the site from a simple blog to a memorable personal platform, it needs a more deliberate and consistent brand identity. This includes a unique color scheme, professional typography, and a custom favicon. The site's header should also be updated to better reflect the relationship between the author (zirpo) and the publication (AIficionado).  
1.3. Proposed Solution  
This change request proposes a full visual branding update by implementing three key "design flourishes":

1. **Font Pairing:** Introduce a modern, professional font pairing using Google Fonts to improve typography and character.  
2. **Unique Color Accent:** Replace the default blue with a sophisticated teal color to be used for all links and accents.  
3. **Custom Favicon:** Add a custom SVG favicon to give the site a unique identity in browser tabs and bookmarks.  
4. **Branding Update:** Refine the site header to clarify the branding as "AIficionado," a blog by zirpo.

### **2\. High-Level Description of Changes**

1. The base layout (\_includes/base.njk) will be updated to link to Google Fonts and include the new favicon and updated header text.  
2. A new SVG favicon file will be created in the images directory.  
3. The stylesheet (css/style.css) will be significantly updated to implement the new color scheme and font pairing across the entire site.

### **3\. Detailed Implementation Steps**

3.1. File: images/favicon.svg (Create New File)  
Create a new file named favicon.svg inside the images directory. This will be our custom favicon.  
\<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"\>  
  \<path d="M50 15 L15 85 H35 L45 65 H55 L65 85 H85 Z" stroke="\#0d9488" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/\>  
  \<path d="M42 55L62 55" stroke="\#0d9488" stroke-width="10" stroke-linecap="round"/\>  
\</svg\>

3.2. File: \_includes/base.njk (Modify)  
Update the \<head\> section to add the Google Fonts link and the new favicon. Also, update the \<h1\> in the header to reflect the new branding.  
**Replace the entire content of \_includes/base.njk with this:**  
\<\!DOCTYPE html\>  
\<html lang="de"\>  
\<head\>  
  \<meta charset="UTF-8"\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
  \<title\>{{ title }} | AIficionado\</title\>  
    
  \<\!-- Google Fonts \--\>  
  \<link rel="preconnect" href="https://fonts.googleapis.com"\>  
  \<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin\>  
  \<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700\&family=Lora:ital,wght@0,400;0,700;1,400\&display=swap" rel="stylesheet"\>  
    
  \<\!-- Favicon \--\>  
  \<link rel="icon" href="/images/favicon.svg" type="image/svg+xml"\>  
    
  \<link rel="stylesheet" href="/css/style.css"\>  
\</head\>  
\<body\>  
  \<header class="site-header"\>  
    \<div class="container"\>  
      \<div class="site-branding"\>  
        \<h1\>\<a href="/"\>AIficionado\</a\>\</h1\>  
        \<p class="site-tagline"\>A blog by zirpo\</p\>  
      \</div\>  
      \<nav class="site-navigation"\>  
        \<ul\>  
          \<li\>\<a href="/"\>Home\</a\>\</li\>  
          \<li\>\<a href="/about/"\>About\</a\>\</li\>  
          \<li\>\<a href="/now/"\>Now\</a\>\</li\>  
        \</ul\>  
      \</nav\>  
    \</div\>  
  \</header\>

  \<main\>  
    \<div class="container"\>  
      {{ content | safe }}  
    \</div\>  
  \</main\>

  \<footer class="site-footer"\>  
    \<div class="container"\>  
      \<div class="social-links"\>  
        \<span\>Connect:\</span\>  
        \<a href="https://www.linkedin.com/in/daniel-zirpoli-4324a93b/" target="\_blank" rel="noopener noreferrer"\>LinkedIn\</a\>  
        \<a href="https://github.com/zirpo" target="\_blank" rel="noopener noreferrer"\>GitHub\</a\>  
        \<a href="https://medium.com/@aificionado" target="\_blank" rel="noopener noreferrer"\>Medium\</a\>  
        \<a href="https://x.com/zirpo" target="\_blank" rel="noopener noreferrer"\>X\</a\>  
      \</div\>  
      \<p class="copyright"\>© 2025 AIficionado. All rights reserved.\</p\>  
    \</div\>  
  \</footer\>  
\</body\>  
\</html\>

3.3. File: css/style.css (Modify)  
Replace the existing CSS rules related to fonts and colors with the new ones below. This will apply the new brand identity site-wide.  
**Replace the entire /\* \--- General & Typography \--- \*/ section with this:**  
/\* \--- General & Typography \--- \*/  
:root {  
  \--primary-color: \#0d9488; /\* Teal \*/  
  \--heading-font: 'Inter', sans-serif;  
  \--body-font: 'Lora', serif;  
}

body {  
    font-family: var(--body-font);  
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
    font-family: var(--heading-font);  
    color: \#343a40;  
    line-height: 1.3;  
    font-weight: 700;  
}

a {  
    color: var(--primary-color);  
    text-decoration: none;  
    transition: color 0.2s ease-in-out;  
}

a:hover {  
    color: \#0f766e; /\* Darker Teal \*/  
}

**Add these new rules to the /\* \--- Header \--- \*/ section:**  
.site-branding h1 {  
    margin: 0;  
    font-size: 1.75rem;  
}

.site-tagline {  
    margin: 0;  
    font-size: 0.9rem;  
    color: \#6c757d;  
    font-family: var(--body-font);  
    font-style: italic;  
}

**Update this rule in the /\* \--- About Page \--- \*/ section:**  
.about-info h3 {  
    margin-top: 2rem;  
    border-bottom: 2px solid \#e9ecef;  
    padding-bottom: 0.5rem;  
    font-weight: 700; /\* Add this \*/  
}

**Update this rule in the /\* \--- Footer (Update) \--- \*/ section:**  
.social-links a:hover {  
    color: var(--primary-color);  
}

### **4\. Acceptance Criteria (Definition of Done)**

1. The custom SVG favicon is visible in the browser tab.  
2. The site header now displays "AIficionado" as the main title with "A blog by zirpo" underneath.  
3. All headings on the site use the 'Inter' font, and all body text uses the 'Lora' font.  
4. The primary color for all links and interactive elements has changed from blue to the new teal (\#0d9488).  
5. The overall design remains cohesive and professional.

### **5\. Potential Risks & Mitigation**

* **Risk:** The Google Fonts service could be slow or unavailable.  
  * **Mitigation:** This is a low risk, as Google Fonts is a highly reliable and fast service. The browser will fall back to default system fonts (sans-serif, serif) if it fails, ensuring the site remains readable.  
* **Risk:** The new fonts or colors might not be to the author's taste.  
  * **Mitigation:** The fonts and color are defined in CSS variables at the top of the stylesheet (:root), making them extremely easy to change in one place without having to hunt through the entire file.