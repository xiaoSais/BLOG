(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{392:function(s,a,n){"use strict";n.r(a);var e=n(25),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"十、代码之如何实现？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十、代码之如何实现？"}},[s._v("#")]),s._v(" 十、代码之如何实现？")]),s._v(" "),n("h2",{attrs:{id:"_1、如何实现数组的扁平化？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何实现数组的扁平化？"}},[s._v("#")]),s._v(" 1、如何实现数组的扁平化？")]),s._v(" "),n("p",[s._v("什么是数组扁平化？")]),s._v(" "),n("p",[s._v("假如说一个数组是这样的。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  let arr = [1,2,3,4,[4,5], [3,4,[4,5]]]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("也就是数组里面嵌套数组，可能有很多层。")]),s._v(" "),n("p",[s._v("数组扁平化的意思就是将该数组转化成：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  let brr = [1,2,3,4,4,5,3,4,4,5]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("当然，如果你实现的比较好的话，可以传一个扁平化深度的这样一个参数。")]),s._v(" "),n("p",[s._v("扁平化一层就是：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  let crr = [1,2,3,4,4,5,3,4,[4,5]]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("扁平化两层就是 brr 那种形式了。一般默认情况下说数组扁平化就是指完全扁平化。也就是无论嵌套层数多深，都拉平成一维数组。")]),s._v(" "),n("h3",{attrs:{id:"es6-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6-实现"}},[s._v("#")]),s._v(" ES6 实现")]),s._v(" "),n("p",[s._v("ES6 提供了一个新的 api。Arry.prototype.flat() 用于数组的扁平化，可以传一个参数，指的是拉平多少层。如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function flat(arr, num = 1) {\n    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error ('不是数组')\n    else return arr.flat(num)\n  }\n  let arr = [1,2,3,4,[4,5], [3,4,[4,5]]]\n  // [1,2,3,4,4,5,3,4,[4,5]]\n  console.log(flat(arr))\n  // [1,2,3,4,4,5,3,4,4,5]\n  console.log(flat(arr, Infinity))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"递归实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归实现"}},[s._v("#")]),s._v(" 递归实现")]),s._v(" "),n("p",[s._v("使用递归判断否元素为数组，为数组的话递归拉平。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function flat(arr, res) {\n    if (!Array.isArray(arr)) return\n    else arr.forEach(i => Array.isArray(i) ? flat(i, res) : res.push(i))\n    return res\n  }\n  // [1,2,3,4,4,5,3,4,4,5]\n  console.log(flat([1,2,3,4,[4,5], [3,4,[4,5]]], []))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"使用-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-实现"}},[s._v("#")]),s._v(" 使用 ... 实现")]),s._v(" "),n("p",[s._v("用 ... 参数将数组一层层展开，直到原数组的每个元素都不为数组")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function flat (arr) {\n    while(arr.some(i => Array.isArray(i))) {\n      arr = [].concat(...arr)\n    }\n    return arr\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("它会修改原数组")]),s._v(" "),n("h3",{attrs:{id:"使用-reduce-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-reduce-实现"}},[s._v("#")]),s._v(" 使用 reduce 实现")]),s._v(" "),n("p",[s._v("reduce 只是将写法简化了一点，本质上还是递归的写法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  const flat = arr => arr.reduce((prev, next) => {\n    return Array.isArray(next) ? prev.concat(flat(next)) : prev.concat(next)\n  }, [])\n  // [1,2,3,4,4,5,3,4,4,5]\n  console.log(flat([1,2,3,4,[4,5], [3,4,[4,5]]]))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_2、如何实现数组的随机排序？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何实现数组的随机排序？"}},[s._v("#")]),s._v(" 2、如何实现数组的随机排序？")]),s._v(" "),n("h3",{attrs:{id:"使用-array-sort-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-array-sort-方法"}},[s._v("#")]),s._v(" 使用 array.sort() 方法")]),s._v(" "),n("p",[s._v("sort() 方法会对比相邻元素的大小，这里用了 Math.random() 方法，随机置换相邻元素的位置。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function randomSort(arr) {\n    arr.sort(() => Math.random() > .5 ? 1 : -1)\n    return arr\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("因为这是对比相邻元素的大小，所以还不够随机。")]),s._v(" "),n("h3",{attrs:{id:"随机索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#随机索引"}},[s._v("#")]),s._v(" 随机索引")]),s._v(" "),n("p",[s._v("不断去随机删除 arr 里面的元素，并添加到结果数组里，直到数组的长度为 0。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function randomSort(arr) {\n    let res = []\n    while(arr.length) {\n      let idx = Math.floor(arr.length * Math.random())\n      res.push(...arr.splice(idx, 1))\n    }\n    return res\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"洗牌算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#洗牌算法"}},[s._v("#")]),s._v(" 洗牌算法")]),s._v(" "),n("p",[s._v("针对数组中的每一个元素，该元素与之后的随机位置上的一个元素进行位置对换。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function randomSort (arr) {\n    for (var i = 0; i < arr.length; i++) {\n      let idx = Math.floor(Math.random() * (arr.length - i)) + i\n      let temp = arr[i]\n      arr[i] = arr[idx]\n      arr[idx] = temp\n    }\n    return arr\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_3、js-如何创建一个对象？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、js-如何创建一个对象？"}},[s._v("#")]),s._v(" 3、JS 如何创建一个对象？")]),s._v(" "),n("p",[s._v("这个创建对象不是创建 JS 的对象数据类型。而是创建实例的方式。")]),s._v(" "),n("h3",{attrs:{id:"工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[s._v("#")]),s._v(" 工厂模式")]),s._v(" "),n("p",[s._v("工厂模式就是类似于一个工厂一样，在方法内部创建一个对象，在该对象上定义属性和方法，缺点是无法通过 instanceof 判断该对象由哪个构造函数判断。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function createObj (name, age) {\n    var obj = {}\n    obj.name = name\n    obj.age = age\n    obj.getName = () => alert(obj.name)\n    return obj\n  }\n  let person = createObj ('yy', 23)\n  // yy\n  console.log(person.name) \n  // false\n  console.log(person instanceof createObj)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"构造函数模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数模式"}},[s._v("#")]),s._v(" 构造函数模式")]),s._v(" "),n("p",[s._v("和工厂模式差不多，不过无需内部创建一个对象。属性和方法定义在 this 上，创建对象时用 new 操作符创建。优点是可以通过 instanceof 操作符判断创建的对象所属的构造函数。缺点是构造函数定义的函数无法做到共用。每次创建一个对象都要在该对象上定义一个函数。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function CreateObj (name, age) {\n    this.name = name\n    this.age = age\n    this.getName = function () {\n      alert(this.name)\n    }\n  }\n  let p = new CreateObj('yy', 23)\n  // yy\n  p.getName()\n  // yy\n  console.log(p.name)\n  // 23\n  console.log(p.age)\n  // true\n  console.log(p instanceof CreateObj)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[s._v("#")]),s._v(" 原型模式")]),s._v(" "),n("p",[s._v("每个函数都有一个 .prototype 属性，它指该函数的原型，同时该原型对象有个 .constructor 属性指向该构造函数。该函数的实例有个 "),n("em",[s._v("proto")]),s._v(" 属性指向该原型对象。当获取某个对象的属性值的时候，先去实例上去找，找不到的话会去该原型对象上去寻找。缺点是所有的属性和方法都是共用的，无法实现对象的特殊化。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function CreateObjProto () {}\n  CreateObjProto.prototype.name = 'yy'\n  CreateObjProto.prototype.age = '23'\n  CreateObjProto.prototype.getName = function () { alert(this.name) }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("更简洁的原型语法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function CreateObjProto () {}\n  CreateObjProto.prototype = {\n    constructor: CreateObjProto,\n    name: 'lucy',\n    age: '23',\n    getName: function () { alert(this.name) }\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"组合模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合模式"}},[s._v("#")]),s._v(" 组合模式")]),s._v(" "),n("p",[s._v("需要共享的属性定义在原型上，否则通过构造函数创建。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function CreateObj (name, age) {\n    this.name = name\n    this.age = age\n  }\n  CreateObj.prototype.getName = function () { alert(this.name) }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"动态原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态原型模式"}},[s._v("#")]),s._v(" 动态原型模式")]),s._v(" "),n("p",[s._v("主要是为了解决组合模式看起来不够封装的写法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function CreateObj (name, age) {\n    this.name = name\n    this.age = age\n    if (typeof CreateObj.prototype.getName !== 'function') {\n      CreateObj.prototype.getName = function () { alert(this.name)  }\n    }\n  } \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"稳妥构造模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#稳妥构造模式"}},[s._v("#")]),s._v(" 稳妥构造模式")]),s._v(" "),n("p",[s._v("封装私有方法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function CreateObj (name, age) {\n    let obj = {}\n    obj.age = age\n    obj.getName = function () {\n      alert(name)\n    }\n    return obj\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("在这个方法中，只有内部的 getName 方法才能访问到传进来的 name 属性。")]),s._v(" "),n("h2",{attrs:{id:"_4、如何实现继承？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何实现继承？"}},[s._v("#")]),s._v(" 4、如何实现继承？")]),s._v(" "),n("h3",{attrs:{id:"原型链继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型链继承"}},[s._v("#")]),s._v(" 原型链继承")]),s._v(" "),n("p",[s._v("将子类的原型重写，指向父类的一个实例，那么子类的实例不仅拥有了在子类实例定义的方法和属性，还拥有了父类实例以及原型上的方法。通过这种方式实现了继承。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function Parent(name, age) {\n    this.name = name\n    this.age = age\n  }\n  Parent.prototype.getName = function () {\n    return this.name\n  }\n\n  function Child(color) {\n    this.color = color\n  }\n  Child.prototype = new Parent('lucy', 34)\n  Child.prototype.getColor = function () {\n    return this.color\n  }\n  let child = new Child('red')\n  \n  console.log(child)\n  console.log(child.getName())\n  console.log(child.getColor())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("缺点：定义在父类原型上的引用类型的值，会被所有的子类实例所共有。改变其值会影响另外一个。")]),s._v(" "),n("h3",{attrs:{id:"构造函数继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数继承"}},[s._v("#")]),s._v(" 构造函数继承")]),s._v(" "),n("p",[s._v("借用 call 或者 apply，显式的绑定 this 指代的对象。以达到继承的效果。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function Parent(name) {\n    this.name = name\n    this.getName = function (params) {\n      return this.name\n    }\n  }\n\n  function Child(age, name) {\n    this.age = age\n    // 继承属性和方法\n    Parent.call(this, name)\n  }\n\n  let Cl = new Child(23, 'Lucy')\n\n  console.log(Cl)\n\n  console.log(Cl.getName())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("缺点：无法实现函数的复用，每次创建一个对象都要定义 getName 函数。")]),s._v(" "),n("h3",{attrs:{id:"组合继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合继承"}},[s._v("#")]),s._v(" 组合继承")]),s._v(" "),n("p",[s._v("将以上两者的优势结合起来，方法采用原型链继承，属性采用构造函数继承。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function Parent(color) {\n    this.color = color\n  }\n  Parent.prototype.getColor = function () {\n    return this.color\n  }\n\n  function Child(name, color) {\n    this.name = name\n    Parent.call(this, color)\n  }\n\n  Child.prototype = new Parent()\n\n  Child.prototype.constructor = Child\n\n  Child.prototype.getName = function (params) {\n    return this.name\n  }\n\n  let C1 = new Child('Lucy', [2,3,4])\n  let C2 = new Child('Lucy', [1,3,4])\n\n  C1.color.push(5)\n\n  console.log(C1.getColor())\n\n  console.log(C1.getName())\n\n  console.log(C2.getColor())\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"原型式继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型式继承"}},[s._v("#")]),s._v(" 原型式继承")]),s._v(" "),n("p",[s._v("基于现有的对象创建一个类似的对象，无需大张旗鼓的创建构造函数。ES5 规范了 Object.create() 方法，它的工作原理就是创建一个类似对象，该对象的 "),n("strong",[s._v("proto")]),s._v(" 指向传入的参数对象。一种写法见下面的 create() 方法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  let Parent = {\n    name: 'Lucy',\n    getName: function () {\n      return this.name\n    }\n  }\n\n  // Child.__proto__ = Parent\n  let Child = Object.create(Parent)\n  console.log(Child.getName())\n\n  function create(Obj) {\n    let f = new Function()\n    f.prototype = Obj\n    return new f()\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("缺点\b：引用类型的值会被公用，修改值会影响创建的其他对象。")]),s._v(" "),n("h3",{attrs:{id:"寄生式继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#寄生式继承"}},[s._v("#")]),s._v(" 寄生式继承")]),s._v(" "),n("p",[s._v("类似于原型式继承，不过会增强该对象。新创建的对象不仅具有原来对象的属性和方法，还有新定义的 getName 方法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function Child (parent) {\n    let O = Object.create(parent)\n    O.getName = function () {\n      return this.name\n    }\n    return O\n  }\n\n  let cl = new Child({name: 'xxxxx' })\n\n  console.log(cl.getName())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"寄生组合式继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#寄生组合式继承"}},[s._v("#")]),s._v(" 寄生组合式继承")]),s._v(" "),n("p",[s._v("原型链继承的时，摒弃将调用父类构造函数创建对象的方式，而是采用 Object.create() 的形式。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  function Parent (name) {\n    this.name = name\n  }\n  Parent.prototype.getName = function () {\n    return this.name\n  }\n\n  function Child (age, name) {\n    this.age = age\n    // 继承属性\n    Parent.call(this, name)\n  }\n\n  Child.prototype = Object.create(Parent.prototype)\n  Child.prototype.constructor = Child\n\n  Child.prototype.getAge = function () {\n    return this.age\n  }\n\n  let cl = new Child(23, 'Lucy')\n\n  console.log(cl.getName())\n  console.log(cl.getAge())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("优点是只需要调用一次构造函数，还能避免在子类原型上创建多余的其他属性和值。")])])}),[],!1,null,null,null);a.default=t.exports}}]);