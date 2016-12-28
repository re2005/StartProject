const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject:prod', inject_prod);
gulp.task('inject:dev', inject_dev);
gulp.task('inject:test', inject_test);
gulp.task('inject:acc', inject_acc);

function inject_dev() {
    return inject('dev');
}

function inject_test() {
    return inject('test');
}

function inject_acc() {
    return inject('acc');
}

function inject_prod() {
    return inject('prod');
}

function inject(env) {
    const injectScripts = gulp.src([
        conf.path.tmp('**/*.js'),
        `!${conf.path.tmp('**/*.spec.js')}`,
        `!${conf.path.tmp('**/*.conf.js')}`,
        conf.path.tmp('**/' + env + '.conf.js'),
    ])
        .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

    const injectOptions = {
        ignorePath: [conf.paths.src, conf.paths.tmp],
        addRootSlash: false
    };

    return gulp.src(conf.path.src('index.html'))
        .pipe(gulpInject(injectScripts, injectOptions))
        .pipe(wiredep(Object.assign({}, conf.wiredep)))
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
}
