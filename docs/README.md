# virtual-dom documentation
virtual-dom consists of two modules: [vtree](https://github.com/Matt-Esch/vtree), which is responsible for diffing two virtual representations DOM nodes, and [vdom](https://github.com/Matt-Esch/vdom), which is responsible for taking the patch object genereated by [vtree/diff](https://github.com/Matt-Esch/vtree/blob/master/diff.js) and modifying the DOM (using [vdom/patch](https://github.com/Matt-Esch/vdom/blob/master/patch.js)).

This documentation is aimed at people who would like to work with virtual-dom directly, or gain a deeper understanding of how their virtual-dom based framework works. If you would rather be working at a higher level, you may find the [mercury framework](https://github.com/Raynos/mercury) a better place to start.

Newcomers should start by reading the VNode and VText documentation, as virtual nodes are central to the operation of virtual-dom. Hooks, Thunks, and Widgets are more advanced features, and you will find both documentation of their interfaces and several examples on their respective pages.

## Contents

[VNode](https://github.com/littleloops/virtual-dom-docs-wip/blob/master/vnode.md) - A representation of a DOM element

[VText](https://github.com/littleloops/virtual-dom-docs-wip/blob/master/vtext.md) - A representation of a text node

[Hooks](https://github.com/littleloops/virtual-dom-docs-wip/blob/master/hooks.md) - The mechanism for executing functions after a new node has been created

[Thunk](https://github.com/littleloops/virtual-dom-docs-wip/blob/master/thunk.md) - The mechanism for taking control of diffing a specific DOM sub-tree

[Widget](https://github.com/littleloops/virtual-dom-docs-wip/blob/master/widget.md) - The mechanism for taking control of node patching: DOM Element creation, updating, and removal.
