/* require's */
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

/* cotrollers definitions */
const controller = {
    
    index : ( req, res) => {
        const admins = [ "Ada","Greta","Vim","Tim"];
        const user = req.query.user;

        admins.some( admin => admin.toLowerCase() == user.toLowerCase() ) ?
            res.send( `Hola admin: ${user}` ) :
            res.send( 'No tienes permiso para ver este contenido.');


    }

}

module.exports = controller;