const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const cssnested = require('postcss-nested');
const cssImport = require('postcss-import');


gulp.task('css', () => {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, autoprefixer, cssvars, cssnested]))
	.pipe(gulp.dest('./app/temp/styles'));
});