const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject:dev', gulp.series(gulp.parallel('styles', 'scripts'), 'inject:dev'));
gulp.task('inject:test', gulp.series(gulp.parallel('styles', 'scripts'), 'inject:test'));
gulp.task('inject:acc', gulp.series(gulp.parallel('styles', 'scripts'), 'inject:acc'));
gulp.task('inject:prod', gulp.series(gulp.parallel('styles', 'scripts'), 'inject:prod'));
gulp.task('build:prod', gulp.series('partials', gulp.parallel('inject:prod', 'other'), 'build:prod'));
gulp.task('build:dev', gulp.series('partials', gulp.parallel('inject:dev', 'other'), 'build:dev'));
gulp.task('build:test', gulp.series('partials', gulp.parallel('inject:test', 'other'), 'build:test'));
gulp.task('build:acc', gulp.series('partials', gulp.parallel('inject:acc', 'other'), 'build:acc'));
gulp.task('test', gulp.series('scripts', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('serve', gulp.series('clean', 'inject:dev', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build:dev'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
}

function watch(done) {
    gulp.watch([
        conf.path.src('index.html'),
        'bower.json'
    ], gulp.parallel('inject:dev'));

    gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
    gulp.watch([
        conf.path.src('**/*.scss'),
        conf.path.src('**/*.css')
    ], gulp.series('styles'));
    gulp.watch(conf.path.src('**/*.js'), gulp.series('inject:dev'));
    done();
}
