/**
 * Eleventy GitHub Pages Configuration - ADMIN PORTAL ONLY
 *
 * Gebruik dit voor GitHub Pages builds (alleen admin portal):
 * npx eleventy --config=eleventy.config.github.js
 *
 * Of via npm script:
 * npm run build:github
 *
 * Output: https://notificabv.github.io/notifica_site/admin/
 *
 * LET OP: Deze config bouwt ALLEEN de /admin/ folder!
 * Publieke site staat op Cloudflare: https://notifica.nl
 */

module.exports = function(eleventyConfig) {
  // ==========================================================================
  // INCLUDE ONLY ADMIN FOLDER - Publieke site staat op Cloudflare
  // ==========================================================================
  // Ignore everything except admin, _includes, _layouts, _data
  eleventyConfig.ignores.add("src/index.njk");
  eleventyConfig.ignores.add("src/over-ons.njk");
  eleventyConfig.ignores.add("src/prijzen.njk");
  eleventyConfig.ignores.add("src/privacy.njk");
  eleventyConfig.ignores.add("src/cookies.njk");
  eleventyConfig.ignores.add("src/sla.njk");
  eleventyConfig.ignores.add("src/disclaimer.njk");
  eleventyConfig.ignores.add("src/algemene-voorwaarden.njk");
  eleventyConfig.ignores.add("src/verwerkersovereenkomst.njk");
  eleventyConfig.ignores.add("src/veelgestelde-vragen.njk");
  eleventyConfig.ignores.add("src/klanten-ervaringen.njk");
  eleventyConfig.ignores.add("src/referenties.njk");
  eleventyConfig.ignores.add("src/proefperiode.njk");
  eleventyConfig.ignores.add("src/vacatures.njk");
  eleventyConfig.ignores.add("src/notifica-talks.njk");
  eleventyConfig.ignores.add("src/resources.njk");
  eleventyConfig.ignores.add("src/sitemap.njk");
  eleventyConfig.ignores.add("src/installatie-syntess.njk");
  eleventyConfig.ignores.add("src/bedrijfssoftware/**");
  eleventyConfig.ignores.add("src/diensten/**");
  eleventyConfig.ignores.add("src/inspiratie/**");
  eleventyConfig.ignores.add("src/training/**");
  eleventyConfig.ignores.add("src/verdieping/**");
  eleventyConfig.ignores.add("src/campaigns/**");
  eleventyConfig.ignores.add("src/archive/**");
  eleventyConfig.ignores.add("src/utilities/**");

  // ==========================================================================
  // PASSTHROUGH COPY - Alleen assets nodig voor admin
  // ==========================================================================
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });
  eleventyConfig.addPassthroughCopy("src/admin/pilots/**/*.html");

  // ==========================================================================
  // FILTERS
  // ==========================================================================
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

  // ==========================================================================
  // SHORTCODES
  // ==========================================================================
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // ==========================================================================
  // CONFIG
  // ==========================================================================
  return {
    // pathPrefix voor GitHub Pages subdirectory
    pathPrefix: "/notifica_site",
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
