# CaneX Cleaning

Full-stack booking website for CaneX Cleaning. The frontend uses React/Vite and the API uses Express, MongoDB, JWT authentication, and Nodemailer.

## Local setup

1. Copy `.env.example` to `.env` in both `cleanxCleaning` and `cleanxcleaningBackend`.
2. Set `VITE_BASE_URL`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`, and email credentials.
3. Start the API from `cleanxcleaningBackend`:

   ```bash
   npm install
   npm run dev
   ```

4. Start the frontend from `cleanxCleaning`:

   ```bash
   npm install
   npm run dev
   ```

Create an admin account with `POST /auth/register`, then sign in at `/admin`. Admins can filter bookings and update statuses; status changes notify the customer by email.

## Validation

```bash
npm run lint
npm run build
```
