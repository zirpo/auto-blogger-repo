### **Change Request: BLOG-03**

Title: Add "Now" Page for Real-Time Personal Updates  
Author: AIficionado (Junior Developer)  
Date: 2025-07-23  
Status: Implemented

### **1\. Introduction & Rationale**

1.1. Current Situation  
The website has a static "About" page that establishes the author's identity and mission. However, it doesn't provide insight into the author's current projects, interests, or focus areas.  
1.2. Problem Statement  
To further develop the site's personality and create a more dynamic connection with the audience, a space is needed to share what the author is engaged with right now. This adds a layer of timeliness and relevance that a static "About" page cannot provide.  
1.3. Proposed Solution  
This change request proposes the creation of a "/now" page, a concept popularized by Derek Sivers. This page will be a simple, text-based snapshot of the author's current professional and personal focus. It's a low-maintenance way to keep the site feeling fresh and personal.

### **2\. High-Level Description of Changes**

1. A new page will be created at the URL /now/.  
2. A new file, now.md, will be created in the root directory to hold the content for this page.  
3. The main navigation in the site header will be updated to include a link to the "Now" page.  
4. Minimal new CSS will be added to ensure the page is styled consistently with the rest of the site.

### **3\. Detailed Implementation Steps**

3.1. File: now.md (Create New File)  
Create a new file named now.md in the root directory of the project. Add the following content.  
\---  
title: What I'm Doing Now  
layout: base.njk  
\---

\<div class="page-content"\>  
  \<h1\>What I'm Doing Now\</h1\>  
  \<p class="last-updated"\>Last updated: July 2025\</p\>

  \<h3\>My Focus\</h3\>  
  \<p\>By day, I'm a project manager in the telco industry. In my free time, my focus is on practical automation. I'm constantly exploring how I can use AI to streamline my own work and stay informed by consuming a steady diet of relevant articles and podcasts on the topic.\</p\>

  \<h3\>Currently Reading\</h3\>  
  \<p\>I recently finished Yuval Noah Harari's \<em\>Nexus\</em\>, which I found to be a refreshingly sober take on the risks and opportunities of AI. Now, I'm diving into the deep end of science fiction with Dan Simmons' \<em\>Ilium\</em\>.\</p\>  
    
  \<h3\>Big Questions on My Mind\</h3\>  
  \<p\>I'm currently wondering about the timeline of it all. When does the current financial AI bubble implode? Who will ultimately win the race? And will we start seeing the major societal shifts in the next 5, 10, or 15 years?\</p\>

  \<h3\>A Tool I Recommend\</h3\>  
  \<p\>I highly recommend checking out Daniel Miessler's \<a href="https://github.com/danielmiessler/Fabric" target="\_blank" rel="noopener noreferrer"\>Fabric\</a\> project on GitHub. It's an open-source framework for augmenting human intelligence using AI.\</p\>

  \<p style="margin-top: 2rem; font-style: italic;"\>(This is a \<a href="https://nownownow.com/about" target="\_blank" rel="noopener noreferrer"\>/now page\</a\>, and you should make one too.)\</p\>  
\</div\>

3.2. File: \_includes/base.njk (Modify)  
Update the header navigation to include the new "Now" link.  
**Replace this list:**  
\<ul\>  
  \<li\>\<a href="/"\>Home\</a\>\</li\>  
  \<li\>\<a href="/about/"\>About\</a\>\</li\>  
\</ul\>

**With this updated list:**  
\<ul\>  
  \<li\>\<a href="/"\>Home\</a\>\</li\>  
  \<li\>\<a href="/about/"\>About\</a\>\</li\>  
  \<li\>\<a href="/now/"\>Now\</a\>\</li\>  
\</ul\>

3.3. File: css/style.css (Modify)  
Append the following CSS rules to the end of the css/style.css file. This adds styling for a generic page content container and the "last updated" text.  
/\* \--- Generic Page Content \--- \*/  
.page-content {  
    background-color: \#ffffff;  
    padding: 2rem;  
    border-radius: 8px;  
    border: 1px solid \#e9ecef;  
}

.page-content h1 {  
    margin-top: 0;  
    font-size: 2.5rem;  
}

.page-content h3 {  
    margin-top: 2rem;  
    border-bottom: 2px solid \#e9ecef;  
    padding-bottom: 0.5rem;  
}

.last-updated {  
    font-size: 0.9rem;  
    color: \#6c757d;  
    font-style: italic;  
    margin-top: \-1.5rem;  
    margin-bottom: 2rem;  
}

### **4\. Acceptance Criteria (Definition of Done)**

1. A new "Now" link is visible in the site's header navigation, next to the "About" link.  
2. Clicking the "Now" link successfully navigates the user to the /now/ page.  
3. The "Now" page displays the title, the "Last updated" date, and the content sections derived from the questionnaire.  
4. The page is styled consistently with the rest of the site, using the new .page-content class.

### **5\. Potential Risks & Mitigation**

* **Risk:** The content on the "Now" page becomes outdated and no longer reflects the author's current activities.  
  * **Mitigation:** This is an inherent feature of a "/now" page. The page itself encourages periodic updates. The "Last updated" date provides clear context to the reader about the freshness of the information. The author is responsible for keeping it current.
