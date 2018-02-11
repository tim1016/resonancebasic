var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
   console.log('Hooray, you created your first gulp task');
})

gulp.task('watch', function(){
   watch()
});
