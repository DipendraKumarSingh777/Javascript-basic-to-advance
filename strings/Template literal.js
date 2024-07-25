

//template literals
let SpecialString=`hi my name is dipendra`;
console.log(SpecialString);
console.log(typeof SpecialString);



//to print the cost of item
let obj={
    item:"shirt",
    price:200,
};
console.log("the cost of",obj.item,"is",obj.price,"rupees");




//using template literal we can write directly with the help of back tick

let data={
    item:"shirt",
    price:200,
};
let output =`the cost of ${data.item} is ${data.price} rupees`;
console.log(output);



//template literals we can add value also
let specialString=`this is a template literal ${2+3+3}`;
console.log(specialString);



//template literals escape character(break the line)
let str="samir\nsingh";
console.log(str.length);