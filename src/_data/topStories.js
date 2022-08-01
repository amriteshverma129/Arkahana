require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getTopStories(){
    let url = "https://api.github.com/repos/11ty/eleventy";

    return EleventyFetch(url, {
      duration: "1d", // save for 1 day
      type: "json"    // we’ll parse JSON for you
    });
}


module.exports = getTopStories;