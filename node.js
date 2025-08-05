// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let votes = {
  'Candidate A': 0,
  'Candidate B': 0
};

app.post('/vote', (req, res) => {
  const candidate = req.body.candidate;
  if (votes[candidate] !== undefined) {
    votes[candidate]++;
    res.json({ message: `Vote casted for ${candidate}` });
  } else {
    res.status(400).json({ message: 'Invalid candidate' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
