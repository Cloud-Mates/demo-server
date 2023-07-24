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
    res.write("6 \n");
    res.write("7 \n");
    res.write("8 \n");
    res.write("9 \n");
    res.write("10 \n");
    res.write("11 \n");
    res.end('Response ends here!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})