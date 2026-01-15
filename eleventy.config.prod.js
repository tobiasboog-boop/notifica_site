/**
 * Eleventy Production Configuration for Cloudflare Pages
 *
 * Gebruik dit voor productie builds op notifica.nl:
 * npx eleventy --config=eleventy.config.prod.js
 *
 * Of via npm script:
 * npm run build:prod
 *
 * LET OP: Deze config EXCLUDEERT de /admin/ folder!
 * Admin portal blijft op GitHub Pages: https://notificabv.github.io/notifica_site/admin/
 */

module.exports = function(eleventyConfig) {
  // ==========================================================================
  // EXCLUDE ADMIN FOLDER - Admin blijft op GitHub Pages
  // ==========================================================================
  eleventyConfig.ignores.add("src/admin/**");

  // ==========================================================================
  // PASSTHROUGH COPY - Static assets
  // ==========================================================================
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Watch targets (niet nodig voor productie, maar voor consistentie)
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
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    }
    return d.toISOString();
  });

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
    // GEEN pathPrefix voor productie op notifica.nl!
    // pathPrefix: "/notifica_site",  // Uitgeschakeld voor productie
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
