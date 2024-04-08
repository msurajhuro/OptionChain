const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/chain', async (req, res) => {
    try {
        const nseURL = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY";
        const response = await fetch(nseURL);
        const data = await response.json();
        res.json(data.records);
    } catch (error) {
        console.error('Error fetching option chain:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
