const extract = require('string-concluding')

function parse (path) {
  const ext = '.app'
  const extracted = extract(path, ext + '/')
  if (path.slice(-ext.length) === ext) {
    return path
  }
  else if (extracted !== -1) {
    return extracted
  }
  else {
    return new Error('comm does not contain ' + ext)
  }
}

module.exports = parse
