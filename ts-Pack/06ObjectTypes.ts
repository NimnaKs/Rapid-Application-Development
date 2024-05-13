// Should be pass an user object to this function
function printUser
    (user : {
        id : number;
        name : string;
    }) : void
{
    console.log(`The user id is ${user.id}`);
    console.log(`The user name is ${user.name}`);
}

printUser({id:1,name:'Nimna'});

// printUser({id:1,name:'Nimna',age:5}); Illegal