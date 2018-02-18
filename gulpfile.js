require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
    



   
 






/*
gulp.task('styles', function(){
   gulp.src('./app/assets/styles/*.css')
   .pipe(gulp.dest('./app/temp/styles/'));
   
   console.log(settings.styleAssets);
   console.log(settings.finalStyles);
});
*/



//gulp.task('watch', function() {
//  browserSync.init({
//    notify: false,
//    proxy: settings.urlToPreview,
//    ghostMode: false
//  });

//  gulp.watch('./**/*.php', function() {
//    browserSync.reload();
//  });
//  gulp.watch(settings.cssAssets + '*.css', ['waitForStyles']);
//  gulp.watch([settings.themeLocation + 'js/modules/*.js', settings.themeLocation + 'js/scripts.js'], ['waitForScripts']);
//});

