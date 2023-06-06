#!/usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

let date = new Date()
const argv = yargs(hideBin(process.argv)).argv
const entries = Object.entries(argv)

const current = (time) => {
    switch (time) {
        case 'year':
        case 'y':
            date = date.getFullYear()
            break;
        case 'month':
        case 'm':
            date = date.getMonth() + 1
            break;
        case 'date':
        case 'd':
            date = date.getDate()
            break;
        }
}

const add = (time, amount) => {
    switch (time) {
        case 'year':
        case 'y':
            date = date.getFullYear() + amount
            break;
        case 'month':
        case 'm':
            date = date.getMonth() + amount + 1
            break;
        case 'date':
        case 'd':
            date = date.getDate() + amount
            break;
        }
}

const sub = (time, amount) => {
    switch (time) {
        case 'year':
        case 'y':
            date = date.getFullYear() - amount
            break;
        case 'month':
        case 'm':
            date = date.getMonth() - amount + 1
            break;
        case 'date':
        case 'd':
            date = date.getDate() - amount
            break;
        }
}


switch (argv['_'][0]) {
    case 'current':
        current(entries[1][0])
        break;
    case 'add':
        add(entries[1][0], entries[1][1])
        break;
    case 'sub':
        sub(entries[1][0], entries[1][1])
        break;
}


console.log(date);