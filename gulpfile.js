const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'); // ソースマップ対応

gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss') // 入力元
    .pipe(sourcemaps.init()) // ソースマップ初期化
    .pipe(sass().on('error', sass.logError)) // Sassコンパイル
    .pipe(sourcemaps.write('.')) // ソースマップを同じディレクトリに出力
    .pipe(gulp.dest('src/css')); // 出力先をsrc/cssに変更
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
