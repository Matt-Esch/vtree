var test = require("tape")

var vtree = require("../index")

test("vtree is a function", function (assert) {
    assert.equal(typeof vtree, "function")
    assert.end()
})
