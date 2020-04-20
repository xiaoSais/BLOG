(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{245:function(a,s,n){"use strict";n.r(s);var e=n(17),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"十、代码之如何实现？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十、代码之如何实现？"}},[a._v("#")]),a._v(" 十、代码之如何实现？")]),a._v(" "),n("h2",{attrs:{id:"_1、如何实现数组的扁平化？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何实现数组的扁平化？"}},[a._v("#")]),a._v(" 1、如何实现数组的扁平化？")]),a._v(" "),n("p",[a._v("什么是数组扁平化？")]),a._v(" "),n("p",[a._v("假如说一个数组是这样的。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  let arr = [1,2,3,4,[4,5], [3,4,[4,5]]]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("也就是数组里面嵌套数组，可能有很多层。")]),a._v(" "),n("p",[a._v("数组扁平化的意思就是将该数组转化成：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  let brr = [1,2,3,4,4,5,3,4,4,5]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("当然，如果你实现的比较好的话，可以传一个扁平化深度的这样一个参数。")]),a._v(" "),n("p",[a._v("扁平化一层就是：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  let crr = [1,2,3,4,4,5,3,4,[4,5]]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("扁平化两层就是 brr 那种形式了。一般默认情况下说数组扁平化就是指完全扁平化。也就是无论嵌套层数多深，都拉平成一维数组。")]),a._v(" "),n("h3",{attrs:{id:"es6-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6-实现"}},[a._v("#")]),a._v(" ES6 实现")]),a._v(" "),n("p",[a._v("ES6 提供了一个新的 api。Arry.prototype.flat() 用于数组的扁平化，可以传一个参数，指的是拉平多少层。如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function flat(arr, num = 1) {\n    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error ('不是数组')\n    else return arr.flat(num)\n  }\n  let arr = [1,2,3,4,[4,5], [3,4,[4,5]]]\n  // [1,2,3,4,4,5,3,4,[4,5]]\n  console.log(flat(arr))\n  // [1,2,3,4,4,5,3,4,4,5]\n  console.log(flat(arr, Infinity))\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("h3",{attrs:{id:"递归实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归实现"}},[a._v("#")]),a._v(" 递归实现")]),a._v(" "),n("p",[a._v("使用递归判断否元素为数组，为数组的话递归拉平。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function flat(arr, res) {\n    if (!Array.isArray(arr)) return\n    else arr.forEach(i => Array.isArray(i) ? flat(i, res) : res.push(i))\n    return res\n  }\n  // [1,2,3,4,4,5,3,4,4,5]\n  console.log(flat([1,2,3,4,[4,5], [3,4,[4,5]]], []))\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h3",{attrs:{id:"使用-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-实现"}},[a._v("#")]),a._v(" 使用 ... 实现")]),a._v(" "),n("p",[a._v("用 ... 参数将数组一层层展开，直到原数组的每个元素都不为数组")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function flat (arr) {\n    while(arr.some(i => Array.isArray(i))) {\n      arr = [].concat(...arr)\n    }\n    return arr\n  }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("它会修改原数组")]),a._v(" "),n("h3",{attrs:{id:"使用-reduce-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-reduce-实现"}},[a._v("#")]),a._v(" 使用 reduce 实现")]),a._v(" "),n("p",[a._v("reduce 只是将写法简化了一点，本质上还是递归的写法")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  const flat = arr => arr.reduce((prev, next) => {\n    return Array.isArray(next) ? prev.concat(flat(next)) : prev.concat(next)\n  }, [])\n  // [1,2,3,4,4,5,3,4,4,5]\n  console.log(flat([1,2,3,4,[4,5], [3,4,[4,5]]]))\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h2",{attrs:{id:"_2、如何实现数组的随机排序？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何实现数组的随机排序？"}},[a._v("#")]),a._v(" 2、如何实现数组的随机排序？")]),a._v(" "),n("h3",{attrs:{id:"使用-array-sort-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-array-sort-方法"}},[a._v("#")]),a._v(" 使用 array.sort() 方法")]),a._v(" "),n("p",[a._v("sort() 方法会对比相邻元素的大小，这里用了 Math.random() 方法，随机置换相邻元素的位置。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function randomSort(arr) {\n    arr.sort(() => Math.random() > .5 ? 1 : -1)\n    return arr\n  }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("因为这是对比相邻元素的大小，所以还不够随机。")]),a._v(" "),n("h3",{attrs:{id:"随机索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#随机索引"}},[a._v("#")]),a._v(" 随机索引")]),a._v(" "),n("p",[a._v("不断去随机删除 arr 里面的元素，并添加到结果数组里，直到数组的长度为 0。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function randomSort(arr) {\n    let res = []\n    while(arr.length) {\n      let idx = Math.floor(arr.length * Math.random())\n      res.push(...arr.splice(idx, 1))\n    }\n    return res\n  }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("h3",{attrs:{id:"洗牌算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#洗牌算法"}},[a._v("#")]),a._v(" 洗牌算法")]),a._v(" "),n("p",[a._v("针对数组中的每一个元素，该元素与之后的随机位置上的一个元素进行位置对换。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function randomSort (arr) {\n    for (var i = 0; i < arr.length; i++) {\n      let idx = Math.floor(Math.random() * (arr.length - i)) + i\n      let temp = arr[i]\n      arr[i] = arr[idx]\n      arr[idx] = temp\n    }\n    return arr\n  }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("h2",{attrs:{id:"_3、js-如何创建一个对象？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、js-如何创建一个对象？"}},[a._v("#")]),a._v(" 3、JS 如何创建一个对象？")]),a._v(" "),n("p",[a._v("这个创建对象不是创建 JS 的对象数据类型。而是创建实例的方式。")]),a._v(" "),n("h3",{attrs:{id:"工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[a._v("#")]),a._v(" 工厂模式")]),a._v(" "),n("p",[a._v("工厂模式就是类似于一个工厂一样，在方法内部创建一个对象，在该对象上定义属性和方法，缺点是无法通过 instanceof 判断该对象由哪个构造函数判断。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function createObj (name, age) {\n    var obj = {}\n    obj.name = name\n    obj.age = age\n    obj.getName = () => alert(obj.name)\n    return obj\n  }\n  let person = createObj ('yy', 23)\n  // yy\n  console.log(person.name) \n  // false\n  console.log(person instanceof createObj)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("h3",{attrs:{id:"构造函数模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数模式"}},[a._v("#")]),a._v(" 构造函数模式")]),a._v(" "),n("p",[a._v("和工厂模式差不多，不过无需内部创建一个对象。属性和方法定义在 this 上，创建对象时用 new 操作符创建。优点是可以通过 instanceof 操作符判断创建的对象所属的构造函数。缺点是构造函数定义的函数无法做到共用。每次创建一个对象都要在该对象上定义一个函数。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function CreateObj (name, age) {\n    this.name = name\n    this.age = age\n    this.getName = function () {\n      alert(this.name)\n    }\n  }\n  let p = new CreateObj('yy', 23)\n  // yy\n  p.getName()\n  // yy\n  console.log(p.name)\n  // 23\n  console.log(p.age)\n  // true\n  console.log(p instanceof CreateObj)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])]),n("h3",{attrs:{id:"原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[a._v("#")]),a._v(" 原型模式")]),a._v(" "),n("p",[a._v("每个函数都有一个 .prototype 属性，它指该函数的原型，同时该原型对象有个 .constructor 属性指向该构造函数。该函数的实例有个 "),n("em",[a._v("proto")]),a._v(" 属性指向该原型对象。当获取某个对象的属性值的时候，先去实例上去找，找不到的话会去该原型对象上去寻找。缺点是所有的属性和方法都是共用的，无法实现对象的特殊化。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function CreateObjProto () {}\n  CreateObjProto.prototype.name = 'yy'\n  CreateObjProto.prototype.age = '23'\n  CreateObjProto.prototype.getName = function () { alert(this.name) }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("更简洁的原型语法")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function CreateObjProto () {}\n  CreateObjProto.prototype = {\n    constructor: CreateObjProto,\n    name: 'lucy',\n    age: '23',\n    getName: function () { alert(this.name) }\n  }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h3",{attrs:{id:"组合模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合模式"}},[a._v("#")]),a._v(" 组合模式")]),a._v(" "),n("p",[a._v("需要共享的属性定义在原型上，否则通过构造函数创建。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function CreateObj (name, age) {\n    this.name = name\n    this.age = age\n  }\n  CreateObj.prototype.getName = function () { alert(this.name) }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h3",{attrs:{id:"动态原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态原型模式"}},[a._v("#")]),a._v(" 动态原型模式")]),a._v(" "),n("p",[a._v("主要是为了解决组合模式看起来不够封装的写法。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function CreateObj (name, age) {\n    this.name = name\n    this.age = age\n    if (typeof CreateObj.prototype.getName !== 'function') {\n      CreateObj.prototype.getName = function () { alert(this.name)  }\n    }\n  } \n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h3",{attrs:{id:"委托构造模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#委托构造模式"}},[a._v("#")]),a._v(" 委托构造模式")]),a._v(" "),n("p",[a._v("封装私有方法。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("  function CreateObj (name, age) {\n    let obj = {}\n    obj.age = age\n    obj.getName = function () {\n      alert(name)\n    }\n    return obj\n  }\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("p",[a._v("在这个方法中，只有内部的 getName 方法才能访问到传进来的 name 属性。")])])}),[],!1,null,null,null);s.default=t.exports}}]);