#!/usr/bin/env node

const http = require('http')
const readline = require('readline')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
require('dotenv').config()

const access_key = process.env.access_key
const argv = yargs(hideBin(process.argv)).argv
let query = 'Moscow'                           // Если не вводить город для получения погоды, по умолчанию стоит Москва
if (argv['_'] !== []) {
    query = argv['_'][0]
}
const url=`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`

console.log(argv);
http.get(url, (res) => {
    const {statusCode} = res
    if (statusCode !== 200) {
        console.log(`Error: ${statusCode}`)
        return
    }

    res.setEncoding('utf8')
    let data = ''
    res.on('data', (chunk) => data += chunk)
    res.on('end', () => {
        let parse = JSON.parse(data)
        console.log(parse)
    })
}).on('error', (err) => {
    console.error(err)
})