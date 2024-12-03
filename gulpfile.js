const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Sassコンパイルタスク
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // SCSSファイルのパスを指定
    .pipe(sass().on('error', sass.logError)) // Sassをコンパイル
    .pipe(gulp.dest('dist/css')); // 出力先のパス
});

// watchタスク（SCSSファイルが変更されたら自動でコンパイル）
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});
