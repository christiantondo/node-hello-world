// console.log(process.argv);

// const greetings = "Node.js";
// console.log(`Hello ${greetings} world`);

// const user = process.argv[2];
// console.log(`Hello ${user}`);

const arg = process.argv.splice(2);
const user = arg[0];

user
    ? console.log(`Hello ${user}`)
    : console.error("user not valid, please insert username");