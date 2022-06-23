import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.prodeuts);
});
// /api/products/slug/
app.get('/api/products/slug/:slug', (req, res) => {
    const prodeut = data.prodeuts.find((x) => x.slug === req.params.slug);
    if (prodeut) {
        res.send(prodeut);
    } else {
        res
            .status(404)
            .send({ message: 'Product Not found ....................!!!!' });
    }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});