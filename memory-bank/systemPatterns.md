# System Patterns

## System Architecture
- The system follows a static site generator (SSG) architecture.
- Content is stored in markdown files.
- Eleventy reads these files, applies templates, and generates a static HTML website.

## Key Technical Decisions
- **Eleventy:** Chosen for its simplicity, flexibility, and performance.
- **Markdown:** Used for content creation due to its ease of use and portability.
- **Nunjucks:** The templating engine used in `.njk` files, allowing for layouts and content injection.

## Design Patterns
- **Layouts:** A base layout (`base.njk`) is used to maintain a consistent structure across all pages.
- **Collections:** Eleventy's collection API is used to group all blog posts into a `post` collection, which is then used to generate the post list on the index page.

## Component Relationships
- `index.md` uses the `base.njk` layout.
- `index.md` iterates through the `collections.post` to display links to individual posts.
- Each post file (e.g., `posts/some-post.md`) also uses the `base.njk` layout.
- The `content` from each markdown file is injected into the `{{ content | safe }}` placeholder in `base.njk`.
