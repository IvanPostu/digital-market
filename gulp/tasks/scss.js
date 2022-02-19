const { stream } = require('browser-sync')
const gulp = require('gulp')
const sass = require('sass')
const rename = require('gulp-rename')
const gulpSass = require('gulp-sass')
const minifyCss = require('gulp-minify-css')
const cleanCss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const { isDevelopment } = require('../configs/config')
const projectPaths = require('../configs/paths')
const gulpIf = require('gulp-if')

const gulpSassWrapper = gulpSass(sass)
const isProductionBuild = !isDevelopment()

function scss() {
    return gulp
        .src(projectPaths.src.scss, { sourcemaps: true })
        .pipe(
            gulpSassWrapper({
                outputStyle: 'expanded',
            })
        )
        .pipe(gulpIf(isProductionBuild, groupCssMediaQueries()))
        .pipe(
            gulpIf(
                isProductionBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true,
                })
            )
        )
        .pipe(gulp.dest(projectPaths.build.css))
        .pipe(cleanCss())
        .pipe(minifyCss({ keepSpecialComments: 0 }))
        .pipe(
            rename({
                extname: '.min.css',
            })
        )
        .pipe(gulp.dest(projectPaths.build.css))
        .pipe(stream())
}

module.exports.scss = scss
