interface Employee {
    empId : number;
    email : string;
    name : string;
}

function validateEmployee(emp : Employee){
    // validate logic here ....
}

validateEmployee({
    empId:1,
    email:'nimna@info.com',
    name:'Nimna'
})

// validateEmployee(10); Illegal

/*
validateEmployee({
    empId:1,
    email:'nimna@info.com'
}) Illegal*/
