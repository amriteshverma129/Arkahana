const Card = require('./src/_include/components/Card')

module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy('./src/Style');
  eleventyConfig.addPassthroughCopy('./src/Javascript');
  eleventyConfig.addPassthroughCopy('./src/Image');
  eleventyConfig.addShortcode("card", Card)
    return {
        dir:{
            input:"src",
            includes:"_include",
            output:"_site"
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        addPassthroughCopy:true,
    }
};