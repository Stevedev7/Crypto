const fs = require('fs');
const inputFile = process.argv[2] || 'output.md';
const input = fs.readFileSync(inputFile, 'utf-8').match(/./g);

var frequency = [];

let obj = {
  letter: input[0],
  count: 0,
  unicode: parseInt(input[0].charCodeAt(0), 10).toString(16)
}

frequency.push(obj);
input.forEach((letter) => {
  let i = frequency.find((obj, index) => {
    if(obj.letter === letter){
      obj['index'] = index;
      return obj;
    }
  });
  if (i) {
    let index = i.index;
    frequency[index].count++;
  } else {
    frequency.push({letter, count: 1, unicode: parseInt(letter.charCodeAt(0), 10).toString(16)});
  }
});

frequency.forEach(char => {
  delete char.index;
});


let json = JSON.stringify(frequency);
fs.writeFileSync('frequency.json', json, 'utf-8');
