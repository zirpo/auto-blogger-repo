const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  const postsCollection = function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date in descending order (newest first)
    });
  };
  eleventyConfig.addCollection("post", postsCollection);
  eleventyConfig.addCollection("posts", postsCollection);

  // Create a custom 'readableDate' filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLLL yyyy");
  });

  // Custom filter to create a post excerpt
  eleventyConfig.addFilter("postExcerpt", (post) => {
    if (!post || !post.templateContent) {
      return "";
    }
    // Remove HTML tags and line breaks
    const content = post.templateContent.replace(/(<([^>]+)>)/gi, "").replace(/\r?\n|\r/g, " ");
    // Truncate to 180 characters
    if (content.length <= 180) {
      return content;
    }
    return content.slice(0, 180) + "...";
  });

  // Custom filter to extract the first image source for a thumbnail
  eleventyConfig.addFilter("postThumbnail", (post) => {
    if (!post || !post.templateContent) {
      return "";
    }
    const match = post.templateContent.match(/<img\s+[^>]*src=['"]([^'"]+)['"][^>]*>/i);
    return match ? match[1] : "";
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon_io");

  // This line fixes the layout issue by creating a layout alias.
  eleventyConfig.addLayoutAlias("post", "post.njk");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
  };
};
