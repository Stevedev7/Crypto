const binary = require('./stringToBinary');

const string = require('./binaryToString');


const inputText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;"

const bin = binary(inputText);

console.log(bin);

console.log(string(bin));
