var mongoose = require('mongoose'),
    crypto   = require('crypto');

var LinkSchema = new mongoose.Schema({
 visits: Number,
 link: String,
 title: String,
 code: String,
 base_url: String,
 url: String,
 username: String
});

var createSha = function(url, username) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url + username);
  return shasum.digest('hex').slice(0, 6);
};

LinkSchema.pre('save', function(next){
  var code = createSha(this.url, this.username);
  this.code = code;
  next();
});

module.exports = mongoose.model('Link', LinkSchema);
