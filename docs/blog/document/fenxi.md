# 五、JS循环语句中的性能分析

## 描述
循环相同的次数，执行同一个操作，（这里都是简单赋值操作）测试每一种循环所需要的时间尽量不要用for…in来循环数组，因为在数组中自定义的属性，也会在循环中遍历到，而且性能极差，用for…of本身是不能直接遍历对象的，需要使用Object.keys()方法将对象属性转化成可循环列表，for…of来循环数组的时候，好像只能获取到相应的key无法获取到Index，这个问题很尴尬。
## 种类

### 数组

```
for
while
forach
for…in
for…of
```
### 对象
```
for…in
for…of
```

## 结论

* 对于数组来说无论遍历的数量级大小，性能总是以下排名，其中前三个在千万级的循环次数中，差别不是很大:

  ::: tip
    for > for..of > while > forach > for…in,
  ::: 
  

* 对于对象来说，性能结果如下：

  ::: tip
    for…of > for…in
  ::: 

## 附录

附在10000000次循环中，各种循环所需要消耗的时间为:
  * 数组：
    * for语句循环所需的时间为：20ms
    * for…of 语句循环所需的时间为：26ms
    * while语句循环所需的时间为：26ms
    * forEach语句循环所需的时间为：84ms
    * for…in 语句循环所需的时间为(不推荐)：1879ms
  * 对象：
    * for…in 语句循环所需的时间为：1595ms
    * for…of 语句循环所需的时间为：1622ms