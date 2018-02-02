const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const vars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('css', () => {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, vars, nested, mixins, autoprefixer]))
	.on('error', (error) => {
		console.error(error.toString());
	})
	.pipe(gulp.dest('./app/temp/styles'));
});