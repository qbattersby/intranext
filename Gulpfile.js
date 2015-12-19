var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();

// Default task
//gulp.task('default', function() {
//    gulp.src('sass/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./css/'));
//});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve'], browserSync.reload);


// Watch task
gulp.task('watch', function() {
    gulp.watch('sass/*.scss',['sass']);
})