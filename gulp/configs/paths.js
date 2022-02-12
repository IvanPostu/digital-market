const path = require('path')

const rootFolder = path.basename(path.resolve())

const buildFolder = './build'
const srcFolder = './src'

module.exports = {
    build: {
        files: buildFolder + '/files/'
    },
    src: {
        files: srcFolder + '/files/**/*.*'
    },
    watch: {
        files: srcFolder + '/files/**/*.*'
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,

}
