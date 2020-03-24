const valite = require('./validate');
const uuid = require('./uuid')
const util = require('./util')

const app = {
  valite: valite,
  uuid: uuid,
  util: util
}
console.log(app.util.filterNull({name: null}))
module.exports = app
// Object.assign(module.exports, valite, array, uuid)