interface User {
    id : string;
    name : string;
    creditCardNumber ?  : number; // I make this prop as optional using ?
}

let user : User = {
    id : 'U001',
    name : 'Passan'/*,
    creditCardNumber : 456443323455645*/
}