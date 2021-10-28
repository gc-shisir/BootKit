const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

// function for compiling sass into css
const buildStyles = () => {
  return src("bootkit/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
};

// function to watch changes in sass source files index.scss and others
const watchTask = () => {
  watch(["bootkit/**/*.scss", "*.html"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
