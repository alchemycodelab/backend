const { initPage } = require('../utils/helper');

const anxietyFacts = () => {
  
  return initPage('https://www.promisesbehavioralhealth.com/addiction-recovery-blog/facts-about-anxiety-disorders/')
    .then(document => {
     
      return document.querySelectorAll('.entry-content li')
        .map(content => content.structuredText
          .replace(/\n/g, ''));
    });
};
module.exports = { anxietyFacts }; 
