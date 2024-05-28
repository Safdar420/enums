var Days;
(function (Days) {
    Days["Monday"] = "SunnyDay";
    Days["Tuesday"] = "CloudyDay";
    Days["Wednesday"] = "RainyDay";
})(Days || (Days = {}));
console.log(Days.Wednesday);
console.log(Days["Monday"]);
console.log(Days[1]);
var Days1;
(function (Days1) {
    Days1[Days1["Monday"] = 0] = "Monday";
    Days1[Days1["Tuesday"] = 1] = "Tuesday";
    Days1[Days1["Wednesday"] = 2] = "Wednesday";
})(Days1 || (Days1 = {}));
console.log(Days1.Monday);
console.log(Days1.Tuesday);
console.log(Days1.Wednesday);
var Days2;
(function (Days2) {
    Days2[Days2["Monday"] = 1] = "Monday";
    Days2[Days2["Tuesday"] = 3] = "Tuesday";
    Days2[Days2["Wednesday"] = 5] = "Wednesday";
})(Days2 || (Days2 = {}));
console.log(Days2["Monday"]);
console.log(Days2["Tuesday"]);
console.log(Days2["Wednesday"]);
console.log(Days2);
