const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {

	browserSync.init({
		'server': {
			'baseDir': './app'
		}
	});

	watch('./app/index.html', () => {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('cssInject');
	});
});

//css changes injected on the fly into the browser
//so the server of browserSync has not to reload
//This tasks depends on 'css' task
gulp.task('cssInject', ['css'], () =>{
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});