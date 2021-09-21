const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const webp = require('gulp-webp');


gulp.task('convert-webp', () =>
    gulp.src('public/img/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('public/img/'))
);

function buildStyles() {
  return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src'));
};

exports.buildStyles = buildStyles;

exports.watch = function () {
  gulp.watch('src/scss/*.scss', gulp.series('buildStyles'));
};



