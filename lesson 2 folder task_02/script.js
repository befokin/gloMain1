let num = 266219;

let res = 1;

num = String(num);

for (let i = 0; i < num.length; i++) {
console.log(num[i]);

    res *= num[i];
}
console.log(res);

result = (res**3);
console.log(result);

result = String(result);

console.log(result.substring(0,2));