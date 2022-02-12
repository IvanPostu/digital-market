const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const { stream } = require("browser-sync");
const versionNumber = require("gulp-version-number");
const gulpIf = require("gulp-if");
const { isDevelopment } = require("../configs/config");

const projectPaths = require("../configs/paths");

function html() {
  return gulp
    .src(projectPaths.src.html)
    .pipe(fileInclude())
    .pipe(
      gulpIf(
        !isDevelopment(),
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: {
            file: projectPaths.buildFolder + "/version.json",
          },
        })
      )
    )
    .pipe(gulp.dest(projectPaths.build.html))
    .pipe(stream());
}

module.exports.html = html;
