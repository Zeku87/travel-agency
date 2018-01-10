let gulp = require('gulp');
let watch = require('gulp-watch');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');

gulp.task('default', () => {
	console.log('this is a task');
});

gulp.task('html', () => {
	console.log('this is for html');
});

gulp.task('css', () => {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
	watch('./app/index.html', () => {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('css');
	});
});