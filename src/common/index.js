/**
 * webpack 打包入口文件
 */
/* ---------------- common ------------------- */
// array
const uniq = require('./array/uniq')
const intersection = require('./array/intersection')

// random
const rdColor = require('./random/rdColor')
const rdNum = require('./random/rdNum')

// regexp
const isEmail = require('./regexp/isEmail')
const isPhoneNum = require('./regexp/isPhoneNum')

// string
const trim = require('./string/trim')
const changeCase = require('./string/changeCase')

// lang
const isArray = require('./lang/isArray')
const clone = require('./lang/clone')
const cloneDeep = require('./lang/cloneDeep')
const isType = require('./lang/isType')

// math
const sum = require('./math/sum')
const mean = require('./math/mean')
const max = require('./math/max')
const min = require('./math/min')

// object
const equal = require('./object/equal')

// url
const obj2query = require('./url/obj2query')
const query2obj = require('./url/query2obj')

// collection
const each = require('./collection/each')

// function
const debounce = require('./function/debounce')
const throttle = require('./function/throttle')

const fn = {
  uniq,
  intersection,
  rdColor,
  rdNum,
  isEmail,
  isPhoneNum,
  trim,
  changeCase,
  isArray,
  clone,
  cloneDeep,
  sum,
  mean,
  max,
  min,
  equal,
  obj2query,
  query2obj,
  each,
  debounce,
  throttle,
}

const commonFn = Object.assign({}, fn, isType)

module.exports = commonFn
