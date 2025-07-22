### **Change Request: BLOG-04**

Title: Add Social Connection Links to Footer  
Author: AIficionado (Junior Developer)  
Date: 2025-07-23  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The website provides content and context about the author but lacks direct links to their professional or social profiles online. This is a missed opportunity for readers who wish to learn more about the author's professional background or connect elsewhere.  
1.2. Problem Statement  
Readers who are engaged by the content have no clear path to connect with or learn more about the author on other professional platforms. The author has indicated they are not highly active on social media, so a subtle, low-pressure solution is required.  
1.3. Proposed Solution  
This change request proposes adding a small, unobtrusive "Connect" section to the site's footer. This section will contain simple text links to the author's chosen professional profiles (e.g., LinkedIn, GitHub, Medium). This approach provides connection points without creating an expectation of high social media activity.

### **2\. High-Level Description of Changes**

1. The footer in \_includes/base.njk will be modified to include a new div for social links.  
2. The stylesheet css/style.css will be updated with a few lines of CSS to style these new links, ensuring they are clean, subtle, and consistent with the site's design.  
3. The author's actual profile URLs will be used for the links.

### **3\. Detailed Implementation Steps**

3.1. File: \_includes/base.njk (Modify)  
In the footer section, add the new social-links div after the copyright paragraph.  
**Replace this footer:**  
\<footer class="site-footer"\>  
  \<div class="container"\>  
    \<p\>© 2025 Mein automatisierter Blog. All rights reserved.\</p\>  
  \</div\>  
\</footer\>

**With this updated footer:**  
\<footer class="site-footer"\>  
  \<div class="container"\>  
    \<div class="social-links"\>  
      \<span\>Connect:\</span\>  
      \<a href="https://www.linkedin.com/in/daniel-zirpoli-4324a93b/" target="\_blank" rel="noopener noreferrer"\>LinkedIn\</a\>  
      \<a href="https://github.com/zirpo" target="\_blank" rel="noopener noreferrer"\>GitHub\</a\>  
      \<a href="https://medium.com/@aificionado" target="\_blank" rel="noopener noreferrer"\>Medium\</a\>  
      \<a href="https://x.com/zirpo" target="\_blank" rel="noopener noreferrer"\>X\</a\>  
    \</div\>  
    \<p class="copyright"\>© 2025 Mein automatisierter Blog. All rights reserved.\</p\>  
  \</div\>  
\</footer\>

3.2. File: css/style.css (Modify)  
Append the following CSS rules to the end of the css/style.css file. This will style the new footer elements.  
/\* \--- Footer (Update) \--- \*/  
.site-footer .container {  
    display: flex;  
    flex-direction: column;  
    align-items: center;  
    gap: 1rem;  
}

.social-links {  
    display: flex;  
    gap: 1.5rem;  
    align-items: center;  
}

.social-links span {  
    font-weight: bold;  
    color: \#adb5bd;  
}

.social-links a {  
    color: \#f8f9fa;  
    text-decoration: none;  
    transition: color 0.2s ease-in-out;  
}

.social-links a:hover {  
    color: \#007bff;  
}

.copyright {  
    margin: 0;  
    color: \#6c757d;  
    font-size: 0.875rem;  
}

### **4\. Acceptance Criteria (Definition of Done)**

1. The site footer now displays a "Connect:" label followed by text links for "LinkedIn," "GitHub," "Medium," and "X."  
2. These links are styled subtly and fit cleanly within the existing footer design.  
3. Hovering over the links provides a visual feedback (color change).  
4. Clicking on a link correctly opens a new tab to the author's actual profile page.  
5. The implementation does not negatively affect any other part of the site's layout or design.

### **5\. Potential Risks & Mitigation**

* **Risk:** A social media URL changes in the future.  
  * **Mitigation:** The URLs are located in a single, easy-to-find place (\_includes/base.njk) and can be updated quickly by the author.