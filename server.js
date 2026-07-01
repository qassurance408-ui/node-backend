const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Wide-open CORS is fine for this demo. Lock it down to your frontend's
// origin if you keep this around longer than a quick test.
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from the AletCloud backend 👋',
    timestamp: new Date().toISOString(),
  });
});

app.use((req, res, next) => {
  console.log('Incoming path:', req.path);
  next();
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
