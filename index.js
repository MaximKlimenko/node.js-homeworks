#!/usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const path = require('path')
const fs = require('fs')
const readline = require('readline')

const argv = yargs(hideBin(process.argv)).argv
const target = Math.floor(Math.random() * 2) + 1
const file = path.join(__dirname, argv['_'][0])
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Я подбросил монетку! 1 - Орёл, 2 - Решка.')
rl.question("Ваш ход: ", (data) => {
    if (data == target) {
        fs.appendFile(file, 'Выигрыш \n', (err) => {
            if (err) throw Error(err)
            console.log('Вы победили! Поздравляю!');
        })
        rl.close();
    } else {
        fs.appendFile(file, 'Проигрыш \n', (err) => {
            if (err) throw Error(err)
            console.log('Вы не угадали(');
        })
        rl.close();
    }
})
