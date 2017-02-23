var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['sass:watch','scripts:watch','css:watch','images:watch','webserver']);

gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('css:watch', function () {
  gulp.watch('./css/**/*.css', ['css']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./js/**/*.js', ['scripts']);
});

gulp.task('images:watch', function () {
  gulp.watch('./img/**/*', ['images']);
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
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function() {
  return gulp.src(['./js/jquery.min.js','./js/jquery-ui.min.js','js/jquery.ui.touch-punch.min.js','./js/gestao.js','./js/saude.js','./js/direito.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});
gulp.task('images', function (){
  return gulp.src('./img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img'));
});
