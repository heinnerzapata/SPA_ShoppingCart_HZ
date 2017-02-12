var express = require('express');
//var products = require('./data.json');
var fs = require('fs');  
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

var products = [];

// Read the file and send to the callback
fs.readFile('data/data.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    products = JSON.parse(data)
    // You can now play with your datas
}

function Machine (nMachId,nMachDesc,nMachImg,nMachKm) { 
    this.MachId = nMachId;
    this.MachDesc = nMachDesc;
    this.MachImg = nMachImg;
    this.MachKm = nMachKm; 
}


// Start server
var server = app.listen(port, function () {
   var host = server.address().address

   console.log("Example app listening at http://%s:%s", host, port)
})


/*API REST MACHINES****************************************************/

/*GET*/
app.get('/api/products', function (req, res) {

    res.json(JSON.stringify(products));

});   
