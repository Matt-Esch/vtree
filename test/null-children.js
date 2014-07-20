var test = require("tape")

var VNode = require("../vnode")
var VText = require("../vtext")
var VPatch = require("../vpatch")
var diff = require("../diff")

test("null child causes remove", function (assert) {
    var header = new VNode("div", {
        className: "header"
    }, [new VText("Header")])

    var body = new VNode("div", {
        className: "body"
    }, [new VText("body")])

    var footer = new VNode("div", {
        className: "footer"
    }, [new VText("footer")])

    var leftNode = new VNode("div", {
        className: "container"
    }, [
        header,
        body,
        footer
    ])

    var rightNode = new VNode("div", {
        className: "container"
    }, [
        header,
        null,
        footer
    ])

    var patches = diff(leftNode, rightNode)

    for(var key in patches) {
        if (key === "a") {
            assert.equal(patches[key], leftNode)
        } else if (key === "3") {
            var vpatch = patches[key]
            assert.equal(vpatch.type, VPatch.REMOVE)
            assert.equal(vpatch.vNode, body)
            assert.equal(vpatch.patch, null)
        } else {
            assert.fail("Should only be a remove op for node 3")
        }
    }

    assert.end();
})
