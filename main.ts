enum Days {
    Monday = "SunnyDay",
    Tuesday = "CloudyDay",
    Wednesday ="RainyDay",
    }

console.log(Days.Wednesday);
console.log(Days["Monday"]);
console.log(Days[1]);


enum Days1 {
    Monday,
    Tuesday,
    Wednesday,
}

console.log(Days1.Monday);
console.log(Days1.Tuesday);
console.log(Days1.Wednesday);

enum Days2 {
    Monday =1,
    Tuesday =3,
    Wednesday =5,
}

console.log(Days2["Monday"]);
console.log(Days2["Tuesday"]);
console.log(Days2["Wednesday"]);
console.log(Days2);
