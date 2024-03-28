var arr = [1,2,3]
// let [a,b,c] = arr
// console.log(a,b,c)
arr=[1,2,3,4,5,6]
// let [a, ,, ...rest]=arr
// console.log(rest)
let arr1 =[4,5,6]
//destructring during function call 
function add(a,b,c){
    return a+b+c
}
console.log(add(...arr1))
//array destructuring into object !
var obj = {...arr1}
// console.log(obj)
//destructuring and value assigning
obj={
    "name":"hello",
    "age":45
}
console.log({...obj,"name":"bharat"})