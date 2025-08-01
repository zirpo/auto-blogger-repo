# **Change Request: BLOG-11**

Date: 2025-08-01  
Author: AIficionado  
**Request:** Finalize "Showcase" Page Integration with Design and UX Updates

## **1\. Overview**

This change request combines all pending design adjustments and user experience improvements for the interactive presentation page. It replaces any previous change requests for this feature.  
The changes include:

* **Renaming:** The page and navigation link will be changed from "The Story" to "Showcase" for better scalability.  
* **Navigation:** The main navigation link will now open the "Showcase" page in a new browser tab to prevent users from losing their place on the blog.  
* **Design Alignment:** The page's font and color scheme will be updated to perfectly match the main blog's theme.  
* **UX Improvement:** A "Back to Blog" link will be present on the showcase page for clear navigation.

## **2\. Technical Implementation**

The implementation requires renaming one file and modifying two existing files.

### **Step 1: Rename project-story.md**

In your repository's root directory, please **rename** the file project-story.md to showcase.md.

### **Step 2: Update the Main Navigation Layout**

Replace the entire content of \_includes/base.njk with the code below. This updates the link to "Showcase" and ensures it opens in a new tab.  
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
    \<footer\>  
        \<p\>© 2025 {{ metadata.author.name }}\</p\>  
    \</footer\>  
\</body\>  
\</html\>

### **Step 3: Update the Content of showcase.md**

Replace the entire content of the newly renamed showcase.md file with the code below. This final version includes all design fine-tuning and title updates.  
**File:** showcase.md  
\---  
layout: story  
title: Showcase | The Story Behind the Blog  
\---

\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
    \<meta charset="UTF-8"\>  
    \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
    \<title\>Showcase: From Idea to Automation\</title\>  
    \<script src="https://cdn.tailwindcss.com"\>\</script\>  
    \<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&display=swap" rel="stylesheet"\>  
    \<style\>  
        .story-body {  
            font-family: monospace;  
            background-color: \#1a1a1a;  
            color: \#e0e0e0;  
        }  
        .nav-link {  
            transition: all 0.2s ease-in-out;  
        }  
        .nav-link.active {  
            background-color: \#333;  
            color: \#ffb74d;  
            font-weight: 600;  
        }  
        .nav-link:not(.active):hover {  
            background-color: \#2a2a2a;  
            color: \#ffb74d;  
        }  
        .content-section {  
            display: none;  
        }  
        .content-section.active {  
            display: block;  
            animation: fadeIn 0.5s ease-in-out;  
        }  
        @keyframes fadeIn {  
            from { opacity: 0; transform: translateY(10px); }  
            to { opacity: 1; transform: translateY(0); }  
        }  
        .tab-btn.active {  
            border-color: \#ffb74d;  
            background-color: \#333;  
            color: \#ffb74d;  
        }  
        .tab-content {  
            display: none;  
        }  
        .tab-content.active {  
            display: block;  
        }  
        .diagram-arrow {  
            position: relative;  
        }  
        .diagram-arrow::after {  
            content: '→';  
            position: absolute;  
            right: \-2rem;  
            top: 50%;  
            transform: translateY(-50%);  
            font-size: 2rem;  
            color: \#555;  
        }  
        .pipeline-step {  
            position: relative;  
            padding-bottom: 3rem;  
        }  
        .pipeline-step:not(:last-child)::after {  
            content: '↓';  
            position: absolute;  
            bottom: 0.5rem;  
            left: 50%;  
            transform: translateX(-50%);  
            font-size: 2rem;  
            color: \#555;  
        }  
    \</style\>  
