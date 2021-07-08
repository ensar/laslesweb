const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-clean-css');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer')

gulp.task('css',() =>{
    return gulp.src('src/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch',()=>{
    gulp.watch('src/**/*.scss',gulp.series('css'))
});

gulp.task('default',gulp.parallel('css','watch'))