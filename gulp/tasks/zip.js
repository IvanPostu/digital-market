const plumber = require("gulp-plumber");
const gulp = require("gulp");
const zipPlugin = require("gulp-zip");
const packageFile = require("../../package.json");

const projectPaths = require("../configs/paths");

function onError(err) {
  console.log(err);
  this.emit("end");
}

function zip() {
  const uId = new Date().toISOString().replace(/[^0-9]/g, "");
  const zipName = packageFile.name + "_" + uId + "_.zip";

  return gulp
    .src(projectPaths.buildFolder + "/**/*.*", {})
    .pipe(plumber(onError))
    .pipe(zipPlugin(zipName))
    .pipe(gulp.dest("artifacts/"));
}

module.exports.zip = zip;
