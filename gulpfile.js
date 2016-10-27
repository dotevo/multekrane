const gulp = require('gulp')
const eslint = require('gulp-eslint')
const jscs = require('gulp-jscs')
var stylish = require('gulp-jscs-stylish');

var jsDosieroj = ['*.js', '**/*.js', '!node_modules/**/*.js']

gulp.task('lint', function() {
	return gulp.src(jsDosieroj)
		.pipe(eslint())
		.pipe(jscs())
		.pipe(stylish())
});

gulp.task('validigi', ['lint'], function () {
})
