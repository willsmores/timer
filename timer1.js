const input = process.argv.slice(2);

// Make sure input is not empty
if (input.length === 0) {
  process.exit();
}

// Make sure input contains positive integers
let numberArray = [];
for (let arg of input) {
  if (Number.isInteger(Number(arg)) && Number(arg) > 0) {
    numberArray.push(Number(arg));
  }
}

// console.log(numberArray);

for (let arg of numberArray) {
  setTimeout(() => {
    process.stdout.write('\x07'); // Audible check
    console.log(arg); // Visible check
  }, arg * 1000); // Convert arg to ms
}