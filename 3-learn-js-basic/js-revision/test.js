// let hhz;
// hhz="hein htet zan";
// console.log(hhz);

// const num =016 / 2;//octal number
// console.log(num);

// const x = [];
// const y = [];

// console.log(x === y);

// let a = 5;
// let b =a;
// console.log(b);
// a=10;
// console.log(b);

// let a =['a'];
// const b =a;
// console.log(b);

// a[1]="aa";
// a=[];
// console.log(b);



// const arr=[];
// arr[0]="a";
// arr[1]="b";
// arr[2]="c";
// arr[26]="z";
// console.log(arr);


// const arr=[];
// console.log(arr ? true : false); 

// const obj ={};

// obj.a="a";
// obj.b="b";

// console.log(obj);
// console.log("hein"-"htet");
// console.log(run(1,2));

// function run(){
//     console.log('I m a');
//     console.log('I m b');
//     console.log('I m c');
//     return "i am run";
// }
// function expression

// const result = function(x,y){
//     console.log(x);
//     console.log(y);

//     console.log('i am fun expression');
//     return x+y;
// }
 
// console.log (result(1,2));

// (function(){
//     console.log('I am IIFE');
// })();

// for(let i=(function(){
//     console.log('i am 1st statement');
//     return 1;
// })();(function(){
//     console.log('i am 2nd statement');
//     let r= i<10;
//     console.log(r);
//     return r;
// })();i++){
//     console.log(i,"loop");
// }

// console.log(` ${
//    (function(){
//     console.log('IIFE');
//     return 'hello';
//    })()
// } world`);

// let x =5;

// function run(){
//     console.log(x);
// }

// run();
// console.log(x);

// const obj ={
//     a : "a",
//     b : 2,
//     c(){
//         console.log(this);
//     },
//     d :function(){
//         console.log(this);
//     }
// }

// console.log(obj.c);

// if(true){
//     console.log('true code blog');
// }else if(){

// }else{
//     console.log("false code blog");
// }

// console.log(true ? "true expression" : "false expression");
// true && console.log(" i am true");

// for(let i =1;i<=10;i++){
//     if( i === 5) continue;
//     console.log(i,"loop");
// }

// console.log(i);
// let i =1;
// while(i<=10) {
//     console.log('while loop',i);
//     i++;
    
// }

// let i =1;
// do{
//     console.log("do while loop",i);
//     i++;
// }while(i<=10)

const fruits =["apple","orange","mango","banana"];

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(x in fruits){
//     console.log(x,fruits[x]);
// }

const obj ={
    a:"a",
    b:"b",
    c:"c",
    d:"d"
}
for (x in obj){
    console.log(x,obj[x]);
}

for(x of obj){
    console.log(x);
}