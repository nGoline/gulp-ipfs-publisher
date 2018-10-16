'use strict';

const chai = require('chai');
const chaiString = require('chai-string');
const ipfsPublisher = require('..');
const expect = chai.expect;
const File = require('vinyl');
const gulp = require('gulp');
const vfsFake = require('vinyl-fs-fake');

chai.should();
chai.use(chaiString);

describe('gulp-ipfs-publisher: init', () => {
  it('should return the gulp-ipfs-publisher object: required export', () => {
    expect(ipfsPublisher).to.exist;
  });
});

describe('gulp-ipfs-publisher: base functionality', () => {
  it('should allow the file through', done => {
    let i = 0;

    gulp.src('fixtures/**/*')
      .pipe(ipfsPublisher())
      .on('data', file => {
        i += 1;
      })
      .once('end', () => {
        i.should.equal(1);
        done();
      });
  });
});