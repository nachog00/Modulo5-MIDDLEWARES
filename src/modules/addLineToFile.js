const fs = require('fs');

module.exports = ( line, dir) => {
    fs.appendFile( dir, line + '\n', (err, data) => {
        err ?
            console.log(err, data) :
            console.log('line updated successfully');
    })    
}
