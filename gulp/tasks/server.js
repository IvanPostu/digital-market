const { init } = require('browser-sync')

const projectPaths = require('../configs/paths')

function server() {
    init({
        server: {
            baseDir: projectPaths.build.html,
        },
        notify: true,
        port: 3000,
        open: false,
    })
}

module.exports.server = server