\</head\>  
\<body class="antialiased story-body"\>  
    \<div class="flex flex-col md:flex-row min-h-screen"\>  
        \<aside class="w-full md:w-64 bg-\[\#111\] border-r border-\[\#333\] p-6"\>  
            \<a href="/" class="text-lg text-gray-400 hover:text-\[\#ffb74d\] transition-colors"\>← Back to Blog\</a\>  
            \<h1 class="text-2xl font-bold text-white mt-4 mb-8"\>Project Showcase\</h1\>  
            \<nav id="main-nav" class="flex flex-row md:flex-col gap-2"\>  
                \<a href="\#slide1" class="nav-link p-3 rounded-lg text-left w-full"\>Introduction\</a\>  
                \<a href="\#slide2" class="nav-link p-3 rounded-lg text-left w-full"\>The Problem\</a\>  
                \<a href="\#slide3" class="nav-link p-3 rounded-lg text-left w-full"\>The Solution\</a\>  
                \<a href="\#slide4" class="nav-link p-3 rounded-lg text-left w-full"\>Meet the Team\</a\>  
                \<a href="\#slide7" class="nav-link p-3 rounded-lg text-left w-full"\>The "Magic"\</a\>  
                \<a href="\#slide8" class="nav-link p-3 rounded-lg text-left w-full"\>The Result\</a\>  
                \<a href="\#automation" class="nav-link p-3 rounded-lg text-left w-full"\>Full Automation\</a\>  
                \<a href="\#next" class="nav-link p-3 rounded-lg text-left w-full"\>What's Next?\</a\>  
                \<a href="\#slide9" class="nav-link p-3 rounded-lg text-left w-full"\>Conclusion\</a\>  
            \</nav\>  
        \</aside\>

        \<main class="flex-1 p-6 md:p-12 overflow-y-auto"\>  
            \<div id="content-container"\>  
                \<section id="slide1" class="content-section"\>  
                    \<div class="max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full"\>  
                        \<h1 class="text-5xl md:text-6xl font-bold text-white leading-tight"\>How I Built an Automated Content Factory with an AI Assistant\</h1\>  
                        \<p class="mt-4 text-xl md:text-2xl text-gray-400"\>You don't need to be a coder to build things anymore.\</p\>  
                        \<p class="mt-8 text-lg font-semibold text-gray-300"\>By Daniel Zirpoli (aka AIficionado)\</p\>  
                    \</div\>  
                \</section\>

                \<section id="slide2" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-6"\>The Problem: The Manual Content Grind\</h2\>  
                    \<div class="space-y-4 text-lg max-w-3xl"\>  
                        \<p\>The process of creating a high-quality blog post from a simple idea is incredibly time-consuming. It's a journey filled with manual, repetitive steps.\</p\>  
                        \<ul class="list-disc list-inside space-y-3 pl-4 pt-2"\>  
                            \<li\>Finding a relevant, interesting topic.\</li\>  
                            \<li\>Drafting an initial take on the subject.\</li\>  
                            \<li\>Structuring that draft into a coherent blog post.\</li\>  
                            \<li\>Polishing it meticulously for publication.\</li\>  
                        \</ul\>  
                        \<p class="pt-4 font-semibold text-gray-400"\>My Goal was simple: Could I automate this entire workflow, from discovery to final draft?\</p\>  
                    \</div\>  
                \</section\>

                \<section id="slide3" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-8"\>The Solution: A Team of AI Specialists\</h2\>  
                    \<div class="space-y-4 text-lg max-w-3xl"\>  
                        \<p\>Instead of one giant, monolithic program, I created a team of three specialists that work together. This is known as a "microservices" architecture, where each program does one job really well. This design made it much easier for me to make changes to one part without breaking another.\</p\>  
                    \</div\>  
                    \<div class="mt-12"\>  
                        \<h3 class="text-2xl font-semibold text-center text-gray-400 mb-6"\>The Core Workflow\</h3\>  
                        \<div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center"\>  
                            \<div class="diagram-arrow flex-1 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                                \<div class="text-4xl mb-2"\>🔎\</div\>  
                                \<h4 class="text-xl font-bold text-white"\>kurator\</h4\>  
                                \<p class="text-sm text-gray-400"\>(The Researcher)\</p\>  
                            \</div\>  
                            \<div class="diagram-arrow flex-1 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                                \<div class="text-4xl mb-2"\>⚙️\</div\>  
                                \<h4 class="text-xl font-bold text-white"\>laruta\</h4\>  
                                \<p class="text-sm text-gray-400"\>(The Project Manager)\</p\>  
                            \</div\>  
                            \<div class="flex-1 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                                \<div class="text-4xl mb-2"\>✍️\</div\>  
                                \<h4 class="text-xl font-bold text-white"\>blogplus\</h4\>  
                                \<p class="text-sm text-gray-400"\>(The Writer)\</p\>  
                            \</div\>  
                        \</div\>  
                    \</div\>  
                \</section\>

                \<section id="slide4" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-8"\>Meet the Team\</h2\>  
                    \<div id="team-tabs" class="mb-6 flex flex-wrap gap-2 border-b border-\[\#333\]"\>  
                        \<button class="tab-btn py-3 px-6 text-lg font-medium border-b-4 border-transparent hover:bg-\[\#2a2a2a\] hover:text-\[\#ffb74d\]" data-tab="kurator"\>kurator\</button\>  
                        \<button class="tab-btn py-3 px-6 text-lg font-medium border-b-4 border-transparent hover:bg-\[\#2a2a2a\] hover:text-\[\#ffb74d\]" data-tab="blogplus"\>blogplus\</button\>  
                        \<button class="tab-btn py-3 px-6 text-lg font-medium border-b-4 border-transparent hover:bg-\[\#2a2a2a\] hover:text-\[\#ffb74d\]" data-tab="laruta"\>laruta\</button\>  
                    \</div\>  
                    \<div id="team-content" class="max-w-3xl"\>  
                        \<div id="kurator-content" class="tab-content space-y-4 text-lg"\>  
                            \<h3 class="text-2xl font-semibold text-gray-400"\>Job: To read the news and find the most interesting articles for our blog.\</h3\>  
                            \<p\>It searches for news using specific keywords I gave it. An AI model then reads each article and scores it based on criteria I defined in a simple prompt file, such as relevance and engagement potential.\</p\>  
                            \<p class="pt-2 font-semibold"\>Key takeaway: I didn't have to code a complex scoring algorithm. I just had to \*describe\* what makes a good article.\</p\>  
                        \</div\>  
                        \<div id="blogplus-content" class="tab-content space-y-4 text-lg"\>  
                            \<h3 class="text-2xl font-semibold text-gray-400"\>Job: To take the article \`kurator\` found and turn it into a unique, polished blog post.\</h3\>  
                            \<p\>This isn't a single step; it's a multi-stage writing process, just like a human writer would use:\</p\>  
                            \<ol class="list-decimal list-inside space-y-2 pl-4 pt-2"\>  
                                \<li\>\*\*Essay Draft:\*\* First, it writes a thoughtful essay to understand the core concepts.\</li\>  
                                \<li\>\*\*Outline:\*\* Next, it creates a logical structure for the blog post.\</li\>  
                                \<li\>\*\*Elaboration:\*\* It then writes the full post, focusing on adding depth and detail to meet a target word count of 800-1200 words.\</li\>  
                                \<li\>\*\*Final Polish:\*\* Finally, a "Hemingway" specialist refines the text, making it clear, concise, and easy to read, and adds the final tags and disclaimers.\</li\>  
                            \</ol\>  
                            \<p class="pt-2 font-semibold"\>Key takeaway: The quality comes from breaking the task into smaller, specialized steps.\</p\>  
                        \</div\>  
                        \<div id="laruta-content" class="tab-content space-y-4 text-lg"\>  
                            \<h3 class="text-2xl font-semibold text-gray-400"\>Job: To manage the entire workflow and make sure the specialists work together smoothly.\</h3\>  
                            \<p\>It runs \`kurator\` first. It then takes the winning article, scrapes the content, and hands it off to \`blogplus\` in the correct format. It even handles all the technical setup, like ensuring all the necessary code is downloaded and ready to run.\</p\>  
                            \<p class="pt-2 font-semibold"\>Key takeaway: This orchestrator is what makes the system a true, hands-free pipeline.\</p\>  
                        \</div\>  
                    \</div\>  
                \</section\>

                \<section id="slide7" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-6"\>The "Magic" Isn't Code, It's Instructions\</h2\>  
                    \<div class="space-y-4 text-lg max-w-3xl"\>  
                        \<p\>This is the core message. How did I, a "non-coder," build this? I didn't write thousands of lines of code. I wrote \*\*instructions in plain English.\*\* The "source code" for the AI's behavior lives in simple text files.\</p\>  
                        \<p\>My primary job was to be a good \*\*manager and communicator\*\*, clearly defining the goals for my AI assistant.\</p\>  
                    \</div\>  
                    \<div class="mt-8 max-w-3xl"\>  
                        \<p class="font-mono text-sm text-gray-500 mb-2"\>Example from \`prompts/write\_blog.txt\`:\</p\>  
                        \<pre class="bg-\[\#222\] p-6 rounded-lg border border-\[\#333\]"\>\<code class="language-markdown text-gray-300"\>\# GOALS  
\- Transform the provided materials into a compelling blog post...  
\- Write in a clear and concise style...  
\- Perfectly adopt the specified "Tone of Voice."  
\- Naturally weave the specified "Keywords" into the text for SEO.  
\- Tailor the language and examples to the "Target Audience."\</code\>\</pre\>  
                    \</div\>  
                \</section\>

                \<section id="slide8" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-6"\>The Result: A Human-AI Partnership\</h2\>  
                    \<div class="space-y-4 text-lg max-w-3xl"\>  
                        \<p\>The final output is more than just an automated article; it's the product of a collaboration. The system \*does\* automate the creation process, but the highest quality result comes from a partnership.\</p\>  
                        \<p\>The AI handles the heavy lifting of drafting and structuring, but a handcrafted final touch from a human editor is what ensures the quality. This system doesn't replace the creator; it empowers them to be a director and editor, focusing on what matters most: the ideas, the message, and the quality that automation alone can't achieve.\</p\>  
                    \</div\>  
                    \<div class="mt-8 p-8 border-2 border-dashed border-\[\#444\] rounded-xl bg-\[\#222\] max-w-3xl"\>  
                        \<h3 class="text-2xl font-bold text-gray-200"\>This Is The Final Blog Post Title\</h3\>  
                        \<p class="text-gray-400 mt-2"\>Published on August 1, 2025\</p\>  
                        \<div class="mt-4 space-y-3"\>  
                            \<div class="h-4 bg-gray-600 rounded w-full"\>\</div\>  
                            \<div class="h-4 bg-gray-600 rounded w-5/6"\>\</div\>  
                            \<div class="h-4 bg-gray-600 rounded w-full"\>\</div\>  
                            \<div class="h-4 bg-gray-600 rounded w-3/4"\>\</div\>  
                        \</div\>  
                    \</div\>  
                \</section\>

                \<section id="automation" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-8"\>Full Automation: The Publishing Pipeline\</h2\>  
                    \<div class="space-y-4 text-lg max-w-3xl mb-12"\>  
                        \<p\>This isn't just a set of scripts I run manually. The entire system is deployed as a hands-free, automated pipeline that publishes content without any intervention.\</p\>  
                    \</div\>  
                    \<div class="flex flex-col items-center text-center"\>  
                        \<div class="pipeline-step w-full md:w-2/3 lg:w-1/2 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                            \<div class="text-4xl mb-2"\>☁️\</div\>  
                            \<h4 class="text-xl font-bold text-white"\>GCP Cloud Scheduler\</h4\>  
                            \<p\>Every two days, a scheduled job automatically triggers the \`laruta\` orchestrator.\</p\>  
                        \</div\>  
                        \<div class="pipeline-step w-full md:w-2/3 lg:w-1/2 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                            \<div class="text-4xl mb-2"\>🪣\</div\>  
                            \<h4 class="text-xl font-bold text-white"\>GCS Bucket\</h4\>  
                            \<p\>The finished blog post is saved to a Google Cloud Storage bucket.\</p\>  
                        \</div\>  
                        \<div class="pipeline-step w-full md:w-2/3 lg:w-1/2 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                            \<div class="text-4xl mb-2"\>🔄\</div\>  
                            \<h4 class="text-xl font-bold text-white"\>GCP Watcher Job\</h4\>  
                            \<p\>Another cloud job constantly monitors the bucket for new files.\</p\>  
                        \</div\>  
                        \<div class="pipeline-step w-full md:w-2/3 lg:w-1/2 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                            \<div class="text-4xl mb-2"\>📦\</div\>  
                            \<h4 class="text-xl font-bold text-white"\>GitHub Push\</h4\>  
                            \<p\>When a new post appears, it's automatically pushed to a dedicated GitHub repository.\</p\>  
                        \</div\>  
                        \<div class="w-full md:w-2/3 lg:w-1/2 p-6 bg-\[\#222\] rounded-xl shadow-md border border-\[\#333\]"\>  
                            \<div class="text-4xl mb-2"\>🌐\</div\>  
                            \<h4 class="text-xl font-bold text-white"\>Netlify Publication\</h4\>  
                            \<p\>Netlify detects the change in the GitHub repo and automatically deploys the new post to the live blog.\</p\>  
                             \<a href="https://blog.zirpo.de" target="\_blank" class="mt-4 inline-block bg-\[\#ffb74d\] text-\[\#1a1a1a\] font-semibold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-colors"\>See It Live: blog.zirpo.de\</a\>  
                        \</div\>  
                    \</div\>  
                \</section\>  
                  
                \<section id="next" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-6"\>What's Next? The Road Ahead\</h2\>  
                    \<div class="space-y-8 text-lg max-w-3xl"\>  
                        \<div\>  
                            \<h3 class="text-2xl font-semibold text-gray-400 mb-3"\>1. Fully Automated Image Generation\</h3\>  
                            \<p\>Currently, the system generates a prompt for a cover image, but I create the image manually on my local machine. The next step is to make this hands-free.\</p\>  
                            \<ul class="list-disc list-inside space-y-2 pl-4 mt-2"\>  
                                \<li\>\*\*The Plan:\*\* Use a PUB/SUB model. The cloud job will publish the image prompt to a topic.\</li\>  
                                \<li\>My home server will subscribe to this topic, generate the image using the prompt, and upload it.\</li\>  
                                \<li\>This also involves refining the image prompts, styles, and LoRAs to ensure consistent, high-quality visuals.\</li\>  
                            \</ul\>  
                        \</div\>  
                        \<div\>  
                            \<h3 class="text-2xl font-semibold text-gray-400 mb-3"\>2. Enhance the Writing Agent\</h3\>  
                            \<p\>The goal is continuous improvement of the writing quality.\</p\>  
                             \<ul class="list-disc list-inside space-y-2 pl-4 mt-2"\>  
                                \<li\>The focus is on enhancing the AI's ability to produce even more insightful and engaging articles, while ensuring the readability (Hemingway rating) remains excellent or even improves.\</li\>  
                            \</ul\>  
                        \</div\>  
                    \</div\>  
                \</section\>

                \<section id="slide9" class="content-section"\>  
                    \<h2 class="text-4xl font-bold text-white mb-6"\>Conclusion: The Future is Augmentation, Not Obsolescence\</h2\>  
                    \<div class="space-y-6 text-xl max-w-3xl"\>  
                        \<p\>This project proves that AI's true power isn't in replacing humans, but in augmenting our abilities. It's a tool that changes the nature of our work for the better.\</p\>  
                        \<p class="text-2xl font-semibold text-gray-400 p-6 border-l-4 border-\[\#444\] bg-\[\#222\] rounded-r-lg"\>This doesn't make writers or coders obsolete. It makes them \<span class="text-white"\>architects and quality editors.\</span\> A purely automated result won't be as good as one that's handcrafted. The key skill is shifting from pure execution to strategic direction and refinement.\</p\>  
                        \<p\>The future of creative and technical work is a partnership. We provide the vision and the critical final touch; AI provides the tireless execution to help us achieve our goals faster and at a greater scale than ever before.\</p\>  
                    \</div\>  
                \</section\>  
            \</div\>  
        \</main\>  
    \</div\>

    \<script\>  
        document.addEventListener('DOMContentLoaded', function() {  
            const navLinks \= document.querySelectorAll('.nav-link');  
            const contentSections \= document.querySelectorAll('.content-section');  
            const mainContent \= document.getElementById('content-container');

            const tabButtons \= document.querySelectorAll('.tab-btn');  
            const tabContents \= document.querySelectorAll('.tab-content');

            function showContent(hash) {  
                const targetId \= hash ? hash.substring(1) : 'slide1';  
                let targetFound \= false;

                contentSections.forEach(section \=\> {  
                    if (section.id \=== targetId) {  
                        section.classList.add('active');  
                        targetFound \= true;  
                    } else {  
                        section.classList.remove('active');  
                    }  
                });  
                  
                if (\!targetFound) {  
                    document.getElementById('slide1').classList.add('active');  
                }

                navLinks.forEach(link \=\> {  
                    if (link.getAttribute('href') \=== \`\#${targetId}\`) {  
                        link.classList.add('active');  
                    } else {  
                        link.classList.remove('active');  
                    }  
                });  
            }

            navLinks.forEach(link \=\> {  
                link.addEventListener('click', function(e) {  
                    e.preventDefault();  
                    const hash \= this.getAttribute('href');  
                    history.pushState(null, null, hash);  
                    showContent(hash);  
                });  
            });

            tabButtons.forEach(button \=\> {  
                button.addEventListener('click', function() {  
                    const tabId \= this.dataset.tab;

                    tabButtons.forEach(btn \=\> btn.classList.remove('active'));  
                    this.classList.add('active');

                    tabContents.forEach(content \=\> {  
                        if (content.id \=== \`${tabId}-content\`) {  
                            content.classList.add('active');  
                        } else {  
                            content.classList.remove('active');  
                        }  
                    });  
                });  
            });

            window.addEventListener('popstate', () \=\> {  
                showContent(window.location.hash);  
            });

            showContent(window.location.hash || '\#slide1');  
              
            document.querySelector('.tab-btn\[data-tab="kurator"\]').click();  
        });  
    \</script\>  
\</body\>  
\</html\>

## **3\. Expected Outcome**

After applying these changes, the "Showcase" page will be fully integrated:

* The navigation link will correctly point to /showcase/ and open in a new tab.  
* The page itself will have a consistent look and feel with the main blog.  
* The title will be updated for better scalability.