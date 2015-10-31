var
    gulp            = require('gulp'),
    requireDir      = require('require-dir'),
    dir             = requireDir('./gulptasks'),
    runSequence     = require('run-sequence'),
    rimraf          = require('gulp-rimraf');

gulp.task('default', ['serve'], function() {});

gulp.task('build', function(cb) {
    runSequence('clean', 'build-html', 'build-images', 'compass', 'require-compressing', cb);
});

gulp.task('serve', ['build'], function(cb) {
    runSequence('browser-sync', 'watch', cb);
});

gulp.task('clean', function (cb) {
    return gulp.src('dist')
    .pipe(rimraf());
});
