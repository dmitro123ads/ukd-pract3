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
        


let ans = Number(prompt("введіть p"));
let n = String(1);
do{

    ans = ans - 1;
    n = String(n + n);
    
}while(ans > 0)
console.log(n)