module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md");
  });

  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");
  
  // --- ADD THIS LINE ---
  // Copy the `images` directory to the output
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
  };
};