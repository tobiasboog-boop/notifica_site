module.exports = function(eleventyConfig) {
  // Dev server configuration for VPN access
  eleventyConfig.setServerOptions({
    // Bind to all interfaces so VPN IP is accessible
    host: "0.0.0.0",
    port: 8080
  });
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // Collections
  eleventyConfig.addCollection("blogs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/inspiratie/blogs/*.md");
  });

  eleventyConfig.addCollection("videos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/inspiratie/videos/*.md");
  });

  eleventyConfig.addCollection("whitepapers", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/inspiratie/whitepapers/*.md");
  });

  eleventyConfig.addCollection("klanten", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/klanten/*.md");
  });

  eleventyConfig.addCollection("erp", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/bedrijfssoftware/*.md");
  });

  // Filters
  eleventyConfig.addFilter("nl_date", function(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('nl-NL', options);
  });

  // Shortcodes
  eleventyConfig.addShortcode("pipedrive_popup", function(formId, buttonText, buttonClass = "btn btn-primary") {
    return `<button class="${buttonClass}" data-pipedrive-form="${formId}">${buttonText}</button>`;
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
