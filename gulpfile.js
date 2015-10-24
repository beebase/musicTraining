var gulp = require('gulp');
var browserSync = require('browser-sync');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var filter = require('gulp-filter');
var order = require('gulp-order');
var print = require('gulp-print');
var paths = {
  'jsFiles'  : [
    'public/index.js',
    'public/modules/**/config.js'  ,
    'public/modules/**/**/**/*.js'
  ],
  'htmlFiles': ['public/**/**/**/*.html']
};

gulp.task('js', function() {
  return gulp
    .src(mainBowerFiles().concat(paths.jsFiles))
    .pipe(filter('**/**/*.js'))
    .pipe(print())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('inject', ['js'], function() {
  var target = gulp.src('public/index.html');
  var sources = gulp.src('public/js/all.js', {
    read: false //will not read file contents = faster
  });
});

gulp.task('browser-sync', ['js', 'inject'], function() {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync.init({

    // watch the following files; changes will be injected (css & images) or cause browser to refresh
    files: ['public/**/**/**/**/*.*'],

    //  node server port
    proxy: 'http://localhost:4444',

    // informs browser-sync to use the following port for the proxied app
    // notice node server port is 4444, which would clash with our expressjs
    port: 4445,

    // open the proxied app in chrome
    browser    : ['google-chrome'],
    reloadDelay: 1000
  });
})

gulp.task('default', ['browser-sync'], function() {
  //rebuild all.js when these jsfiles change
  gulp.watch(paths.jsFiles, ['js', 'inject'])
})