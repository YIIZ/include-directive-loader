const placeholderExp = /#INCLUDE_(\d+)_DIRECTIVE#/
const placeholderGen = id => `#INCLUDE_${id}_DIRECTIVE#`

module.exports = function (content) {
  this.cacheable && this.cacheable()

  const includes = []
  const transformed = content.replace(/^#include (.+)$/mg, function (_, path) {
    // better way?
    const placeholder = placeholderGen(includes.length)
    includes.push(path)
    return placeholder
  })
  const result = JSON.stringify(transformed).replace(placeholderExp, function (_, pathIndex) {
    return `" + require("${includes[pathIndex]}") + "`
  })

  return `module.exports = ${result}`
}
