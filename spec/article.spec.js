"use strict";
const _ = require('lodash');
const faker = require("faker");
const expect = require("chai").expect;
const request = require("request");
const util = require('util');

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

  it("pages", function(done) {
    var data = {
      pageSize: 10,
      pageIndex: 1,
    };
    var url = apiUrl + '/article/pages?';
    var paramsArray = [];
    var params = _.forEach(data, function(value, key) {
      paramsArray.push(util.format('%s=%s', key, value));
    });
    url += paramsArray.join('&');

    console.info(url);
    request.get({
      url: url,
      headers: headers
    }, function callback(err, res, body) {
      console.info(body);
      expect(res).to.not.be.undefined;
      expect(res).to.not.be.null;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});