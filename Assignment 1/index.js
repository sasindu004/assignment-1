"use strict";
let userName = "TypeScript User";
let repetitions = 5;
function greetUser(name, times) {
    for (let i = 0; i < times; i++) {
        console.log(`Hello, ${name}! This is greeting number ${i + 1}.`);
    }
}
greetUser(userName, repetitions);
