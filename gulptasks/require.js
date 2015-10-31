var gulp  = require('gulp'),
    shell = require('gulp-shell');

gulp.task('require-compressing', shell.task([
    'node node_modules/requirejs/bin/r.js -o src/build/build.js'
]));
