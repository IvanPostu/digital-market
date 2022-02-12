const gulp = require("gulp");

const projectPaths = require("./gulp/configs/paths");
const {isDevelopment} = require('./gulp/configs/config')

const { copy } = require("./gulp/tasks/copy");
const { html } = require("./gulp/tasks/html");
const { server } = require("./gulp/tasks/server");
const { scss } = require("./gulp/tasks/scss");
const { reset } = require("./gulp/tasks/reset");
const { js } = require("./gulp/tasks/js");
const { images } = require("./gulp/tasks/images");

function watcher() {
    gulp.watch(projectPaths.watch.files, copy);
    gulp.watch(projectPaths.watch.html, html);
    gulp.watch(projectPaths.watch.scss, scss);
    gulp.watch(projectPaths.watch.js, js);
    gulp.watch(projectPaths.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images);

const lastTasks = gulp.parallel(watcher, server)

const dev = gulp.series(reset, mainTasks, lastTasks);
const build = gulp.series(reset, mainTasks);

gulp.task("default", dev);

module.exports.build = build
