const path = require('path')

const rootFolder = path.basename(path.resolve())

const buildFolder = './build'
const srcFolder = './src'

module.exports = {
    build: {
        files: buildFolder + '/files/',
        html: buildFolder + '/',
        css: buildFolder + '/css/',
        js: buildFolder + '/js/',
        images: buildFolder + '/img/',
        fonts: buildFolder + '/fonts/',
    },
    src: {
        files: srcFolder + '/files/**/*.*',
        html: srcFolder + '/*.html',
        scss: srcFolder + '/scss/style.scss',
        js: srcFolder + '/js/app.js',
        images: srcFolder + '/img/**/*.{jpg,jpeg,png,gif,webp}',
        svg: srcFolder + '/img/**/*.svg',
    },
    watch: {
        files: srcFolder + '/files/**/*.*',
        html: srcFolder + '/**/*.html',
        scss: srcFolder + '/scss/**/*.scss',
        js: srcFolder + '/js/**/*.js',
        images: srcFolder + '/img/**/*.{jpg,jpeg,png,gif,webp,svg}',
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
