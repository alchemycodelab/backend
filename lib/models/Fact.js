const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  fact_text: {
    type: String, 
    required: true
  },
  source: {
    type: String, 
  }, 
  source_url: {
    type: String, 
  }, 
  site_timestamp: {
    type: String
  }, 
  has_tweeted: {
    type: Boolean, 
    required: true
  },
  hashtag_type: {
    type: String, 
    required: true,
    enum: ['depression', 'anxiety', 'general', 'schizophrenia', 'adhd', 'bipolor', 'autism', 'ocd']
  }
});

schema.statics.factsByHashtagType = function() {
  return this
    .aggregate([
      [
        {
          '$group': {
            '_id': '$hashtag_type', 
            'facts': {
              '$push': '$$ROOT'
            }
          }
        }
      ]
    ]);
};

module.exports = mongoose.model('Fact', schema);


