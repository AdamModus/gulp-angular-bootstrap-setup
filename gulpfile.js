var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;


// where all the files are
var src = {
   scss: 'app/stylesheets/sass/**/*.scss',
   css: 'app/stylesheets/css',
   html: 'app/**/*.html',
   js: 'app/scripts/**/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

   // start browserSync
   browserSync({
      // root folder
      server: "./app",
      // used port
      port: 8181
   });

});

// Compile sass into CSS
gulp.task('sass', function() {
   gulp.src(src.scss)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(src.css))
      .pipe(reload({
         stream: true
      }));
});

gulp.task('watch', function() {
   gulp.watch(src.scss, ['sass']);
   gulp.watch([src.html, src.js]).on('change', reload);
});

gulp.task('default', ['sass', 'serve'], function() {
   gulp.start('watch');
});
