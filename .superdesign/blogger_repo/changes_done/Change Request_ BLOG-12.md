# **Change Request: BLOG-12**

Date: 2025-08-01  
Author: AIficionado  
**Request:** Fix Site-Wide CSS Layout and Responsiveness

## **1\. Overview**

This change request resolves the critical issue where the main blog pages are not styled correctly. The root cause has been identified as a missing container div in the main layout file, \_includes/base.njk, which prevents the CSS for centering and responsiveness from being applied.  
This change request provides the definitive fix for the site's layout.

## **2\. Technical Implementation**

The implementation requires modifying one file: \_includes/base.njk.

### **Step 1 (CRITICAL): Fix the Base Layout**

Replace the entire content of \_includes/base.njk with the code below. This version wraps the \<header\> and \<main\> sections in a \<div class="container"\>, which will correctly apply your site's centering and padding styles.  
**File:** \_includes/base.njk  
\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
    \<meta charset="UTF-8"\>  
    \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
    \<title\>{{ title }}\</title\>  
    \<link rel="stylesheet" href="/css/style.css"\>  
	\<link rel="apple-touch-icon" sizes="180x180" href="/favicon\_io/apple-touch-icon.png"\>  
	\<link rel="icon" type="image/png" sizes="32x32" href="/favicon\_io/favicon-32x32.png"\>  
	\<link rel="icon" type="image/png" sizes="16x16" href="/favicon\_io/favicon-16x16.png"\>  
	\<link rel="manifest" href="/favicon\_io/site.webmanifest"\>  
\</head\>  
\<body\>  
    \<div class="container"\>  
        \<header\>  
            \<h1\>\<a href="/"\>{{ metadata.title }}\</a\>\</h1\>  
            \<nav\>  
                \<a href="/"\>Home\</a\>  
                \<a href="/about/"\>About\</a\>  
                \<a href="/showcase/" target="\_blank" rel="noopener noreferrer"\>Showcase\</a\>  
                \<a href="/now/"\>Now\</a\>  
                \<a href="/impressum/"\>Impressum\</a\>  
            \</nav\>  
        \</header\>  
        \<main\>  
            {{ content | safe }}  
        \</main\>  
    \</div\>  
    \<footer class="site-footer"\>  
        \<div class="container"\>  
            \<div class="social-links"\>  
                \<span\>Connect:\</span\>  
                \<a href="https://www.linkedin.com/in/daniel-zirpoli-4324a93b/" target="\_blank" rel="noopener noreferrer"\>LinkedIn\</a\>  
                \<a href="https://github.com/zirpo" target="\_blank" rel="noopener noreferrer"\>GitHub\</a\>  
                \<a href="https://medium.com/@aificionado" target="\_blank" rel="noopener noreferrer"\>Medium\</a\>  
                \<a href="https://x.com/zirpo" target="\_blank" rel="noopener noreferrer"\>X\</a\>  
            \</div\>  
            \<div class="footer-legal"\>  
                \<p class="copyright"\>© 2025 Mein automatisierter Blog. All rights reserved.\</p\>  
                \<a href="/impressum/"\>Impressum\</a\>  
            \</div\>  
        \</div\>  
    \</footer\>  
\</body\>  
\</html\>

## **3\. Expected Outcome**

After applying this change, the styling on your homepage and all blog posts will be restored. The content will be correctly centered, have the proper spacing on the left and right, and be fully responsive again.