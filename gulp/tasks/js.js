const { stream } = require('browser-sync')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const gulp = require('gulp')

const { isDevelopment } = require('../configs/config')
const projectPaths = require('../configs/paths')

function onError(err) {
    console.log(err)
    this.emit('end')
}

function js() {
    return gulp
        .src(projectPaths.src.js, { sourcemaps: true })
        .pipe(plumber(onError))
        .pipe(
            webpack({
                mode: isDevelopment() ? 'development' : 'production',
                output: {
                    filename: 'app.min.js',
                },
                externals: {
                    jquery: 'jQuery',
                },
            })
        )
        .pipe(gulp.dest(projectPaths.build.js))
        .pipe(stream())
}

module.exports.js = js
