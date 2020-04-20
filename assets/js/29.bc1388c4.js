(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{247:function(s,n,a){"use strict";a.r(n);var e=a(17),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"九、深入理解防抖和节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、深入理解防抖和节流"}},[s._v("#")]),s._v(" 九、深入理解防抖和节流")]),s._v(" "),a("h2",{attrs:{id:"防抖-（debounce）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖-（debounce）"}},[s._v("#")]),s._v(" 防抖 （debounce）")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("在 N 秒后执行函数的回调，如果在这期间函数如果再次被调用，那么计时器将重新计时。\n")])])])]),s._v(" "),a("p",[s._v("简单来说，就是在设定的时间内如果一直调用某个函数，该函数永远不会执行，除非函数调用间隔时间大于设定的时间。")]),s._v(" "),a("p",[s._v("一个场景，页面上有个 input 输入框，可以根据用户输入去拿远程数据用于快速搜索：")]),s._v(" "),a("p",[s._v("Js:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  function getData (value) { console.log(value) }\n  let ip = document.getElementById('input')\n  ip.addEventListener('keyup', (e) => {\n    getData(e.target.value)\n  }, false)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里用 getData 模拟远程 ajax 操作。")]),s._v(" "),a("p",[s._v("用户每输入一次都要请求一次接口，会造成资源的浪费，理论上来说我们只要等到用户输入完成之后再请求是最好的。")]),s._v(" "),a("p",[s._v("但是我们也不知道用户输入到哪才算完成。")]),s._v(" "),a("p",[s._v("但我们可以设定一个时间间隔，如果相邻两次输入时间间隔小于某个值就不会发起请求。这样是不是就可以减少请求次数了呢。")]),s._v(" "),a("h3",{attrs:{id:"延迟执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延迟执行"}},[s._v("#")]),s._v(" 延迟执行")]),s._v(" "),a("p",[s._v("延迟执行的意思是第一次调用不会执行，连续多次调用的话只执行最后一次。")]),s._v(" "),a("p",[s._v("首先为了实现以上功能，debounce 函数可以是一个功能性函数，类似于 bind。并且要传入一个待节流的函数和一个延迟时间，每次调用目标函数的时候会判断内部的定时器，如果存在的话就清除定时器并重新计时。")]),s._v(" "),a("p",[a("b",[s._v("延迟执行的 debounce 函数：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  // fn，待处理函数，delay，等待时间\n  function debounce (fn, delay) {\n    let timer\n    return function () {\n      // 缓存 this && 参数\n      let _this = this\n      let args = arguments\n\n      // 存在计时器，清除并重新计时\n      if (timer) clearTimeout(timer)\n      timer = setTimeout(() => fn.apply(_this, args), delay)\n    }\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("使用方式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  function getData (value) { console.log(value) }\n  let ip = document.getElementById('input')\n  let debounceData = debounce(getData, 3000)\n  ip.addEventListener('keyup', (e) => {\n    debounceData(e.target.value)\n  }, false)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("使用方式略微有点不同，利用 debounce 函数创建新的函数，该函数内部保存了 timer 的闭包。可以给这个新函数传参，该参数会被透传到目标函数。")]),s._v(" "),a("p",[s._v("延迟执行的小例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let print = debounce(console.log, 0)\n\nprint(1)\nprint(2)\nprint(3)\nprint(4)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("因为是延迟执行，函数只会执行最后一次 4。")]),s._v(" "),a("h3",{attrs:{id:"立即执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#立即执行"}},[s._v("#")]),s._v(" 立即执行")]),s._v(" "),a("p",[s._v("如果我们希望用户第一次输入的时候就开始执行，连续多次调用的话只会执行第一次要如何做呢。")]),s._v(" "),a("p",[s._v("借助延迟执行的思路我们要多创建一个变量来判断本次是否可以执行。")]),s._v(" "),a("p",[a("b",[s._v("立即执行的 debounce 函数：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  function debounce (fn, delay) {\n    let timer\n    return function () {\n      let _this = this\n      let args = arguments\n\n      if (timer) clearTimeout(timer)\n\n      // 如果 timer 不存在的话证明时间间隔已经超过可以执行\n      callNow = !timer\n      // delay 之后 timer 置为空\n      timer = setTimeout(() => timer = null, delay)\n      if (callNow) fn.apply(_this, args)\n    }\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("调用方式和延迟执行的函数调用一致。")]),s._v(" "),a("p",[s._v("立即执行的小例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let print = debounce(console.log, 0)\n\nprint(1)\nprint(2)\nprint(3)\nprint(4)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("因为是延迟执行，所以函数只会执行第一次 1。")]),s._v(" "),a("h3",{attrs:{id:"综合版本的防抖函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#综合版本的防抖函数"}},[s._v("#")]),s._v(" 综合版本的防抖函数")]),s._v(" "),a("p",[s._v("如下，增加一个参数就行啦。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  /*\n  * fn 目标函数\n  * delay 间隔时间\n  * immediate 是否立即执行\n  */\n  function debounce (fn, delay,immediate = false ) {\n    let timer\n    return function () {\n      // 缓存 this 和传参，保持目标函数调用\n      let _this = this\n      let args = arguments\n\n      // 如果间隔时间小于设定时间，重新计时\n      if (timer) clearTimeout(timer)\n\n      // 立即执行\n      if (immediate) {\n        let callNow = !timer\n        \n        timer = setTimeout(() => timer = null, delay)\n\n        if (callNow) fn.apply(_this, args)\n      } else {\n        // 延迟执行\n        timer = setTimeout(() => fn.apply(_this, args), delay)\n      }\n    }\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"节流-（throttle）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节流-（throttle）"}},[s._v("#")]),s._v(" 节流 （throttle）")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("在 N 秒内某个函数如果被调用多次，只会执行一次，并且不会重新计时。节流会稀释函数的执行。\n")])])])]),s._v(" "),a("p",[s._v("就好比射击游戏，无论你手速多快，射出去的子弹总是以固定的射速行进。")]),s._v(" "),a("p",[s._v("有两种版本，第一种 "),a("b",[s._v("时间戳版: ")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  function throttle (fn, delay) {\n    // 记录上次执行的时间\n    let previous = 0\n\n    return function () {\n      let _this = this\n      let args = arguments\n      // 记录本次调用的时间\n      let now = Date.now()\n\n      if (now - previous >= delay) {\n        fn.apply(_this, args)\n        previous = now\n    }\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("第二种 "),a("b",[s._v("定时器版: ")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  function throttle (fn, delay) {\n    let timer \n    return function () {\n      let _this = this\n      let args = arguments\n\n      if (!timer) {\n        timer = setTimeout(() => {\n          fn.apply(_this, args)\n          timer = null\n        }, delay)\n      }\n    }\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("他们之间的区别是：")]),s._v(" "),a("p",[s._v("使用时间戳实现的节流函数会在第一次触发事件时立即执行，以后每过 delay 秒之后才执行一次，并且最后一次触发事件不会被执行；而定时器实现的节流函数在第一次触发时不会执行，而是在 delay 秒之后才执行，当最后一次停止触发后，还会再执行一次函数。")]),s._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("p",[s._v("防抖一般用于限制用户输入、搜索次数，减轻资源压力。或者对 window.resize 的调用做出限制。")]),s._v(" "),a("p",[s._v("节流一般用于按钮，防止重复点击，保持在某个时间段内只能调用一次。或者是监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断。")])])}),[],!1,null,null,null);n.default=t.exports}}]);