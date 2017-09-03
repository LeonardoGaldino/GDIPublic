//gulp imported
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

//gulp plugins imported
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

var dev_js_globs = ['./node_modules/jquery/dist/jquery.js',
                './node_modules/materialize-css/dist/js/materialize.js',
                './js/*.js'
                ];

var dev_css_globs = ['./css/*.css',
                 './node_modules/materialize-css/dist/css/materialize.css'
                 ];

var prod_js_path = './dist/js/app.min.js';

var prod_css_path = './dist/css/main.min.css';


gulp.task('dev_scripts', function() {
  return gulp.src(dev_js_globs)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('dev_styles', function() {
  return gulp.src(dev_css_globs)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

//tasks for minifying
gulp.task('prod_scripts', function() {
  return gulp.src(prod_js_path)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('prod_styles', function() {
  return gulp.src(prod_css_path)
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['dev_scripts', 'dev_styles']);

gulp.task('prod', gulpsync.sync(['dev_scripts', 'prod_scripts',
                                 'dev_styles', 'prod_styles']));

gulp.task('watch', function() {
  gulp.watch(dev_js_globs, ['dev_scripts']);
  gulp.watch(dev_css_globs, ['dev_styles']);
});