const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.write("Hello World!");
    res.write("1 ");
    res.end('Response ends here!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})