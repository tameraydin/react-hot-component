// gulp node modules
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var cache = require('gulp-cached');
var to5 = require('gulp-6to5');
// var jasmine = require('gulp-jasmine');
// var istanbul = require('gulp-istanbul');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var header = require('gulp-header');

// node modules
var del = require('del');
var runSequence = require('run-sequence');
var stylish = require('jshint-stylish');

// package.json
var pkg = require('./package');
var jshintConfig = pkg.jshintConfig;
var banner = [
    '/**',
    ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright <%= new Date().getFullYear() %> <%= pkg.author %>',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)',
    ' */',
    ''
  ].join('\n');

var PATH = {
  SOURCE: './src/',
  TEST: './test/',
  DIST: './dist/'
};

var handleErr = function(err) {
  console.error('ERROR' + (err.fileName ? ' in ' + err.fileName : ':'));
  console.error(err.message);
  this.end();
};

gulp.task('clean', function(cb) {
  del([PATH.DIST], cb);
});

jshintConfig.lookup = false;
gulp.task('jshint', function() {
  var stream = gulp.src(PATH.SOURCE + '*.js')
    .pipe(cache('jshint'))
    .pipe(react()).on('error', handleErr)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));

  if (process.env.CI) {
    stream = stream.pipe(jshint.reporter('fail'));
  }

  return stream;
});

// gulp.task('test', function() {
//   return gulp.src(PATH.TEST + '*.spec.js')
//     .pipe(jasmine());
// });

// gulp.task('coverage', function(cb) {
//   gulp.src(PATH.SOURCE + '*.js')
//     .pipe(istanbul())
//     .pipe(istanbul.hookRequire())
//     .on('finish', function() {
//       gulp.src(PATH.TEST + '*.spec.js')
//         .pipe(jasmine())
//         .pipe(istanbul.writeReports())
//         .on('end', cb);
//     });
// });

gulp.task('copy', function() {
  return gulp.src(PATH.SOURCE + '*.js')
    .pipe(react()).on('error', handleErr)
    .pipe(to5()).on('error', handleErr)
    .pipe(rename({
      basename: pkg.name
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('uglify', function() {
  return gulp.src(PATH.DIST + '*.js')
    .pipe(uglify()).on('error', handleErr)
    .pipe(rename({
      basename: pkg.name,
      suffix: '.min'
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('banner', function() {
  return gulp.src(PATH.DIST + '*.js')
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('watch', function() {
  gulp.watch(PATH.SOURCE + '*.js', ['jshint']);
});

// gulp.task('autotest', function() {
//   gulp.watch(PATH.SOURCE + '*.js', ['jshint', 'test']);
//   gulp.watch(PATH.TEST + '*.spec.js', ['test']);
// });

gulp.task('build', ['clean'], function(cb) {
  runSequence(
    'jshint',
    // 'test',
    // 'coverage',
    'copy',
    'uglify',
    'banner',
    cb);
});

gulp.task('default', ['build']);
