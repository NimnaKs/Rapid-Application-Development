let data1 : [number,string,boolean] = [10,'Hello',true];

let [a,b,c] = data1;
console.log('a : ',a);
console.log('b : ',b);
console.log('c : ',c);

// --------------------------------------------------------

let user2 = {
    id : 'U001',
    name : 'Nimna',
    email : 'nimna@info.com'
}

let {id,name,email} = user2;

export  {}

console.log('Id : ',id);
console.log('Name : ',name);
console.log('Email : ',email);