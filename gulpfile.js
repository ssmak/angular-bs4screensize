const gulp = require('gulp');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const gulpSequence = require('gulp-sequence');
const pump = require('pump');
const rename = require('gulp-rename');

gulp.task('clean', () => {
  return pump([
    gulp.src(['dist'], { read: false }),
    clean()
  ]);
});

gulp.task('copy.source', () => {
  return pump([
    gulp.src(['src/bs4screensize.js']),
    gulp.dest('dist')
  ]);
});

gulp.task('optimize.js', () => {
  return pump([
    gulp.src(['dist/bs4screensize.js']),
    uglify({ mangle: false }),
    rename({ suffix: '.min' }),
    gulp.dest('dist')
  ]);
});

gulp.task('build.dist', gulpSequence('clean', 'copy.source', 'optimize.js'));
