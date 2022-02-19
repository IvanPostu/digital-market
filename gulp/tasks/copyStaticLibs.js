const gulp = require('gulp')
const minifyCss = require('gulp-minify-css')
const cleanCss = require('gulp-clean-css')
const plumber = require('gulp-plumber')
const gulpIf = require('gulp-if')
const merge = require('merge-stream')
const rename = require('gulp-rename')
const strip = require('gulp-strip-comments')

const { isDevelopment } = require('../configs/config')
const projectPaths = require('../configs/paths')

const isProductionBuild = !isDevelopment()

function onError(err) {
    console.log(err)
    this.emit('end')
}

function copyStaticLibs() {
    const normalize = gulp
        .src(projectPaths.nodeModules + 'normalize.css/normalize.css', { sourcemaps: false })
        .pipe(
            plumber({
                errorHandler: onError,
            })
        )
        .pipe(gulpIf(isProductionBuild, cleanCss()))
        .pipe(gulpIf(isProductionBuild, minifyCss({ keepSpecialComments: 0 })))
        .pipe(gulp.dest(projectPaths.build.staticLibsCss))

    const jQuery = gulp
        .src(projectPaths.nodeModules + 'jquery/dist/jquery' + (isProductionBuild ? '.min' : '') + '.js', {
            sourcemaps: false,
        })
        .pipe(
            plumber({
                errorHandler: onError,
            })
        )
        .pipe(strip())
        .pipe(
            rename({
                basename: 'jquery',
                extname: '.js',
            })
        )
        .pipe(gulp.dest(projectPaths.build.staticLibsJs))

    const slickSliderCss = gulp
        .src(projectPaths.nodeModules + 'slick-slider/slick/slick.css', { sourcemaps: false })
        .pipe(
            plumber({
                errorHandler: onError,
            })
        )
        .pipe(gulpIf(isProductionBuild, cleanCss()))
        .pipe(gulpIf(isProductionBuild, minifyCss({ keepSpecialComments: 0 })))
        .pipe(gulp.dest(projectPaths.build.staticLibsCss))

    const slickSliderJs = gulp
        .src(projectPaths.nodeModules + 'slick-slider/slick/slick' + (isProductionBuild ? '.min' : '') + '.js', {
            sourcemaps: false,
        })
        .pipe(
            plumber({
                errorHandler: onError,
            })
        )
        .pipe(strip())
        .pipe(
            rename({
                basename: 'slick',
                extname: '.js',
            })
        )
        .pipe(gulp.dest(projectPaths.build.staticLibsJs))

    return merge(normalize, jQuery, slickSliderCss, slickSliderJs)
}

module.exports.copyStaticLibs = copyStaticLibs
