import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import csso from 'gulp-csso';
import include from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import { deleteAsync } from 'del';
import gulp from 'gulp';
import browserSync from 'browser-sync';

const { src, dest, series, watch } = gulp;
const sass = gulpSass(dartSass);

function htmlTask() {
  return src('src/**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('docs'));
}

function jsTask() {
  return src('src/js/*.js').pipe(dest('docs/js'));
}
function jsonTask() {
  return src('src/Localizations/*.json').pipe(dest('docs/Localizations'));
}

function imgTask() {
  return src('src/img/*.png').pipe(dest('docs/img'));
}

function imgSvgTask() {
  return src('src/img/*.svg').pipe(dest('docs/img'));
}

function fontTask() {
  return src('src/fonts/*.ttf').pipe(dest('docs/fonts'));
}
function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(dest('docs/css'));
}

function serve() {
  browserSync.init({
    server: './docs',
  });
  watch(
    'src/**/*.*',
    series(
      clear,
      scss,
      jsTask,
      jsonTask,
      imgTask,
      imgSvgTask,
      fontTask,
      htmlTask
    )
  ).on('change', browserSync.reload);
}

function clear() {
  return deleteAsync('docs');
}
gulp.task(
  'default',
  series(
    clear,
    scss,
    jsTask,
    jsonTask,
    imgTask,
    imgSvgTask,
    fontTask,
    htmlTask,
    serve
  )
);
