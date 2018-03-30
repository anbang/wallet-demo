var gulp = require('gulp');

//复制main.js
gulp.task('copy', function() {
    gulp.src(["./config-build/main.js",'./config-build/package.json'])
        .pipe(gulp.dest('./dist/'))
});