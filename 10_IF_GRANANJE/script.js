console.log("IF - naredba grananja");

if(false) {
    console.log("Uslov je ispunjen");
}

console.log("Neki kod...");

// Operatori poredjenja: ==, !=, <, >, <=, >=;
let a = 7;
let b = 7;

if (a == b) {
    console.log("a i b su jednake vrednosti");
}
a = 7;
b = 10;
if (a != b) {
    console.log("a i b nisu jednake vrednosti");
}

a = 4;
b = 4;
if (a < b) {
    console.log("a je strogo manje od b");
}

if (a <= b) {
    console.log("a je manje ili jednako b");
}

// == proverava samo jednakost po vrednosti (nije bitan tip);
a = 5;
b = "5";
if (a == b) {
    console.log("a i b su jednake vrednosti");
}

// === proverava jednakost i po tipu i po vrednosti (bitan je tip i vrednost);

a = "5";
b = "5";
if (a === b) {
    console.log("a i b su jednaki po vrednosti i po tipu")
}

// !== da li su dve promenljive razlicite bilo po tipu, bilo po vrednosti

a = 7;
b = "7";
if(a !== b) {
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti");
}

////////////////////

let x = 3;
let y = 4;
let z = 5;
if(x + y == z + 2) {
    console.log("x + y je jednako sa z + 2");
}
