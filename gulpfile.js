//gulp imported
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

//gulp plugins imported
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

//All js needed for the project
var dev_js_globs = [
                './node_modules/jquery/dist/jquery.js',
                './node_modules/materialize-css/dist/js/materialize.js',
                './js/*.js'
                ];

//All css needed for the project
var dev_css_globs = [
                    './node_modules/materialize-css/dist/css/materialize.css',
                    './css/*.css'
                 ];

//Path for output JS file
var prod_js_path = './dist/js/app.min.js';

//Path for output CSS file
var prod_css_path = './dist/css/main.min.css';

//Development tasks
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

//Tasks for minifying (production)
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

//Main tasks
gulp.task('default', ['dev_scripts', 'dev_styles']);

gulp.task('prod', gulpsync.sync(['dev_scripts', 'prod_scripts',
                                 'dev_styles', 'prod_styles']));

//Watch for file change task
gulp.task('watch', function() {
  gulp.watch(dev_js_globs, ['dev_scripts']);
  gulp.watch(dev_css_globs, ['dev_styles']);
});