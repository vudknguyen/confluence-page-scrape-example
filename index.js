import Confluence from 'confluence-api';
import cheerio from 'cheerio';
import _ from 'lodash';

const confluenceCfg = {
  pageId: process.env.PAGEID,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  baseUrl: `http://${process.env.team}.atlassian.net/wiki`,
  version: 4 // Confluence major version, optional 
}

function parse(data) {
  // Using Cheerio for parsing HTML markup
  const $ = cheerio.load(data.body.value);

  // Cheerio support jQuery syntax, we can perform core jQuery function
  $('div').text();
}

// Initialize confluence instance
const confluence = new Confluence(confluenceCfg);

// Get confluence page by pageId
confluence.getContentById(confluenceCfg.pageId, (err, data) => {
  if(!err) {
    parse(data);
  }
});
