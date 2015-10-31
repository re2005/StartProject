var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        port: 9000,
        notify: false,
        tunnel: false,
        startPath: 'dist/'
    });
});
