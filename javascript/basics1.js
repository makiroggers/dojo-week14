// Basic challenge 1
let x = [];
console.log(x);
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();
console.log(x);    

// Basic challenge 2
const y = [];
console.log(y);
y.push(88);
console.log(y);
    
// Basic challenge 3
let z = [9, 10, 6, 5, -1, 20, 13, 2];
for (let i = 0; i < z.length; i++) {
    console.log(z[i]);
}
for (let n = 0; n < z.length-1; n++) {
    console.log(z[n]);
}

// Basic challenge 4
let names = ["Kadie", "Joe", "Fritz", "Pierre", "Alphonso"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i].length);
}
for (let n = 0; n < names.length; n++) {
    if (names[n].length === 5) {
    console.log(names[n]);
    }
}

// Basic challenge 5
function yell(string) {
  return string.toUpperCase();
}
console.log(yell("maki"));
