'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      browserSync = require('browser-sync').create(),
      del = require('del'),
      gulpIf = require('gulp-if'),
      // debug = require('gulp-debug'),
      notify = require('gulp-notify'),
      multipipe = require('multipipe');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'; // NODE_ENV=production gulp build

gulp.task('styles', () => {
  let plugins;
  if (isDevelopment) {
    plugins = [autoprefixer({ browsers: ['last 5 version'] })];
  } else {
    plugins = [
      autoprefixer({ browsers: ['last 5 version'] }),
      cssnano,
    ];
  }
  return multipipe(
      gulp.src('frontend/scss/main.scss'),
      gulpIf(isDevelopment, sourcemaps.init()),
      sass(),
      postcss(plugins),
      gulpIf(isDevelopment, sourcemaps.write()),
      gulp.dest('public/css'),
    ).on('error', notify.onError());
});

gulp.task('clean', function () {
  return del('public');
});

gulp.task('assets', function() {
  return gulp.src('frontend/img/**/*.*', { since: gulp.lastRun('assets') })
    .pipe(gulp.dest('public/img'));
});

gulp.task('html', () => {
  return gulp.src('frontend/index.html')
    .pipe(gulp.dest('public'));
})

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('styles', 'assets', 'html'))
);

gulp.task('watch', () => {
  gulp.watch('frontend/scss/**/*.*', gulp.series('styles'));
  gulp.watch('frontend/img/**/*.*', gulp.series('assets'));
  gulp.watch('frontend/**/*.html', gulp.series('html'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: 'public',
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
  gulp.series('build', gulp.parallel('watch', 'serve'))
);
