# gulp-ipfs-publisher [![Build Status](https://travis-ci.org/nGoline/gulp-ipfs-publisher.svg?branch=master)](https://travis-ci.org/nGoline/gulp-ipfs-publisher)

This is a gulp plugin that publish files to IPFS.

## Getting Started

This package will help you to publish your files to IPFS in an automated way.

### Installing

Just install it via npm:

```bash
npm install gulp-ipfs --save-dev
```

## API

### gulpIPFSPublisher()

#### Publishing a folder

```javascript
let gulp = require('gulp');
let ipfsPublisher = require('gulp-ipfs-publisher');

gulp.task('export-abi', _ => {
  return gulp.src('build')
    .pipe(ipfsPublisher());
});
```

#### Publishing files

```javascript
let gulp = require('gulp');
let ipfs = require('gulp-ipfs-publisher');

gulp.task('export-abi', _ => {
  return gulp.src(['build/*.html', 'build/*.css'])
    .pipe(ipfsPublisher());
});
```

## Built With

* [Node.js](https://nodejs.org)
* [gulp](https://gulpjs.com)
* [Mocha](https://mochajs.org)
* [js-ipfs-api](https://github.com/ipfs/js-ipfs-api)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/ngoline/gulp-solidity-abi/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ngoline/gulp-solidity-abi/tags).

## Authors

* **Níckolas Goline** - *Initial work* - [nGoline](https://github.com/ngoline)

See also the list of [contributors](https://github.com/ngoline/gulp-solidity-abi/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.
