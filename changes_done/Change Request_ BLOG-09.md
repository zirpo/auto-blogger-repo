### **Change Request: BLOG-09**

Title: Add Legally Required Impressum Page  
Author: AIficionado (Junior Developer)  
Date: 2025-07-25  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The website is publicly accessible and targeted towards a German-speaking audience via a .de domain. To comply with German law (Digitale-Dienste-Gesetz), a legal notice, or "Impressum," is required.  
1.2. Problem Statement  
The site currently lacks an Impressum page, which poses a legal risk of warnings or fines. A dedicated, easily accessible page with the required contact information must be created.  
1.3. Proposed Solution  
This change request proposes the creation of a dedicated /impressum/ page containing the legally required information provided by the author. A link to this page will be added to the site's footer to ensure it is easily accessible from anywhere on the site, as required by law.

### **2\. High-Level Description of Changes**

1. A new markdown file, impressum.md, will be created in the project root to serve as the Impressum page.  
2. The footer in the base layout (\_includes/base.njk) will be updated to include a link to the new Impressum page.  
3. The stylesheet (css/style.css) will be updated to ensure the new footer link is styled correctly.

### **3\. Detailed Implementation Steps**

3.1. File: impressum.md (Create New File)  
Create a new file named impressum.md in the root directory of the project. Add the following content.  
\---  
title: Impressum  
layout: base.njk  
\---

\<div class="page-content"\>  
  \<h1\>Impressum\</h1\>

  \<h2\>Angaben gemäß § 5 DDG\</h2\>  
  \<p\>  
    Daniel Zirpoli\<br\>  
    Grünstraße 61\<br\>  
    40723 Hilden\<br\>  
    Deutschland  
  \</p\>

  \<h2\>Kontakt\</h2\>  
  \<p\>  
    E-Mail: contact@zirpo.de\<br\>  
    \<em\>Hinweis: Eine Telefonnummer wird aus Datenschutzgründen nicht öffentlich aufgeführt. Eine schnelle Kontaktaufnahme ist per E-Mail gewährleistet.\</em\>  
  \</p\>

  \<h2\>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV\</h2\>  
  \<p\>  
    Daniel Zirpoli\<br\>  
    Grünstraße 61\<br\>  
    40723 Hilden  
  \</p\>  
\</div\>

3.2. File: \_includes/base.njk (Modify)  
Update the footer section to include the new "Impressum" link. It should be placed next to the copyright notice.  
**Modify the \<p class="copyright"\> line and add the new link structure:**  
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
      \<p class="copyright"\>© 2025 AIficionado. All rights reserved.\</p\>  
      \<a href="/impressum/"\>Impressum\</a\>  
    \</div\>  
  \</div\>  
\</footer\>

3.3. File: css/style.css (Modify)  
Append the following CSS rules to the end of the file. This will style the new footer layout correctly.  
/\* \--- Footer Legal Links \--- \*/  
.footer-legal {  
    display: flex;  
    gap: 1rem;  
    align-items: center;  
    margin-top: 1rem;  
    flex-wrap: wrap; /\* Allows wrapping on small screens \*/  
    justify-content: center;  
}

.footer-legal .copyright {  
    margin: 0;  
}

.footer-legal a {  
    color: \#adb5bd;  
    text-decoration: none;  
    font-size: 0.875rem;  
}

.footer-legal a:hover {  
    color: \#f8f9fa;  
}

/\* \--- Update Main Footer Container \--- \*/  
.site-footer .container {  
    gap: 1.5rem; /\* Increase gap for better spacing \*/  
}

### **4\. Acceptance Criteria (Definition of Done)**

1. A new "Impressum" link is visible in the site's footer on all pages.  
2. Clicking the link successfully navigates to the /impressum/ page.  
3. The Impressum page correctly displays the author's name, address, and contact email.  
4. The footer layout remains clean and organized with the new link.

### **5\. Potential Risks & Mitigation**

* **Risk:** The legal information provided might not fully satisfy all interpretations of the law without a phone number.  
  * **Mitigation:** The author is aware of this legal gray area. A note has been added to the Impressum page to address this. The author can choose to add a dedicated phone number later if desired.