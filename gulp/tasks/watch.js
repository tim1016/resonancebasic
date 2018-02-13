var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    settings = require('../settings');   
    
gulp.task('watch', function() {
   
   browserSync.init({
      server: {
      baseDir: "app"}
   });

  watch(settings.indexFile, function() {
    browserSync.reload();
  });

  watch(settings.styleAssets + '**/*.css', function() {
    gulp.start('cssInject');
  });

}); 

gulp.task('cssInject', ['styles'], function(){
   return gulp.src(settings.finalStyles)
   .pipe(browserSync.stream());
});
