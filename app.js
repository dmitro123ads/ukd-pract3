//let a = Number(prompt("введіть x"));
//var i = 0;
//var x = 0;
//do{
    
//     x = x + a
//     a = Number(prompt("введіть x"));
//     i = i + 1
//     console.log(x)
// } while ( i != 5);
// console.log(x)

    

// let an = Number(prompt("введіть y"));
// var y = 1;
// do{
//     Number(y = y * an);
//     an = prompt("введіть y");
//     let o = Number(an);
    
//     an = String(an);
//     console.log(y);
// } while ( an !== "end");
// console.log(y)
        


// let ans = Number(prompt("введіть p"));
// let number = 0;
// let sum = 0;
// let i = 0;

// while( i <= ans){
//     sum += (Math.pow(10, i) - 1) / 9 ;
//     i++

// }
// console.log(sum)


let answ = [];
let p =  Number(prompt("введіть 1 число масиву"));
let i = 0;
let result = 0;
do{
    p = Number(p);
    answ.push(p)
    p = prompt("введіть наступне число масиву");
    result += answ[i]
    p = String(p);
    i++
    
} while ( p !== "end");
console.log(answ)
console.log(result)
console.log(result/i)