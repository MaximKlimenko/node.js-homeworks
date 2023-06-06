#!/usr/bin/env node

const readline = require('readline')
const yargs = require('yargs')

const target = Math.floor(Math.random() * 100)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ans = () => {
    rl.question("Ваш вариант: ", (data) => {
        if (data == target) {
            console.log(`Отгадано число ${target}`);
            rl.close();
        } else if (data > target) {
            console.log('Загадонное число меньше!');
            ans()
        } else {
            console.log('Загадонное число больше!');
            ans()
        }
    
    })
}

console.log('Загадано число в диапазоне от 0 до 100');
ans()