console.log("Hello World")

document.body.children         // including text nodes
document.body.firstChild.childNodes         // including text nodes
document.body.firstElementChild.childNodes    // does not include text nodes
document.body.firstElementChild.children[0]    // first element
document.body.firstElementChild.children[1].nextElementSibling
document.body.firstElementChild.children[2].previousElementSibling    // html block
document.body.firstElementChild.children[4].previousSibling      // text

