var gulp = require('gulp'),
    compass = require('gulp-compass'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    minifyCss = require('gulp-minify-css'),
    rimraf = require('gulp-rimraf'),
    minifyHTML = require('gulp-minify-html'),
    resources = {
      html : 'src/**/*.html',
      images: 'src/assets/img/**/*',
      scripts: 'src/assets/js/**/*',
      scss: 'src/assets/scss/**/*.{scss,sass}'
    };


gulp.task('build-html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };
    return gulp.src(resources.html)
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-images', function(){
    return gulp.src(resources.images)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('compass', function() {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(compass({
            project: path.join(__dirname, '../'),
            css: '../dist/css',
            sass: 'src/assets/scss',
            debug: false,
            sourcemap: false,
            style: 'compressed'
        }))
        .on('error', function(error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 9'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {

    //SCSS
    gulp.watch(resources.scss, function(){
        runSequence('compass', 'reload');
    });

    // HTML
    gulp.watch(resources.html, function(){
        runSequence('build-html', 'reload');
    });

    // IMAGES
    gulp.watch(resources.images, function(){
        runSequence('build-images', 'reload');
    });

    //JS
    gulp.watch(resources.scripts, function(){
        runSequence('require-compressing', 'reload');
    });

});

gulp.task('reload', function(){
    browserSync.reload();
});