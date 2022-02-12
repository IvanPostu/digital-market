const gulp = require("gulp");

const projectPaths = require("../configs/paths");

function copy() {
  return gulp
    .src(projectPaths.src.files)
    .pipe(gulp.dest(projectPaths.build.files));
}

module.exports.copy = copy;

