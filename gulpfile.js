let gulp = require('gulp');
let watch = require('gulp-watch');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let cssnested = require('postcss-nested');
let cssImport = require('postcss-import');
let browserSync = require('browser-sync').create();

gulp.task('default', () => {
	console.log('this is a task');
});

gulp.task('html', () => {
	console.log('this is for html');
});

gulp.task('css', () => {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, autoprefixer, cssvars, cssnested]))
	.pipe(gulp.dest('./app/temp/styles'));
});

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