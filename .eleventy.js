module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md");
  });
  eleventyConfig.addPassthroughCopy("css");
  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
  };
};
