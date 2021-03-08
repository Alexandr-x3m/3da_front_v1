const path = require('path')

// next.config.js
/* module.exports = {
  reactStrictMode: true,
} */

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}