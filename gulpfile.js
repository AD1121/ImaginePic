const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Logs Message
gulp.task('message', function() {
  return console.log('Gulp is running');
});

// Copy All HTML Files
gulp.task('copyHTML', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);