const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md");
  });

  // Create a custom 'readableDate' filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLLL yyyy");
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
  };
};
