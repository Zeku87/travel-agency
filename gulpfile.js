var gulp = require('gulp');
var wacth = require('gulp-watch');

gulp.task('default', () => {
	console.log('this is a task');
});

gulp.task('html', () => {
	console.log('this is for html');
});

gulp.task('css', () => {
	console.log('this is for css');
});

gulp.task('watch', () => {
	wacth('./app/index.html', () => {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('css');
	});
});