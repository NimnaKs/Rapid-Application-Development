function printId(id: string | number){
    console.log(id);
}

printId('1');
printId(10);
// printId(true); // cannot accept this argument type

// ---------------------------------------

function displayId( id : number | string){
    if (typeof id == 'string'){
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

displayId("abc");
displayId(10);

// --------------------------------

// working with Array.isArray
function welcomePeople(names : string | string[]){
    if (Array.isArray(names)){
        names.map((name) => {
            console.log(`Hey! Welcome ${name}!`);
        });
    } else {
        console.log(`Hey! Welcome lone traveler ${names}!`);
    }
}

welcomePeople(['Nimna','Sahan','Lushan','Nipun']);
welcomePeople('Nimna');

// -------------------------------

//let data : number[] | boolean[] = [10,20,true,false];
//let data : (number | boolean)[] = [10,20,true,false,'Hi']; // Cannot add string
let data : (number | boolean)[] = [10,20,true,false];

// -----------------------------------
// Strict Union
function windowStatus(status : "open"|"close"){
    console.log(`The window is ${status}`)
}

windowStatus("close");
windowStatus("open")