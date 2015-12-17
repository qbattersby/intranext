var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

// Default task
gulp.task('default', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


// Watch task
gulp.task('watch', function() {
    gulp.watch('sass/*.scss',['default']);
})