const gulp = require('gulp')

const projectPaths = require('./gulp/configs/paths')

const { copy } = require('./gulp/tasks/copy')
const { html } = require('./gulp/tasks/html')
const { server } = require('./gulp/tasks/server')
const { scss } = require('./gulp/tasks/scss')
const { reset } = require('./gulp/tasks/reset')
const { js } = require('./gulp/tasks/js')
const { images } = require('./gulp/tasks/images')
const { zip } = require('./gulp/tasks/zip')
const { fonts } = require('./gulp/tasks/fonts')
const { copyStaticLibs } = require('./gulp/tasks/copyStaticLibs')

function watcher() {
    gulp.watch(projectPaths.watch.files, copy)
    gulp.watch(projectPaths.watch.html, html)
    gulp.watch(projectPaths.watch.scss, scss)
    gulp.watch(projectPaths.watch.js, js)
    gulp.watch(projectPaths.watch.images, images)
    gulp.watch(projectPaths.watch.fonts, fonts)
}

const mainTasks = gulp.parallel(copy, html, scss, fonts, js, images, copyStaticLibs)

const lastTasksDevelopment = gulp.parallel(watcher, server)

const dev = gulp.series(reset, mainTasks, lastTasksDevelopment)
const build = gulp.series(reset, mainTasks)

gulp.task('default', dev)

module.exports.build = build
module.exports.zip = zip
