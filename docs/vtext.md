# VText
VText is a representation of a Text node. 

In virtual-dom, a VText is turned into an actual text node with the `createElement` function. You can read the code at [vdom/create-element](https://github.com/Matt-Esch/vdom/blob/master/create-element.js)

`createElement` turns a VText into a Text node using [document#createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/document.createTextNode). 

## Full Example
```javascript
var createElement = require("vdom/create-element")
var VNode = require("vtree/vnode")
var VText = require("vtree/vtext")
var myText = new VText("Hello, World")

// Pass our VText as a child of our VNode
var myNode = new VNode("div", { id: "my-node" }, [myText])

var myElem = createElement(myNode)
document.body.appendChild(myElem)
// Will result in a dom string that looks like <div id="my-node">Hello, World</div>
```

## Arguments
**text**  
The string you would like the text node to contain.

## HTML Injection
`document#createTextNode` will defend against HTML injection. If you do not want this behavior, you may use the innerHTML property of the parent VNode.

```javascript
escapedText = new VText('<span>Example</span>')
escapedNode = new VNode('div', null, [escapedText])
// Will enter the dom as <div>&lt;span&gt;Example&lt;/span&gt;</div>

unescapedNode = new VNode('div', { innerHTML: "<span>Example</span>" })
// Will enter the dom as <div><span>Example</span></div>
```
