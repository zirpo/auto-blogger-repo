### **Change Request: BLOG-08**

Title: Improve Homepage Post Listing and Readability  
Author: AIficionado (Junior Developer)  
Date: 2025-07-24  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The homepage lists blog posts, but the sorting order is incorrect, with the newest posts appearing at the bottom. The list is also very basic, providing only a title and a date, which offers little context to the reader.  
1.2. Problem Statement  
The primary goal of the homepage is to showcase the latest content and encourage readers to click through. The incorrect sorting order and lack of information create a poor user experience, forcing users to scan the entire list to find new content.  
1.3. Proposed Solution  
This change request proposes a redesign of the homepage post list to address these issues. The solution involves two key parts:

1. **Correcting the Sort Order:** The template logic will be reviewed to ensure posts are sorted chronologically, with the newest appearing first.  
2. **Enhancing Readability:** Each list item will be enhanced to include a short excerpt from the post, giving readers a preview of the content. A subtle horizontal line will also be added between posts for better visual separation.

**Important Note on Sorting:** The reverse filter in the code is correct. However, for sorting to work as expected, **each blog post must have a unique date in its front matter.** If all posts have the same date, the sorting will be based on the file path, which can seem random. Please ensure you use unique dates for new posts.

### **2\. High-Level Description of Changes**

1. A custom Eleventy filter named postExcerpt will be created in .eleventy.js to generate a short, clean preview of each post.  
2. The homepage template (index.md) will be updated to use this new filter and display the excerpt for each post.  
3. The stylesheet (css/style.css) will be updated to style the new excerpt text and add a visual separator between list items.

### **3\. Detailed Implementation Steps**

3.1. File: .eleventy.js (Modify)  
Add a new custom filter to create the post excerpts. This function will take the post content, strip out all HTML tags, and truncate it to a specific length.  
**Add the following code block inside the module.exports function:**  
// ... after eleventyConfig.addFilter("readableDate", ...);

  // Custom filter to create a post excerpt  
  eleventyConfig.addFilter("postExcerpt", (post) \=\> {  
    if (\!post || \!post.templateContent) {  
      return "";  
    }  
    // Remove HTML tags and line breaks  
    const content \= post.templateContent.replace(/(\<(\[^\>\]+)\>)/gi, "").replace(/\\r?\\n|\\r/g, " ");  
    // Truncate to 180 characters  
    if (content.length \<= 180\) {  
      return content;  
    }  
    return content.slice(0, 180\) \+ "...";  
  });

// ... before the return statement

3.2. File: index.md (Modify)  
Update the post-list loop to include the new excerpt and a horizontal rule.  
**Replace the entire \<ul class="post-list"\>...\</ul\> block with this new version:**  
\<ul class="post-list"\>  
{%- for post in collections.post | reverse \-%}  
  \<li class="post-list-item"\>  
    \<h2\>\<a href="{{ post.url }}"\>{{ post.data.title }}\</a\>\</h2\>  
    \<span class="post-date"\>{{ post.date | readableDate }}\</span\>  
    \<p class="post-excerpt"\>  
      {{ post | postExcerpt }}  
    \</p\>  
  \</li\>  
{%- endfor \-%}  
\</ul\>

3.3. File: css/style.css (Modify)  
Append the following CSS rules to the end of the file to style the new elements.  
/\* \--- Homepage Post List (Update) \--- \*/  
.post-list-item {  
    padding: 1.5rem 0;  
    border-bottom: 1px solid \#dee2e6;  
}

.post-list-item:first-child {  
    padding-top: 0;  
}

.post-list-item:last-child {  
    border-bottom: none;  
}

.post-list-item h2 {  
    margin: 0;  
}

.post-list-item h2 a {  
    font-size: 1.5rem;  
    font-family: var(--heading-font);  
    font-weight: 700;  
    color: \#343a40;  
}

.post-list-item h2 a:hover {  
    color: var(--primary-color);  
}

.post-excerpt {  
    margin-top: 0.5rem;  
    margin-bottom: 0;  
    color: \#495057;  
    line-height: 1.6;  
}

### **4\. Acceptance Criteria (Definition of Done)**

1. When posts have unique dates, they are sorted on the homepage with the most recent post at the top.  
2. Each item in the post list now displays a short text excerpt below the title and date.  
3. A subtle horizontal line visually separates each post in the list.  
4. The new layout is clean, readable, and consistent with the site's overall design.

### **5\. Potential Risks & Mitigation**

* **Risk:** Sorting still appears incorrect.  
  * **Mitigation:** This will happen if the post files do not have unique dates in their front matter. The author must ensure that new posts are given distinct dates for the chronological sorting to work as intended.