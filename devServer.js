const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const publicPath = path.join('', '');

const app = express();

app.use(express.static(publicPath));

if (process.env.NODE_ENV !== 'production') {
    let compiler = webpack(config);
    app.use(
        require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath
        })
    );
    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(morgan('combined'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://0.0.0.0:' + PORT);
});