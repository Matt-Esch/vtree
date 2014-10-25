var version = require("./version")
var assign = require('object.assign')

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

VirtualText.prototype.toJSON = function () {
  return assign({}, this, { version: this.version, type: this.type })
}
