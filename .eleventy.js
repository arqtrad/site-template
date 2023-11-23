//require('bootstrap');
module.exports = function(eleventyConfig) {
  // eleventyConfig.setQuietMode(true);
  // Copy static files to output:
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap/dist/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap/dist/js": "assets/bootstrap/js" });
  eleventyConfig.addPassthroughCopy({ "node_modules/jquery/dist": "assets/jquery/js" });
  // emulate passthrough during --serve:
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  // Return your Object options:
  return {
    dir: {
      htmlTemplateEngine: "njk",
      input: "docs",
      layouts: "_layouts",
      output: "_site",
      templateFormats: ["html", "liquid", "njk"]
    }
    // pathPrefix: "/"
  }
};
