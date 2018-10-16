'use strict';

var through = require('through2');
var ipfsApi = require('ipfs-api');

module.exports = function ipfsPublisher(config) {
  config = config || {};

  let ipfs = ipfsApi(config);

  /**
   * @this {Transform}
   */
  let transform = function (file, encoding, callback) {
    console.log(file);

    // if (contents && extension === '.json') {
    //   // let parsedContent = JSON.parse(contents);
    //   // let newContent = `var ${parsedContent.contractName}={"abi":${JSON.stringify(parsedContent.abi)}};`;

    //   // // Set correct extension *.js*
    //   // let newFile = file.clone({ contents: false });
    //   // newFile.contents = new Buffer(newContent);
    //   // newFile.path = file.path.substring(0, file.path.lastIndexOf('.')) + '.js';

    //   this.push(newFile);
    //   callback();
    // } else {
       this.push(file);
      callback();
    //}
  };

  return through.obj(transform);
};