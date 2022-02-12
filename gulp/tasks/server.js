const { init } = require("browser-sync");

const projectPaths = require("../configs/paths");

function server(done) {
  init({
    server: {
      baseDir: projectPaths.build.html,
    },
    notify: true,
    port: 3000,
  });
}

module.exports.server = server;
