const gulp = require('gulp')
var ttf2woff = require('gulp-ttf2woff')
const { stream } = require('browser-sync')

const projectPaths = require('../configs/paths')

function fonts() {
    return gulp.src(projectPaths.src.fonts).pipe(ttf2woff()).pipe(gulp.dest(projectPaths.build.fonts)).pipe(stream())
}

module.exports.fonts = fonts
