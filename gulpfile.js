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
                './app/js/*.js'
                ];

//All css needed for the project
var dev_css_globs = [
                    './node_modules/materialize-css/dist/css/materialize.css',
                    './app/css/*.css'
                 ];

//Path for JS folder
var prod_js_folder = './app/dist/js/';

//Path for output JS file
var prod_js_path = (prod_js_folder + 'app.min.js');

//Path for CSS folder
var prod_css_folder = './app/dist/css/';

//Path for output CSS file
var prod_css_path = (prod_css_folder + 'main.min.css');


//Development tasks
gulp.task('dev_scripts', function() {
  return gulp.src(dev_js_globs)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(prod_js_folder))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(prod_js_folder));
});

gulp.task('dev_styles', function() {
  return gulp.src(dev_css_globs)
    .pipe(concat('main.css'))
    .pipe(gulp.dest(prod_css_folder))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(prod_css_folder));
});

//Tasks for minifying (production)
gulp.task('prod_scripts', function() {
  return gulp.src(prod_js_path)
    .pipe(uglify())
    .pipe(gulp.dest(prod_js_folder));
});

gulp.task('prod_styles', function() {
  return gulp.src(prod_css_path)
    .pipe(cssmin())
    .pipe(gulp.dest(prod_css_folder));
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