var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('js', function () {
  return gulp.src('assets/javascripts/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/javascripts'))
})

gulp.task('css', function () {
  return gulp.src('assets/stylesheets/*css')
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/css'))
})

gulp.task('images', function () {
  return gulp.src('assets/images/*')
    .pipe(gulp.dest('public/images'))
})

gulp.task('watchout', function () {
  gulp.watch('assets/javascripts/*js', ['js'])
  gulp.watch('assets/stylesheets/*css', ['css'])
  gulp.watch('assets/images/*', ['images'])
})

gulp.task('default', ['js', 'images', 'css', 'watchout'])
