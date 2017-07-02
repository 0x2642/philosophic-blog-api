"use strict";
var faker = require("faker");
var expect = require("chai").expect;
var request = require("request");

var apiUrl = "http://localhost:9106"

describe("A suite of batch functions", function() {

  var headers = {
    'accept-version': '0.0.1',
    'authorization': 'Basic ' + new Buffer('union' + ':' + 'union123').toString('base64'),
  };

  it("create", function(done) {
    var body = {
      creator: faker.name.findName(),
      title: faker.lorem.sentence(),
      context: faker.lorem.paragraphs(5),
      createTime: faker.date.past(),
      createTime: faker.date.past()
    }
    var url = apiUrl + "/article";
    console.log("url: " + url);
    request.post({
      url: url,
      headers: headers,
      json: true,
      body: body
    }, function callback(err, res, body) {
      console.log(body);
      expect(res).to.not.be.undefined;
      expect(res).to.not.be.null;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});