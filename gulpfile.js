//gulp imported
var gulp = require('gulp');

//gulp plugins imported
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

var js_globs = ['./node_modules/jquery/dist/jquery.js',
                './node_modules/materialize-css/dist/js/materialize.js',
                './js/*.js'
                ];

var css_globs = ['./css/*.css',
                 './node_modules/materialize-css/dist/css/materialize.css'
                 ];


gulp.task('dev_scripts', function() {
  return gulp.src(js_globs)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('dev_styles', function() {
  return gulp.src(css_globs)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

//tasks for preparing for production
gulp.task('prod_scripts', function() {
  return gulp.src(js_globs)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('prod_styles', function() {
  return gulp.src(css_globs)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['dev_scripts', 'dev_styles']);

gulp.task('prod', ['prod_scripts', 'prod_styles']);

gulp.task('watch', function() {
  gulp.watch(js_globs, ['dev_scripts']);
  gulp.watch(css_globs, ['dev_styles']);
});