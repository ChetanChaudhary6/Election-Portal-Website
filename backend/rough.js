const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 8000;

const secretKey = 'jaat'; // Your secret key

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/create', (req, res) => {
    const id = req.query.id; // Assuming you receive the ID in the request body
    if (!id) {
        return res.status(400).json({ message: 'Missing ID in the request body' });
    }

    const token = jwt.sign({ id: id }, secretKey);
    res.json({ token: token, id: id });
});

app.post('/verify', (req, res) => {
    // Extract the token from the request (in this example, we're assuming it's in the "Authorization" header)
    const token = req.headers.authorization.split(' ')[1];

    // Verify and decode the token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.sendStatus(403); // Token is not valid
        }
        // Token is valid, access granted, and 'id' is included in the decoded payload
        res.json({ message: 'Access granted', user: decoded });
    });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDAiLCJpYXQiOjE2OTc4ODAyOTN9.0F4H6lgBgS5TtMgusllAXk9uoBGydqNNLQVB__d6gEU
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDAiLCJpYXQiOjE2OTc4ODA0Mjl9.D965SfWNLYNFUmR3_m9L9MxDgOli5mfoezZq8ZMCTY8