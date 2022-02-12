const gulp = require("gulp");

const projectPaths = require("../configs/paths");

function copy() {
  return gulp
    .src(projectPaths.src.files)
    .pipe(gulp.dest(projectPaths.build.files));
}

function copyWatcher() {
  return gulp
    .watch(projectPaths.watch.files, copy);
}

module.exports.copy = copy;

module.exports.copyWatcher = copyWatcher;
