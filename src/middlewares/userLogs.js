const { resolve } = require('path');
const path = require('path');
const addLineToFile = require('../modules/addLineToFile');

// let fileDir = path.resolve('..','database','userLogs.txt');
let fileDir = './src/database/userLogs.txt'

module.exports = ( req, res, next) => {
    let content = `El ususario igreso a la ruta:\t${req.url}\nTime: ${new Date().toLocaleString()}\n`
    addLineToFile( content, fileDir)
    next();
}