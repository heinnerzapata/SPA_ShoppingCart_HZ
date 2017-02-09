var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

// Configuración
app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});


// Start server
var server = app.listen(port, function () {
   var host = server.address().address

   console.log("Example app listening at http://%s:%s", host, port)
})
