const extract = require('string-concluding')

function parse (path) {
  const ext = '.app'
  const extracted = extract(path, ext + '/')
  if (path.slice(-ext.length) === ext) {
    return path
  }
  else if (extracted !== -1) {
    return extracted.slice(0, extracted.length - 1)
  }
  else {
    return -1
  }
}

module.exports = parse
