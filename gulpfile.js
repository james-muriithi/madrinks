var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var nodeSass =  require("node-sass");
// var sass = require('gulp-sass')(require('sass'));
var sass = gulpSass(nodeSass);

gulp.task('sass', async function (done) {
  await gulp.src('./sass/_style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/style.scss', (done) => {
        gulp.series('sass')(done)
    });
});

gulp.task('default', gulp.series([ 'sass', 'sass:watch']));