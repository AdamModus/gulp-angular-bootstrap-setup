/* jshint node: true */
'use strict';
// grab our gulp packages
// grab our gulp packages
var sass = require('gulp-sass');
var gulp = require('gulp');


//compile sass
gulp.task('sass', function() {
   gulp.src('app/stylesheets/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/stylesheets'));
});

//realtime/livereload - watching for changes
gulp.task('watch', function() {
   //if any watched sass files change, run 'sass' task = compile sass
   gulp.watch('app/stylesheets/sass/**/*.scss', ['sass']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass'], function() {
   gulp.start('watch');
});
