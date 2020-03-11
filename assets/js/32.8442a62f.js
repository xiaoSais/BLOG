(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{239:function(t,a,e){"use strict";e.r(a);var s=e(17),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"四、初识微信小程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、初识微信小程序"}},[t._v("#")]),t._v(" 四、初识微信小程序")]),t._v(" "),e("h2",{attrs:{id:"页面调试（自定义编译配置）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面调试（自定义编译配置）"}},[t._v("#")]),t._v(" 页面调试（自定义编译配置）")]),t._v(" "),e("h3",{attrs:{id:"开发者工具设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发者工具设置"}},[t._v("#")]),t._v(" 开发者工具设置")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("开发者工具 =》 编译=》添加编译模式（设置完成项目根目录下project.config.json 相应发生改变）\n模式名称: 团进度 //调试的页面名字\n启动页面：pages/groupGuide/groupGuide //调试的页面路径,具体到页面文件夹\n启动参数：groupId=90 //需要向该页面传递的参数\n进入场景： //可以选择不同的调试场景\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"代码配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码配置"}},[t._v("#")]),t._v(" 代码配置")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//project.config.json\n{\n\t"conditions": {\n\t\t"miniprogram"：{\n\t\t\t"list": {\n\t\t\t\t{\n\t\t\t\t\t"id": 0, //对应在自定义编译列表中的顺序\n\t\t\t\t\t"name": "团进度", //对应工具设置中的模式名称\n\t\t\t\t\t"pathNmae": "pages/groupGuide/groupGuide"， //对应启动页面\n\t\t\t\t\t"query": "goupId=90"， //对应启动参数\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("h2",{attrs:{id:"微信小程序生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序生命周期"}},[t._v("#")]),t._v(" 微信小程序生命周期")]),t._v(" "),e("p",[t._v("一个小程序的执行顺序总是先执行App.js -》 某个页面")]),t._v(" "),e("ul",[e("li",[t._v("App.js （全局配置）\n"),e("ul",[e("li",[t._v("onLaunch  //小程序初始化，触发一次")]),t._v(" "),e("li",[t._v("onShow //小程序启动时触发")]),t._v(" "),e("li",[t._v("onHide //同页面")]),t._v(" "),e("li",[t._v("onError //页面发生错误时候触发")]),t._v(" "),e("li",[t._v("onPageNotFound //页面不存在时触发")])])]),t._v(" "),e("li",[t._v("页面\n"),e("ul",[e("li",[t._v("onLoad  //页面加载时触发，一般用来获取跳转参数")]),t._v(" "),e("li",[t._v("onShow //页面切入前台|页面显示")]),t._v(" "),e("li",[t._v("onReady //页面加载完成，可以与视图层进行交互，类似于Vue的created()")]),t._v(" "),e("li",[t._v("onHide //页面切入后台 | 页面隐藏，例如切换tab")]),t._v(" "),e("li",[t._v("onUnload //页面跳转到其他页面中触发")])])])]),t._v(" "),e("h2",{attrs:{id:"模板消息（消息推送）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板消息（消息推送）"}},[t._v("#")]),t._v(" 模板消息（消息推送）")]),t._v(" "),e("p",[t._v("服务消息推送：（1）表单提交 =》 formId，（2）支付 =》 prepay_id")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//test.wxml\n<form bindsubmit="handleSubmitInfo" class="form-wrap" report-submit=\'true\'>\n\t<button form-type="submit" />\n</form>\n \n//test.js\nhandleSubmitInfo: function(param) {\n\tconsole.log(param.detail.formId)\n\t//将formId发送到后台来确定是否发送模板消息\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("流程：前端button绑定表单的submit事件 =》 事件处理回调获取formId发送到后台 => 后台根据前台传的formId和tempalte_id决定是否发送以发送什么样的模板消息。")]),t._v(" "),e("h2",{attrs:{id:"自定义组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件"}},[t._v("#")]),t._v(" 自定义组件")]),t._v(" "),e("p",[t._v("在页面对应的json页面直接引入之后，在页面的wxml里直接使用，data通过绑定当前页面数据传递到子组件，注意组件的prop数据传递书写方式")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//test.wxml\n<view>\n\t<base-layout data="dataA"/>\n</view>\n \n//test.json\n{\n\t"usingComponents": { "basic-layout": "../../component/basicLayout/basicLayout"}\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h2",{attrs:{id:"小程序跳转类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序跳转类"}},[t._v("#")]),t._v(" 小程序跳转类")]),t._v(" "),e("p",[t._v("跳转到该小程序其他页面（页面在app.json中已经定义）")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("通过navigator标签控制跳转到其他页面")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//url为该小程序的页面路由  \n<navigator url="/page/navigate/navigate?title=navigate" open-type="navigate" hover-class="navigator-hover">跳转到新页面</navigator>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("通过Js控制跳转")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//和上面这那种方式是等效的，其中通过js控制有页面跳转成功/失败的回调，通过wxml控制则没有\nwx.navigateTo({\n  url: 'test?id=1'\n}， success() => {}, fail() => {})\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])])]),t._v(" "),e("p",[t._v("跳转到其他小程序")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("通过navigator标签控制跳转到其他绑定的小程序")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//其中open-type属性值必须为navigate, app-id为跳转的小程序appId（必填），extra-data为传递给小程序的参数\n<navigator target="miniProgram" open-type="navigate" app-id="" path="" extra-data="" version="release" bindsucccess="跳转成功回调" bindfail="跳转失败回调" >打开绑定的小程序</navigator>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("通过Js控制跳转到小程序")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//参数说明同navigator标签，本身这两种方式没有区别\nwx.navigateToMiniProgram({\n    appId: '',\n    path: 'page/index/index?id=123',\n    extraData: {\n      foo: 'bar'\n    },\n    envVersion: 'develop',\n    success(res) {\n    // 打开成功\n    }\n})\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])])])]),t._v(" "),e("p",[t._v("跳转到tabBar（在页面的json中配置过tab）")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("通过标签跳转")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//对应的open-type="switchTab"\n<navigator url="/page/navigate/navigate?title=navigate" open-type= "switchTab" hover-class="navigator-hover">跳转到新页面</navigator>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("通过Js跳转")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//page.json中配置tabBar\n{\n  "tabBar": {\n    "list": [{\n      "pagePath": "index",\n      "text": "首页"\n    },{\n      "pagePath": "other",\n      "text": "其他"\n    }]\n  }\n}\nwx.switchTab({\n  url: \'/index\'\n})\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])])])]),t._v(" "),e("p",[t._v("其他")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("路由方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("页面栈表现")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Js跳转")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("open-type的值（标签跳转）")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("触发的生命周期回调")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("初始化")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新页面入栈")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("onLoad、onShow、onReady")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("打开新页面")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新页面入栈")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("wx.navigateTo()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("navigate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("onHide")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保留当前页面，跳转到新页面")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面重定向")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当前页面出栈，新页面入栈")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("wx.redirectTo()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("redirectTo")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("onUnload")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("关闭当前页，打开新页面，当前页面不入栈")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面返回")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("页面不断出栈，直到到达目标页面")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("wx.navigateBack()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("navigateBack")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("onUnload")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("关闭当前页面，然后返回一级或多级页面")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("重启动")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("页面全部出栈，只留下新的页面")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("wx.reLaunch()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("reLaunch")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("onUnload")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("关闭所有页面，打开到应用内的某个页面")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);