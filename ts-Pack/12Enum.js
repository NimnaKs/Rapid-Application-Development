// IIFE  - Immediately invoked function and expression in Js
var Season;
(function (Season) {
    Season[Season["WINTER"] = 0] = "WINTER";
    Season[Season["AUTUMN"] = 1] = "AUTUMN";
    Season[Season["SPRING"] = 2] = "SPRING";
    Season[Season["SUMMER"] = 3] = "SUMMER";
})(Season || (Season = {}));
var season = Season.WINTER;
console.log(season);
