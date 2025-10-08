const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const { deleteAsync } = require('del');
const htmlmin = require('gulp-htmlmin');

// Clean build directory
function clean() {
  return deleteAsync(['dist/**', '!dist']);
}

// Copy assets and root files
function copyAssets() {
  return gulp.src([
    'assets/**/*', 
    '!assets/sass/**/*',
    'sitemap.xml'
  ], { base: '.' })
    .pipe(gulp.dest('dist'));
}

// Process HTML files
function html() {
  return gulp.src(['src/*.html', '!src/partials/**/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('dist'));
}

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('src/**/*.html', gulp.series(html));
  gulp.watch('assets/**/*', gulp.series(copyAssets));
});

// Start server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('dist/**/*').on('change', browserSync.reload);
});

// Build task
gulp.task('build', gulp.series(clean, gulp.parallel(html, copyAssets)));

// Default task
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
