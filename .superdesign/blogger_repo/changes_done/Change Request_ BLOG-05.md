### **Change Request: BLOG-05**

Title: Fix Build Errors with Robust Date Formatting  
Author: AIficionado (Junior Developer)  
Date: 2025-07-23  
Status: Proposed

### **1\. Introduction & Rationale**

1.1. Current Situation  
The website is failing to build and deploy on Netlify, resulting in a server error (Error \- Request ID: ...). The build process works locally but fails in the production environment.  
1.2. Problem Statement  
The JavaScript function toLocaleDateString() used for formatting dates in the templates is likely causing the build to fail. This function's behavior can be inconsistent across different server environments and Node.js versions, making it a common source of deployment errors.  
1.3. Proposed Solution  
To ensure consistent and reliable builds, this change request proposes replacing the native toLocaleDateString() function with a dedicated date-formatting library, luxon. We will install luxon and register a custom Eleventy filter called readableDate. This is the standard, recommended approach for handling dates in Eleventy projects and will resolve the build failure.

### **2\. High-Level Description of Changes**

1. The luxon library will be added as a project dependency.  
2. The Eleventy configuration file, .eleventy.js, will be updated to create a new, reusable date filter named readableDate.  
3. All templates that display dates (index.md and \_includes/post.njk) will be updated to use this new, robust filter instead of the old JavaScript function.

### **3\. Detailed Implementation Steps**

3.1. Install luxon Library  
Open your project in the terminal and run the following command to install luxon. This will add it to your package.json dependencies.  
npm install luxon

3.2. File: .eleventy.js (Modify)  
Update the Eleventy configuration to import luxon and create the custom filter.  
**Replace the entire content of .eleventy.js with this:**  
const { DateTime } \= require("luxon");

module.exports \= function(eleventyConfig) {  
  eleventyConfig.addCollection("post", function(collectionApi) {  
    return collectionApi.getFilteredByGlob("posts/\*\*/\*.md");  
  });

  // Create a custom 'readableDate' filter  
  eleventyConfig.addFilter("readableDate", dateObj \=\> {  
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLLL yyyy");  
  });

  // Passthrough copy for static assets  
  eleventyConfig.addPassthroughCopy("css");  
  eleventyConfig.addPassthroughCopy("images");

  return {  
    dir: { input: ".", includes: "\_includes", output: "\_site" },  
  };  
};

3.3. File: index.md (Modify)  
Update the homepage template to use the new readableDate filter.  
**Find this line:**  
\<span class="post-date"\>{{ post.date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}\</span\>

**And replace it with this:**  
\<span class="post-date"\>{{ post.date | readableDate }}\</span\>

3.4. File: \_includes/post.njk (Modify)  
Update the single post layout to also use the new readableDate filter.  
**Find this line:**  
\<span class="post-meta"\>Veröffentlicht am {{ page.date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}\</span\>

**And replace it with this:**  
\<span class="post-meta"\>Veröffentlicht am {{ page.date | readableDate }}\</span\>

### **4\. Acceptance Criteria (Definition of Done)**

1. The website builds successfully both locally and on Netlify without any errors.  
2. The error page on aificionado.netlify.app is gone, and the live site is accessible.  
3. Dates on the homepage and on individual blog posts are correctly formatted (e.g., "23 July 2025").

### **5\. Potential Risks & Mitigation**

* **Risk:** The npm install command might fail.  
  * **Mitigation:** This is a standard command. If it fails, it's likely due to a local Node.js or npm setup issue, which would need to be resolved separately. The risk to the project code is minimal.  
* **Risk:** The date format might not be exactly as desired.  
  * **Mitigation:** The format dd LLLL yyyy is highly configurable. The developer can easily change it in the .eleventy.js file by consulting the luxon documentation for different formatting tokens.