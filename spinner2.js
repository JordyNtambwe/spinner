const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;

process.stdout.write('hello from spinner1.js... \rheyyy\n');

for (const character of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay);
  delay += 200;
}