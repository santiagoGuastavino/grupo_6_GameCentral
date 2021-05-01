const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve('./public')
app.use(express.static(publicPath));

const indexPath = path.resolve('./views/index.html');
app.get('/', (req, res) => res.sendFile(indexPath));

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});

app.listen(process.env.PORT || 3001, () => console.log('Servidor corriendo en el puerto 3001'));