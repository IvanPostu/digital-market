function isDevelopment() {
    return process.env.NODE_ENV === 'development'
}

module.exports.isDevelopment = isDevelopment
