// -------------------

// 1.parameter type annotation method
function greet(name : string){
    console.log("hello "+name.toUpperCase())
}

//greet(43); //Illegal,would be runtime error if this execute
greet('Mathew')

// 2.Return type annotation method
function getRandomNumber() : number{
    return Math.random();
    /*return 'Hello';
    return 10>5;*/
}

const  data = () => {
    // return 'a'
    return 10;
}

const data2 = ():number => 10+10;

// ----------------

// 3. Anonymous function
const marks : number[] = [10,20,30,40,50];

// Please give me a call back function

marks.forEach(
    function (mark : number) {
        console.log(mark + '-')
    }
);

console.log('--------------------------')
marks.forEach(
    (mark : number) =>
        console.log(mark)
);

function printInfo(){
    let name = 'Nimna'
    let age = 10;

    console.log(`My name is ${name}, and my age is ${age}`);

    // return '10'; // You cannot, because this function is now has void type annot
}