const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.listen(3000, () => {
    // eslint-disable-next-line
    console.log('listening on port 3000')
});
