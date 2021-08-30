const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// function for compiling sass into css
const buildStyles = () => {
  return src("bootkit/**/*.scss").pipe(sass()).pipe(dest("css"));
};

// function to watch changes in sass source files index.scss and others
const watchTask = () => {
  watch(["bootkit/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
