var watson = require('watson-developer-cloud')
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  api_key: 'a2bf3f0e7d3dd3d8b2b34502e8de9ddb1ebcfd03',
  version: 'v3',
  version_date: '2016-05-19'
});