const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date in descending order (newest first)
    });
  });

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

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon_io");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
  };
};
