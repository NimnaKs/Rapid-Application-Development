var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OldCar = /** @class */ (function () {
    function OldCar() {
        console.log('Invoking super class constructor');
    }
    OldCar.prototype.go = function () {
        return 'old car is go';
    };
    return OldCar;
}());
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCar.prototype.go = function () {
        return 'New car is go';
    };
    NewCar.prototype.horn = function () {
        console.log('New car is pomp pomp !');
    };
    return NewCar;
}(OldCar));
var newCar = new NewCar();
console.log(newCar.go());
// Method Overriding  - OOP concepts .....
newCar.horn();
