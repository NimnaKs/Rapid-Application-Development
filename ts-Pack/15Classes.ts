interface Vehicle {
    horn(): void;
}

class OldCar{
    constructor() {
        console.log('Invoking super class constructor');
    }

    go():string{
        return 'old car is go';
    }
}

class NewCar extends OldCar implements Vehicle{
    go():string{
        return 'New car is go';
    }

    horn(): void {
        console.log('New car is pomp pomp !');
    }
}

let newCar = new NewCar();
console.log(newCar.go());
// Method Overriding  - OOP concepts .....
newCar.horn();


