const del = require('del')
const { clean } = require('../configs/paths')

module.exports.reset = function reset() {
    return del(clean)
}
