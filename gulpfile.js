const gulp = require("gulp");

// const projectPaths = require("./gulp/configs/paths");

const { copy, copyWatcher } = require("./gulp/tasks/copy");
const { reset } = require("./gulp/tasks/reset");

const dev = gulp.series(reset, copy, copyWatcher)

gulp.task("default", dev);
