type Vehicle = {
    model : string
}

interface Animal {
    name : string
}

// -----------------------------------------------------

// Extendability -> Both have extendability

interface Dog extends  Animal {
    weight : number;
}

type Car = Vehicle & {
    topSpeed : number;
}

// Adding property to an existing

interface Human {
    id : number
}

interface Human {
    name : string
}

type Love = {
    shape : string
}

/*
type Love = {
    duration : number
} Illegal : duplicate Identifier*/
