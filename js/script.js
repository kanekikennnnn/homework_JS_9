'use strict'

// 1. Տրված է թիվ. Տպեք այս թվի առաջին նիշը console - ում: 512

// function first(num){
//     let str = '' + num;
//     return str[0]
// }

// console.log(first(284));


// 2. Տրված է թիվ. Տպեք այս թվի վերջին նիշը console - ում: 512

// function last(num){
//     let str = '' + num;
//     return str[str.length - 1]
// }

// console.log(last(284));

// 3. Տրված է թիվ. Տպեք այս թվի առաջին և վերջին թվանշանների գումարը console - ում: 512 5+2

// function foo(num){
//     let str = '' + num;
//     return +str[0] + +str[str.length - 1]
// }

// console.log(foo(284));

// 4. Տրված է թիվ. Տպեք այս թվի թվանշանների քանակը: 512 => 3

// function foo(num){
//     let str = '' + num;
//     return str.length
// }

// console.log(foo(284));

// 5. Տրված է երկու ամբողջ թիվ։ Ստուգեք, որ առաջին թիվը բաժանվում է երկրորդի վրա առանց մնացորդի:

function foo(n1,n2){
    if(n1 % n2){
        return false
    }

    return true
}

console.log(foo(40,50));





