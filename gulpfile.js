const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// function for compiling sass into css
const buildStyles = () => {
  return src("index.scss").pipe(sass()).pipe(dest("css"));
};

// function to watch changes in sass source file index.scss
const watchTask = () => {
  watch(["index.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
