var gulp = require('gulp'),
    settings = require('../settings'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins =require('postcss-mixins');


gulp.task('styles', function(){
   return  gulp.src(settings.styleAssets + '*.css')
   .pipe(postcss([cssImport, mixins, cssvars, nested , autoprefixer]))
   .on('error', function(errorInfo) {
   console.log(errorInfo.toString());
   this.emit('end');
   })
   .pipe(gulp.dest(settings.finalStyles)) 
});