(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{219:function(t,a,s){"use strict";s.r(a);var _=s(17),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"三、异步io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、异步io"}},[t._v("#")]),t._v(" 三、异步IO")]),t._v(" "),s("p",[t._v("Node 中利用异步远离IO阻塞，同时利用单线程远离多线程的死锁和状态同步等问题。")]),t._v(" "),s("h2",{attrs:{id:"阻塞io和非阻塞io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞io和非阻塞io"}},[t._v("#")]),t._v(" 阻塞IO和非阻塞IO")]),t._v(" "),s("p",[t._v("操作系统对于内核IO只有两种方式阻塞IO和非阻塞IO，阻塞IO的特点是调用会等到操作系统内核完成所有操作后调用才会结束。非阻塞IO调用后会立即返回，此时CPU可以处理其他的事务，性能的提升是非常明显的。")]),t._v(" "),s("p",[t._v("非阻塞IO也有问题，因为立即返回不知道IO操作的结果。为了获取最终的数据，应用程序需要反复调用IO操作来确认是否完成，这种重复判断的操作叫做轮询。")]),t._v(" "),s("p",[t._v("现在的轮询技术主要有以下几种：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("read。 重复调用检查IO的状态来完成数据的获取，在调用过程中CPU一直耗用在等待上。")])]),t._v(" "),s("li",[s("p",[t._v("select。 read的改进，通过检查文件描述符的事件状态来进行判断，它有一个较弱的限制，最多可以同时检查1024个文件描述符。")])]),t._v(" "),s("li",[s("p",[t._v("poll。 select方式的改进，采用链表的方式避免select方式只能同时检查1024个文件描述符的限制，同时它还能避免不必要的检查。但是在文件描述符较多的时候，性能还是十分低下的。")])]),t._v(" "),s("li",[s("p",[t._v("epoll。 在进入轮询的时候如果没有检查到IO事件，CPU将会进入休眠，直到事件将它唤醒。")])])]),t._v(" "),s("p",[t._v("非阻塞IO依然可以看做是一种同步，因为应用程序依然需要等待IO完全返回，等待期间CPU要么处于遍历文件描述符的状态，要么处于休眠的状态。")]),t._v(" "),s("h2",{attrs:{id:"现实中的异步io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现实中的异步io"}},[t._v("#")]),t._v(" 现实中的异步IO")]),t._v(" "),s("p",[t._v("让部分线程进行阻塞IO或者非阻塞IO加轮询技术完成数据的获取，让一个线程进行计算处理，然后通过线程之间的通信将IO数据进行传递，这样就轻松实现了异步IO。")]),t._v(" "),s("h2",{attrs:{id:"node中的异步io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node中的异步io"}},[t._v("#")]),t._v(" Node中的异步IO")]),t._v(" "),s("h3",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),s("p",[t._v("进行启动时会创建while(true)的循环，每个循环执行体被称为一个Tick,每个Tick过程都会询问有没有事件需要处理，如果有的话就取出事件以及对应的回调函数，并执行该回调函数，然后进入下个循环，如果没有就退出流程。")]),t._v(" "),s("h3",{attrs:{id:"观察者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#观察者"}},[t._v("#")]),t._v(" 观察者")]),t._v(" "),s("p",[t._v("每个事件循环中都有一个或者多个观察者，判断是否有事件需要处理的过程就是向这些观察者询问的过程。事件循环是一个典型的生产者/消费者的场景，网络IO和异步请求是生产者生产源源不断的事件，这些事件传递到观察者那里，事件循环从观察者那里取出事件并执行。\n在windows下时间循环基于IOCP创建，在*nix下基于多线程创建。")]),t._v(" "),s("h3",{attrs:{id:"请求对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求对象"}},[t._v("#")]),t._v(" 请求对象")]),t._v(" "),s("p",[t._v("执行Node APi， fs.open() -> Js调用c++核心文件 -> 平台判断 -> libuv -> 两个平台的us_open() 实现。")]),t._v(" "),s("p",[t._v("us_open() 实现里会创建一个请求对象，js层传入的参数和当前方法都会被封装在该请求对象中，同时回调函数也会被挂载到该对象上的一个属性上。")]),t._v(" "),s("p",[t._v("然后系统内核会将该对象推入到线程池里等待执行，Js调用立即返回，不影响主线程的代码执行。")]),t._v(" "),s("p",[t._v("线程的IO操作执行完毕后会把执行的结果挂载到req.result上，然后通知IOCP,告知当前的对象操作已完成。")]),t._v(" "),s("p",[t._v("每次Tick过程中IOCP会检查线程池中是否有执行完的请求，如果存在会将请求对象加入到IO观察者队列中，然后将其当做事件进行处理。")]),t._v(" "),s("p",[t._v("IO观察者的行为就是：取出result作为参数，并执行挂载到该对象的回调函数。")])])}),[],!1,null,null,null);a.default=e.exports}}]);