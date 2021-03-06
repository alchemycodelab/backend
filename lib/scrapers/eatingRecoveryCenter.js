const { initPage } = require('../utils/helper');

const eatingRecoveryCenter = () => {
  
  return initPage('https://www.eatingrecoverycenter.com/conditions/eating-disorders/facts-statistics')
    .then(document => {
     
      return document
        .querySelectorAll('.description li')
        .map(content => content.text
          .replace(/(\r\n|\n|\r|\t)/gm, '')
        );  
    });
};
//  has a good video we could use
module.exports = { eatingRecoveryCenter }; 

// https://www.insightbhc.com/virtual-support
// virtual support groups we could use as tweetable stuff 
