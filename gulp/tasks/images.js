const { stream } = require("browser-sync");
const plumber = require("gulp-plumber");
const gulp = require("gulp");
const newer = require('gulp-newer')
const imagemin = require('gulp-imagemin')

const projectPaths = require("../configs/paths");

function onError(err) {
  console.log(err);
  this.emit("end");
}

function images() {
  return gulp
    .src(projectPaths.src.images)
    .pipe(plumber(onError))
    .pipe(newer(projectPaths.build.images))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
    }))
    .pipe(gulp.dest(projectPaths.build.images))
    .pipe(gulp.src(projectPaths.src.svg))
    .pipe(gulp.dest(projectPaths.build.images))
    .pipe(stream());
}

module.exports.images = images;
