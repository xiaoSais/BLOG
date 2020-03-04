(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{247:function(s,a,e){"use strict";e.r(a);var n=e(17),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"其他跨域策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他跨域策略"}},[s._v("#")]),s._v(" 其他跨域策略")]),s._v(" "),e("h2",{attrs:{id:"共享-cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享-cookie"}},[s._v("#")]),s._v(" 共享 Cookie")]),s._v(" "),e("p",[s._v("不同域的两个页面不能共享 Cookie, 但是如果两个页面一级域名相同，只是二级域名不同，浏览器可以通过设置 document.domain 共享 cookie。")]),s._v(" "),e("p",[s._v("eg: A 网页是 http://a.example.com/a.html, B 网页是 http://b.example.com/b.html, 那么只要设置相同的 document.domian, 两个网页就可以共享Cookie。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  document.domain = 'example.com'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在，A网页通过脚本设置一个 Cookie。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  document.cookie = "test1=hello"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("B网页就可以读到这个 Cookie。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  var allCookie = document.cookie;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"iframe-跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iframe-跨域"}},[s._v("#")]),s._v(" Iframe 跨域")]),s._v(" "),e("p",[s._v("如果两个网页不同源就拿不到对方的DOM。")]),s._v(" "),e("p",[s._v("eg: 页面1 http://localhost:3000/index.html")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  <html>\n  <head>\n    <script src="https://unpkg.com/axios/dist/axios.min.js"><\/script>\n  </head>\n  <body>\n      <div>parent page</div>\n      <div>\n        <iframe src="http://localhost:3001/index.html" id="child"></iframe>\n      </div>\n  </body>\n  <script>\n    console.log(document.getElementById(\'child\').contentWindow)\n  <\/script>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("嵌套了一个域为 http://localhost:3001/index.html 的iframw，试图在页面1 获得iframe 的DOM")]),s._v(" "),e("p",[s._v("控制台打印：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('document: [Exception: DOMException: Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame. at invokeGetter (<anonymous>:1:142)]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"片段标识符跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#片段标识符跨域"}},[s._v("#")]),s._v(" 片段标识符跨域")]),s._v(" "),e("p",[s._v("父子页面通信可以通过改变对方页面路径的 hash 值，然后通过监听对应页面的hashchange 事件获得传过来的数据。")]),s._v(" "),e("p",[s._v("父页面向子页面传递数据：")]),s._v(" "),e("p",[s._v("Parent:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  let child = document.getElementById('child')\n  child.onload = function () {\n    // 增加页面的 hash 值\n    this.src = 'http://localhost:3001/index.html#fromParent'\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("Child:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  window.onhashchange = function () {\n    // #fromParent\n    console.log(location.hash)\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("子页面向父级页面传递数据:")]),s._v(" "),e("p",[s._v("Child:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  window.parent.location.href = 'http://localhost:3000/index.html' + '#' + 'fromChild'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Parent:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  window.onhashchange = function () {\n    // #fromChild\n    console.log(location.hash)\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"window-name-跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-name-跨域"}},[s._v("#")]),s._v(" window.name 跨域")]),s._v(" "),e("p",[s._v("子页面将数据保存到 window.name, 然后 改变 location 为父页面同源的一个页面，父页面就可以通过获取子页面的 name 拿到该值。")]),s._v(" "),e("p",[s._v("Child:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  window.name = 'fromChild'\n  location = 'http://localhost:3000/index.html'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Parent:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  child.onload = function () {\n    console.log(this.contentWindow.name)\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"postmessage-跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postmessage-跨域"}},[s._v("#")]),s._v(" postMessage 跨域")]),s._v(" "),e("p",[s._v("父页面向子页面传递信息,子页面拿到信息后又向父级页面传递信息。")]),s._v(" "),e("p",[s._v("Parent:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  child.onload = function () {\n    // 第一个参数为传递的数据，第二个参数为你要发送的源。子页面的源。\n    this.contentWindow.postMessage('form parent', 'http://localhost:3001')\n  }\n  window.addEventListener('message', (e) => {\n    // http://localhost:3001\n    console.log(e.origin)\n    // 'from child'\n    console.log(e.data)\n  })\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("Child:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  window.addEventListener('message', (e) => {\n    // 调用 postMessage 的窗体的源, http://localhost:3000\n    console.log(e.origin)\n    // 调用 postMessage 的 window 对象\n    console.log(e.source)\n    // 传过来的数据, form parent\n    console.log(e.data)\n    e.source.postMessage('from child', 'http://localhost:3000')\n  })\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);