/* eslint-disable no-undef*/
const path = require('path')

module.exports = {
  components: 'src/**/*.jsx',
  require: [path.join(__dirname, 'src/index.css')],
}
