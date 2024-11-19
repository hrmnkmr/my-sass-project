const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Sass のコンパイルタスク
function compileSass() {
  return gulp
    .src("sass/style.scss") // Sass ファイルの場所
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("css")); // CSS の出力先
}

// Sass ファイルを監視するタスク
function watchSass() {
  gulp.watch("sass/style.scss", compileSass);
}

// デフォルトタスク
exports.default = watchSass;
