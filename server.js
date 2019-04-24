const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

/** Config */
app.use(fileUpload());

/** Endpoint de upload */
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No hay archivo para subir' });
  }

  const file = req.files.file; //req.files es de express, de ahi trae el archivo subido. El file que le puse al lado, es el nombre del input, podia ponerle pepito entonces quedaria req.files.pepito

  //file.mv nos provee express-fileupload, esta en la documentacion. Lo mismo que file.name . La doc la dejo en el readme.
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

/** Server */
app.listen(5000, () => console.log('El server ha comenzado'));
