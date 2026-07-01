# fullstack-demo-backend

Minimal Express API. Two routes:

- `GET /api/health` → `{ "status": "ok" }`
- `GET /api/hello` → `{ "message": "...", "timestamp": "..." }`

## Local dev

```bash
npm install
npm start
```

Listens on `process.env.PORT`, falling back to `4000`.

## Deploying on AletCloud

1. Push this repo to GitHub.
2. In your AletCloud project → **New App** → connect this repo.
3. Leave build/start commands as default (`npm install` / `npm start` — read from `package.json`).
4. Deploy, then copy the app's public URL — you'll need it for the frontend's `VITE_API_URL`.
