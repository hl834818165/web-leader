/**
  1. for循环的执行顺序:

    for (语句 A; 语句 B; 语句 C) {
      逻辑 D
    }

    1) 语句A for循环开始之前
    2) 语句B 判断是否满足条件
    3) 逻辑D 运行逻辑代码
    4) 语句C 执行
    重复2-4的步骤 知道 2步条件判断不满足为止
 */
let arr = [1, 5, 6, 7]
/** 写法一 */
for (let i = 0; i < arr.length; i++) {
  console.log('遍历arr数组一', arr[i]);
} //输出 1 5 6 7

/** 写法二 */
let j = 0;
for (; j < arr.length; j++) {
  console.log('遍历arr数组二', arr[j]);
} //输出 1 5 6 7
/** 写法三 */
let x = 0;
for (; x < arr.length; ) {
  console.log('遍历arr数组三', arr[x]);
  x++;
} //输出 1 5 6 7


/**
  2. for-in
    支持对象: 数组、 对象、字符串
    输出结果: index
    1) 能够遍历出构造函数非自身属性
 */
let arrIn = [1, 5, 6, 7]
let objIn = {a: 1, b: 5, c: 6, d: 7}
let strIn = 'strIn'
function Person (obj) {
  this.name = obj.name
  this.sex = obj.sex
  this.age = obj.age
}
let newObj = new Person({name: 'zzz', sex: '男', age: 24})
let newObj1 = new Person({name: 'hhh', sex: '女', age: 23})

// 遍历数组
for (let key in arrIn) {
  console.log(key)
  console.log(arrIn[key])
} // 输出 0 1,    1 5,    2 6,    3 7 

// 遍历对象
for (let key in objIn) {
  console.log(key)
  console.log(objIn[key])
} // 输出 a 1,    b 5,    c 6,    d 7

Person.prototype.h = '123'
for (let key in newObj) {
  console.log(key)
}

// 字符串
for (let key in strIn) {
  console.log('str', key, strIn[key])
}

/**
  3. for-of
    支持对象: 数组、 类数组对象( DOM NodeList对象 )、 字符串、 Map和Set对象
    输出结果: value
    能够使用break、continue和return语句操作
 */
let arrOf = [1, 5, 6, 7]

for (let val of arrIn) {
  console.log(val)
}

function searchArr (arr, target) {
  for (let val of arrOf) {
    console.log(val)
    if (val == target) {
      return val
    }
  }
}
searchArr(arrOf, 5)