const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.write("Hello World! \n");
    res.write("1 \n");
    res.write("2 \n");
    res.write("3 \n");
    res.write("4 \n");
    res.write("5 \n");
    res.end('Response ends here!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})