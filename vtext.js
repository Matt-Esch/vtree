var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.version = version
    this.type = "VirtualText"
    this.text = String(text)
}
