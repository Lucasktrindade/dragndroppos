var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', ['sass:watch','webserver']);

gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('css', function() {
  return gulp.src(['./css/estrutura.css','./css/pandora.css',  './css/estilo.css'])
    .pipe(concat('bundle.css'))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./dest/css/'));
});

gulp.task('scripts', function() {
  return gulp.src(['./js/jquery.min.js','./js/jquery-ui.min.js','js/jquery.ui.touch-punch.min.js','./js/script.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dest/js/'));
});
gulp.task('images', function (){
  return gulp.src('./img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/img'));
});

gulp.task('html', function (){
  return gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest'));
});
