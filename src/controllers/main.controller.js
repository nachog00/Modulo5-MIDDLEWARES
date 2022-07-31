/* require's */
const fs = require('fs');
const path = require('path');

/* cotrollers definitions */
const controller = {
    
    index : (req, res) => {
        res.send( 'Hi there')
    }

}

module.exports = controller;